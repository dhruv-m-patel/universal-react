# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code of Conduct - Required Workflow

**These requirements MUST be followed by all AI agents and sub-agents working in this repository:**

1. **Always run `nvm use` first** - Before starting any work in this repo, whether in the current terminal or in a background shell, always run `nvm use` to ensure the correct Node.js version is active.

2. If making code changes, `yarn build` must pass.

3. **Run lint before committing** - Before committing any work, always run `yarn lint` to ensure code meets style guidelines.

4. **Run tests before pushing** - Before pushing commits to the remote repository, always run `yarn test`. If there are test failures, fix them. Never push failing tests.

5. **100% pass rate for plan-driven changes** - When working on plan-driven changes (multi-step implementations), before committing:
   - Run `yarn lint` - must pass 100%
   - Run `yarn test` - must pass 100%
   - Lesser coverage or failing tests is NOT acceptable
   - Everything must pass before the commit is made

6. **Always use conventional commits** - All commits must follow the Conventional Commits specification (see below for details)

## Project Overview

Universal React is a server-side rendered (SSR) React application boilerplate with database support. It uses Express for the server, React 18 for the UI, Webpack 4 for bundling, and supports MySQL or PostgreSQL databases.

## Development Commands

### Setup

```bash
nvm use
corepack enable
yarn set version self
yarn install
```

### Development

- `yarn start-dev` - Start development server with hot-reloading (uses babel-node)
- `yarn start:watch` - Clean, build, and start with nodemon for auto-restart

### Building

- `yarn build` - Build both server and client for production
- `yarn build:server` - Transpile server code with Babel to `build/` directory
- `yarn build:client` - Bundle client code with Webpack to `build-static/` directory
- `yarn clean` - Remove build and build-static directories

### Production

- `yarn start` - Start production server (requires `yarn build` first)

### Testing

- `yarn test` - Run all tests with Jest
- `yarn ci:test` - Run tests with snapshot updates and coverage (used in CI)
- `yarn pretest` - Clear Jest cache (runs automatically before tests)

### Linting

- `yarn lint` - Run both JS and CSS linting
- `yarn lint:js` - Run ESLint on src/**/\*.js and src/**/\*.jsx
- `yarn lint:css` - Run Stylelint on src/\*_/_.css
- `yarn prettier:format` - Format all files with Prettier
- `yarn prettier:verify` - Check formatting without making changes

### Database Migrations

- `yarn migration:create` - Create a new migration file
- `yarn migration:apply` - Apply migrations to local database
- `yarn migration:apply:stage` - Apply migrations to staging database
- `yarn migration:apply:prod` - Apply migrations to production database
- `yarn migration:undo` - Undo the most recent migration

### Storybook

- `yarn storybook` - Start Storybook on port 3001
- `yarn build-storybook` - Build static Storybook

## Conventional Commits

**All commits in this repository MUST follow the Conventional Commits specification.**

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: New feature or functionality
- **fix**: Bug fix
- **docs**: Documentation changes only
- **style**: Code style changes (formatting, semicolons, etc.) - no logic changes
- **refactor**: Code refactoring - no feature changes or bug fixes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, build config, etc.)
- **ci**: CI/CD pipeline changes

### Examples

✅ **DO:**

```bash
feat: add user authentication middleware
feat(auth): implement JWT token validation
fix: resolve memory leak in database connection pool
fix(ssr): correct hydration mismatch on homepage
docs: update database setup instructions in README
test: add unit tests for executeQuery function
chore: upgrade React to v18.2.0
refactor(middleware): simplify renderPage logic
```

❌ **DON'T:**

```bash
Added new feature                    # Missing type and colon
fix user login                       # Missing colon
feat!: breaking change               # Use BREAKING CHANGE in footer instead
Fixed stuff                          # Too vague
updated files                        # Not descriptive, missing type
WIP: work in progress                # Don't commit WIP
```

### Guidelines

1. **Use lowercase** for type and description
2. **Use imperative mood** - "add" not "added" or "adds"
3. **Be specific** - Clearly describe what changed and why
4. **Scope is optional** but recommended for larger codebases
5. **Keep first line under 72 characters** for better git log readability
6. **Breaking changes** - Add `BREAKING CHANGE:` in footer with description

### Breaking Changes Example

```bash
feat(api): change executeQuery return format

BREAKING CHANGE: executeQuery now returns { data, rowCount } instead of raw results
```

## Architecture

### Configuration System (Confit + Meddleware)

The app uses a layered configuration system:

- **Base config**: `config/config.json` contains default settings
- **Environment overrides**: `config/development.json`, `config/production.json`, `config/staging.json`, `config/test.json`
- **Protocol handlers**: Custom protocols in config files:
  - `path:` - Resolve paths relative to project root
  - `sourcepath:` - Resolve to `src/` in dev, `build/` in production
  - `env:` - Read from environment variables
  - `require:` - Require Node modules

Middleware is configured declaratively in `config/config.json` under the `meddleware` key with priority ordering (lower numbers run first).

### Server Architecture

**Entry point**: `src/server/index.js` creates ExpressServer instance and starts it.

**ExpressServer class** (`src/server/ExpressServer.js`):

1. Creates Express app and HTTP server
2. Loads configuration using confit with protocol handlers
3. In development: configures webpack-dev-middleware and webpack-hot-middleware for HMR
4. Applies middleware from configuration using meddleware
5. Optionally connects to MySQL or PostgreSQL based on `DB_DRIVER` env var

**Middleware execution order** (from `config/config.json`):

1. Logger (morgan) - priority 20
2. Static files from `./static` - priority 21
3. Webpack assets from `./build-static` - priority 22
4. Cookie parser - priority 23
5. JSON body parser - priority 24
6. Form body parser - priority 25
7. Gzip compression - priority 26
8. Routes (express-enrouten) - priority 26
9. SSR renderPage middleware - priority 100 (catches all remaining requests)

### Server-Side Rendering (SSR)

**renderPage middleware** (`src/server/middleware/renderPage.js`):

- Catches all requests not handled by API routes
- Uses `@loadable/server` ChunkExtractor to track which chunks are needed
- Creates Redux store with preloaded state (from `req.initialState` or DEFAULT_STATE)
- Renders React app to string using `renderToString` with StaticRouter
- Injects preloaded state into window.**PRELOADED_STATE**
- Returns complete HTML with script/style tags from ChunkExtractor

### Client Architecture

**Entry point**: `src/client/index.js` hydrates the SSR'd app.

**Hydration process**:

1. Reads `window.__PRELOADED_STATE__` from SSR
2. Creates Redux store with preloaded state
3. Uses `loadableReady()` to wait for all loadable components
4. Hydrates React app into `#root` div using `hydrateRoot` (React 18)

### Code Splitting

Uses `@loadable/component` for route-based code splitting:

- Routes are defined in `src/common/router.jsx` using loadable() dynamic imports
- Each route component is split into separate chunks
- ChunkExtractor on server identifies required chunks
- loadableReady() on client waits for chunks before hydration

### Routing

**Server routes** (`src/server/routes/`):

- Auto-loaded by express-enrouten from `src/server/routes/` directory
- Each file exports a function that receives router and registers routes
- API routes should be placed in `src/server/routes/api/`
- Non-API routes should call `next()` to pass through to renderPage middleware

**Client routes** (`src/common/router.jsx`):

- Uses react-router-dom with Switch and Route components
- All routes use loadable() for code splitting
- Client-side routing handled by BrowserRouter in `src/client/renderApp.js`

### Database Integration

**MySQL** (`src/lib/clients/mysql.js`):

- Uses connection pool with 100 connections
- `connectMysqlDb()` creates and returns pool
- `executeQuery(req, query, params)` executes parameterized queries
- Access via `req.app.db` in route handlers

**PostgreSQL** (`src/lib/clients/postgres.js`):

- Uses pg Pool for connection management
- `connectPostgresDb()` returns connected client
- `executeQuery(req, query, params)` executes parameterized queries
- Access via `req.app.db` in route handlers

Database is initialized in `src/server/index.js` after server starts, based on `DB_DRIVER` env var.

### Redux State Management

**Store creation** (`src/client/store.js`):

- Creates Redux store with redux-api-middleware
- Accepts initial state (from SSR or DEFAULT_STATE)

**Reducers** (`src/client/redux/reducers/index.js`):

- Root reducer combines all sub-reducers
- DEFAULT_STATE exported for SSR initialization

**Actions** (`src/client/redux/actions.js`):

- Defines Redux actions and API middleware actions

### Build System

**Webpack** (`webpack.config.js`):

- Entry: `src/client/index.js` (with HMR in dev)
- Output: `build-static/` with chunkhash in production
- CSS Modules with hash-based class names
- Code splitting: vendor chunk for React/React-DOM/Router
- Plugins: ManifestPlugin, LoadablePlugin, MiniCssExtractPlugin
- Dev mode: HMR with webpack-hot-middleware

**Babel** (`babel.config.js`):

- Transpiles JSX and modern JS features
- Two environments:
  - Default: Uses css-modules-transform for server-side CSS handling
  - webpack: Skips css-modules-transform (Webpack handles CSS)
- Key plugins: @loadable/babel-plugin, babel-plugin-macros

## Adding Features

### Adding a new middleware

1. Create middleware function in `src/server/middleware/`
2. Add configuration entry in `config/config.json` under `meddleware` key
3. Set appropriate priority (lower runs first, renderPage is 100)
4. Use `sourcepath:` protocol to reference the file

### Adding a new route

**Server route**:

1. Create file in `src/server/routes/` (or `src/server/routes/api/` for APIs)
2. Export function that accepts router and registers routes
3. For non-API routes, call `next()` to pass to SSR middleware

**Client route**:

1. Create component in `src/common/components/`
2. Add Route in `src/common/router.jsx` using loadable() dynamic import

### Adding database support

1. Set up `.env` file based on `.env.example`
2. Set `DB_DRIVER=mysql` or `DB_DRIVER=pg`
3. Provide DB_HOST, DB_USER, DB_PASS, DB_NAME credentials
4. Access database in routes via `req.app.db`
5. Use `executeQuery(req, query, params)` from mysql.js or postgres.js

### Adding a new component

1. Create component in `src/common/components/ComponentName/`
2. Component file: `ComponentName.jsx`
3. Test file: `ComponentName.test.js`
4. Styles (if needed): `ComponentName.css` (CSS Modules)
5. Export from `index.js` for clean imports
6. Optionally add Storybook story: `ComponentName.stories.js`

## Important Patterns

### Environment-specific code paths

- In development: code runs from `src/` directory via babel-node
- In production: code runs from `build/` directory after transpilation
- Use `sourcepath:` protocol in config to handle this automatically

### CSS Modules

- All .css files are treated as CSS Modules
- Class names are locally scoped with format: `[name]__[local]___[hash:base64:5]`
- Import styles as object: `import styles from './Component.css'`
- Use className: `className={styles.myClass}`

### Preloading state for SSR

- Use `req.initialState` to pass data from server routes to SSR
- Set `req.initialState` in route handler before calling `next()`
- renderPage middleware will use this state for Redux store initialization

### Git hooks

- Husky runs lint-staged on pre-commit (formats with Prettier)
- Runs tests before push

## Testing

- Jest configured in `jest.config.js`
- Test files: `*.test.js` alongside components
- Snapshots: `__snapshots__/` directories
- Run single test: `yarn test path/to/test.test.js`
- Update snapshots: `yarn test -u`

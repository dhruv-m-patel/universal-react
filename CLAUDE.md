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

Universal React is a server-side rendered (SSR) React application boilerplate with database support. It uses Express for the server, React 18 for the UI, Vite 5 for blazing-fast bundling, and supports MySQL or PostgreSQL databases. The UI is built with Radix UI primitives and Tailwind CSS for modern, accessible components.

## Development Commands

### Setup

```bash
nvm use
corepack enable
yarn set version self
yarn install
```

### Development

- `yarn start-dev` - Start development server with Vite HMR (uses babel-node + Vite middleware)
- `yarn start:watch` - Clean, build, and start with nodemon for auto-restart

### Building

- `yarn build` - Build both server and client for production with Vite (< 5s total!)
- `yarn build:server` - Transpile server code with Babel to `build/` directory
- `yarn build:client` - Bundle client code with Vite to `build-static/` directory (3-4s)
- `yarn build:ssr` - Build SSR bundle with Vite to `build/server/` directory (< 1s)
- `yarn clean` - Remove build and build-static directories

### Production

- `yarn start` - Start production server (requires `yarn build` first)

### Testing

- `yarn test` - Run all tests with Vitest (107 tests passing)
- `yarn test:ui` - Run Vitest with UI for interactive test debugging
- `yarn test:coverage` - Run tests with coverage reports

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

- `yarn storybook` - Start Storybook v8 with Vite on port 3001
- `yarn build-storybook` - Build static Storybook

**Theme Addon**: Storybook includes `@storybook/addon-themes` for previewing components in light/dark modes. The theme switcher applies the `dark` class to the `<html>` element, matching the app's ThemeSwitch component behavior.

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
3. In development: configures Vite dev server middleware for instant HMR (~50-200ms)
4. Applies middleware from configuration using meddleware
5. Optionally connects to MySQL or PostgreSQL based on `DB_DRIVER` env var

**Middleware execution order** (from `config/config.json`):

1. Logger (morgan) - priority 20
2. Static files from `./static` - priority 21
3. Vite dev middleware (dev only) or static assets from `./build-static` (prod) - priority 22
4. Cookie parser - priority 23
5. JSON body parser - priority 24
6. Form body parser - priority 25
7. Gzip compression - priority 26
8. Routes (express-enrouten) - priority 26
9. SSR renderPage middleware - priority 100 (catches all remaining requests)

### Server-Side Rendering (SSR)

**renderPageVite middleware** (`src/server/middleware/renderPageVite.js`):

- Catches all requests not handled by API routes
- In development: Uses Vite's `ssrLoadModule` to load fresh server entry on each request
- In production: Uses pre-built SSR bundle from `build/server/app.mjs`
- Creates Redux store with preloaded state (from `req.initialState` or DEFAULT_STATE)
- Renders React app to string using `renderToString` with StaticRouter
- Injects preloaded state into `window.__PRELOADED_STATE__`
- Returns complete HTML with proper script/style tags from Vite manifest

### Client Architecture

**Entry point**: `src/client/index.js` hydrates the SSR'd app.

**Hydration process**:

1. Reads `window.__PRELOADED_STATE__` from SSR
2. Creates Redux store with preloaded state
3. Hydrates React app into `#root` div using `hydrateRoot` (React 18)
4. Vite handles all module loading and HMR in development

### Code Splitting

Uses `React.lazy()` for route-based code splitting:

- Page components are located in `src/common/pages/`
- Client routes in `src/client/router.jsx` use `React.lazy()` dynamic imports
- Server routes in `src/server/router.jsx` use direct imports for SSR (no lazy loading)
- Each route component is split into separate chunks by Vite automatically
- Client uses lazy imports for optimal bundle splitting

### Routing

**Server routes** (`src/server/routes/`):

- Auto-loaded by express-enrouten from `src/server/routes/` directory
- Each file exports a function that receives router and registers routes
- API routes should be placed in `src/server/routes/api/`
- Non-API routes should call `next()` to pass through to renderPage middleware

**Client routes** (`src/common/router.jsx`):

- Uses react-router-dom v6 with Routes and Route components
- All routes use `React.lazy()` for code splitting
- Client-side routing handled by BrowserRouter in `src/client/renderApp.js`
- Note: Router v6 uses element prop instead of component/render props

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

**Vite** (`vite.config.js`):

- Client entry: `src/client/app.jsx`
- SSR entry: `src/server/app.jsx`
- Output: `build-static/` for client, `build/server/` for SSR
- CSS Modules with hash-based class names (automatic)
- Code splitting: Vite automatically splits vendor chunks and routes
- PostCSS with Tailwind CSS processing
- Dev mode: Lightning-fast HMR (~50-200ms) with Vite dev middleware
- Build time: < 5s total (vs previous ~90s with Webpack!)

**Key Vite features**:

- Native ESM in development (no bundling needed)
- Optimized production builds with Rollup
- Automatic CSS code splitting
- Built-in TypeScript/JSX support
- `.vite/manifest.json` tracks all assets for SSR

**Babel** (`babel.config.js`):

- Transpiles JSX and modern JS features for server code
- Uses css-modules-transform for server-side CSS handling
- Used for `build/` directory transpilation only (Vite handles client)

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

1. Create page component in `src/common/pages/PageName/`
2. Add Route in `src/client/router.jsx` using `React.lazy(() => import('../common/pages/PageName'))`
3. Add Route in `src/server/router.jsx` with direct import for SSR

### Adding database support

1. Set up `.env` file based on `.env.example`
2. Set `DB_DRIVER=mysql` or `DB_DRIVER=pg`
3. Provide DB_HOST, DB_USER, DB_PASS, DB_NAME credentials
4. Access database in routes via `req.app.db`
5. Use `executeQuery(req, query, params)` from mysql.js or postgres.js

### Adding a new component

1. Create component in `src/common/components/ComponentName/`
2. Component file: `ComponentName.jsx`
3. Test file: `ComponentName.test.jsx` (use .jsx extension for JSX in tests)
4. Styles: Use Tailwind classes or `ComponentName.css` (CSS Modules) or both
5. Export from `index.js` for clean imports
6. Add Storybook story: `ComponentName.stories.jsx` (CSF3 format)
7. Consider using Radix UI primitives for accessible base components

## Important Patterns

### Environment-specific code paths

- In development: code runs from `src/` directory via babel-node
- In production: code runs from `build/` directory after transpilation
- Use `sourcepath:` protocol in config to handle this automatically

### CSS Modules + Tailwind

**CSS Modules**:

- All .css files are treated as CSS Modules (automatic with Vite)
- Class names are locally scoped with format: `[name]__[local]___[hash:base64:5]`
- Import styles as object: `import styles from './Component.css'`
- Use className: `className={styles.myClass}`

**Tailwind CSS**:

- Utility-first CSS framework configured in `tailwind.config.js`
- Dark mode enabled with `darkMode: 'class'` strategy
- Use directly in className: `className="flex items-center gap-2 px-4 py-2"`
- Dark mode support: `className="bg-white dark:bg-slate-800"`
- Can combine with CSS Modules: `className={`${styles.custom} flex gap-2`}`
- PostCSS processes Tailwind directives automatically
- ThemeSwitch component toggles dark mode by adding/removing `dark` class on `<html>` element

**Radix UI**:

- Unstyled accessible component primitives
- Style with Tailwind classes
- Example: `<Dialog.Root>`, `<Select.Root>`, `<Tooltip.Root>`
- Located in `src/common/ui/` for reusable components

### Preloading state for SSR

- Use `req.initialState` to pass data from server routes to SSR
- Set `req.initialState` in route handler before calling `next()`
- renderPage middleware will use this state for Redux store initialization

### Git hooks

- Husky v9 runs lint-staged on pre-commit (formats with Prettier)
- Runs full test suite before push

### Storybook global decorators

Storybook's `.storybook/preview.jsx` configures global decorators that wrap all stories:

1. **Theme decorator** (`withThemeByClassName`) - Applies light/dark theme to `<html>` element
2. **Redux decorator** (`withRedux`) - Provides Redux store with default state
3. **Router decorator** - Wraps stories in MemoryRouter (can be disabled per story)

**Important**: When testing stories with `composeStories`, global decorators are NOT applied. Tests must provide explicit wrappers:

```javascript
import { MemoryRouter } from 'react-router-dom';
import { composeStories } from '@storybook/react';

test('test with router', () => {
  render(
    <MemoryRouter>
      <Default />
    </MemoryRouter>
  );
});
```

## Testing

- Vitest configured in `vitest.config.mjs`
- Testing Library: `@testing-library/react` for component testing
- Happy-dom: Lightweight DOM implementation (faster than jsdom)
- Run single test: `yarn test path/to/test.test.jsx`
- Use `composeStories` from `@storybook/react` to test stories
- DOM assertions preferred over snapshots

**Test Organization**:

- **Component tests**: `src/**/*.test.jsx` - Alongside components (use .jsx for JSX in tests)
- **Integration tests**: `__tests__/**/*.test.js` - Server and API integration tests at project root

The project follows a convention where component unit tests live alongside their components in `src/`, while server integration tests (Express routes, SSR, API endpoints) live in the root `__tests__/` directory for cleaner separation.

**Component Test Pattern**:

```javascript
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Component.stories';

const { Default } = composeStories(stories);

test('renders component', () => {
  render(<Default />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

**Integration Test Pattern**:

```javascript
import request from 'supertest';
import ExpressServer from '../src/server/ExpressServer.js';

describe('API Routes', () => {
  let server, app;

  beforeAll(async () => {
    server = new ExpressServer();
    await server.configure();
    await server.start();
    app = server.app;
  });

  it('should return data', async () => {
    const response = await request(app).get('/api/endpoint');
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    if (server?.server) {
      await new Promise((resolve) => server.server.close(resolve));
    }
  });
});
```

## Important things to remember

- Must commit work at important checkpoints
- Always ensure lint command passes when creating commit
- Always ensure lint and test commands pass when pushing commits to remote
- Stories should follow CSF3 format (Component Story Format 3)
- Test files should use `.test.jsx` extension (not `.test.js`)
- Test files should import stories and render them using `composeStories` from `@storybook/react`
- Use DOM assertions (`toBeInTheDocument`, `toHaveClass`) instead of snapshots
- Use Tailwind utility classes for rapid styling
- Consider Radix UI primitives for accessible base components
- React Router v6 uses `<Routes>` not `<Switch>`, and `element` prop not `component`

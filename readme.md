# universal-react

Production-ready React application boilerplate with server-side rendering (SSR), code splitting, and optional database support (MySQL/PostgreSQL).

![CI Status](https://github.com/dhruv-m-patel/universal-react/workflows/Continuous%20Integration/badge.svg)

## Features

- **Server-Side Rendering (SSR)** - React 18 with full SSR support using Express
- **Code Splitting** - Route-based automatic code splitting with @loadable/component
- **Hot Module Replacement** - Fast development with webpack HMR
- **Database Ready** - Optional MySQL or PostgreSQL integration
- **Configuration Management** - Environment-based config with confit/meddleware
- **Database Migrations** - Built-in migration support with db-migrate
- **CSS Modules** - Scoped styles with PostCSS
- **Testing & Quality** - Jest, ESLint, Stylelint, Prettier with Husky git hooks
- **Component Development** - Storybook integration

## Quick Start

```bash
git clone git@github.com:dhruv-m-patel/universal-react.git
cd universal-react
nvm use                    # Switch to correct Node version
corepack enable            # Enable Yarn via corepack
yarn set version self      # Update Yarn
yarn install               # Install dependencies
yarn start-dev             # Start development server
```

Visit `http://localhost:3000`

## Essential Commands

```bash
# Development
yarn start-dev             # Start dev server with hot-reloading
yarn lint                  # Run ESLint and Stylelint
yarn test                  # Run Jest tests
yarn storybook             # Start Storybook on port 3001

# Production
yarn build                 # Build for production
yarn start                 # Start production server

# Database
yarn migration:create      # Create new migration
yarn migration:apply       # Apply migrations to local DB
```

**For complete command reference and architecture details, see [CLAUDE.md](./CLAUDE.md)**

## Configuration

Edit `config/config.json` for base configuration. Environment-specific overrides go in:

- `config/development.json`
- `config/production.json`
- `config/staging.json`
- `config/test.json`

### Database Setup

1. Copy `.env.example` to `.env`
2. Set `DB_DRIVER=mysql` or `DB_DRIVER=pg` (or `none` to disable)
3. Configure credentials: `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`
4. Access database in routes via `req.app.db`
5. Use `executeQuery(req, query, params)` from `src/lib/clients/mysql.js` or `postgres.js`

Example:

```javascript
import { executeQuery } from '../lib/clients/mysql';

export default async function myRoute(router) {
  router.get('/api/data', async (req, res) => {
    const results = await executeQuery(
      req,
      'SELECT * FROM users WHERE id = ?',
      [userId]
    );
    res.json(results);
  });
}
```

## Project Structure

```
src/
├── client/              # Client-side entry point and Redux store
├── common/              # Shared components and routing
│   ├── components/      # React components (with tests and stories)
│   └── router.jsx       # Client route definitions
├── server/              # Server-side code
│   ├── middleware/      # Express middleware (including SSR)
│   ├── routes/          # API and server routes
│   └── ExpressServer.js # Express app setup
└── lib/                 # Shared utilities and database clients

config/                  # Configuration files (base + environment overrides)
migrations/              # Database migration files
```

## Tech Stack

- **React** v18 - UI library with concurrent features
- **Express** v4 - Node.js web framework
- **Webpack** v4 - Module bundler with code splitting
- **Babel** v7 - JavaScript transpiler
- **Redux** - State management with redux-api-middleware
- **React Router** v5 - Client-side routing
- **@loadable/component** - Code splitting
- **Confit/Meddleware** - Configuration and middleware management
- **Jest** - Testing framework
- **ESLint + Stylelint** - Code quality
- **Husky** - Git hooks (lint on commit, test before push)
- **Storybook** - Component development environment

## Adding Features

### New Server Route

1. Create file in `src/server/routes/` (or `src/server/routes/api/` for APIs)
2. Export function receiving `router` parameter
3. Register routes using `router.get()`, `router.post()`, etc.

### New Client Route

1. Create component in `src/common/components/`
2. Add route in `src/common/router.jsx` using `loadable(() => import('./components/YourComponent'))`

### New Middleware

1. Create middleware in `src/server/middleware/`
2. Add to `config/config.json` under `meddleware` with appropriate priority
3. Use `sourcepath:` protocol for module path

**For detailed architecture and patterns, see [CLAUDE.md](./CLAUDE.md)**

## Development Workflow

This project uses Husky git hooks:

- **Pre-commit**: Runs Prettier formatting via lint-staged
- **Pre-push**: Runs full test suite

Before committing, ensure:

```bash
yarn lint    # Must pass
yarn test    # Must pass
```

## Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Comprehensive architecture guide, code patterns, and AI agent instructions
- **[.env.example](./.env.example)** - Environment variable template

## License

ISC

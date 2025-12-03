# universal-react

Production-ready React application boilerplate with server-side rendering (SSR), code splitting, and optional database support (MySQL/PostgreSQL).

![CI Status](https://github.com/dhruv-m-patel/universal-react/workflows/Continuous%20Integration/badge.svg)

## Features

- **Server-Side Rendering (SSR)** - React 18 with full SSR support using Express
- **Lightning-Fast Dev Server** - Vite with instant HMR and sub-second cold starts
- **Code Splitting** - Route-based automatic code splitting with React.lazy
- **Modern UI Components** - Radix UI primitives with Tailwind CSS styling
- **Database Ready** - Optional MySQL or PostgreSQL integration
- **Configuration Management** - Environment-based config with confit/meddleware
- **Database Migrations** - Built-in migration support with db-migrate
- **CSS Modules + Tailwind** - Scoped styles and utility-first CSS
- **Testing & Quality** - Vitest, ESLint, Stylelint, Prettier with Husky git hooks
- **Component Development** - Storybook v8 with Vite integration
- **Modern React Patterns** - Demo pages showcasing useTransition, useDeferredValue, Suspense

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
yarn start-dev             # Start dev server with Vite HMR
yarn lint                  # Run ESLint and Stylelint
yarn test                  # Run Vitest tests
yarn storybook             # Start Storybook v8 on port 3001

# Production
yarn build                 # Build with Vite (client + SSR bundle)
yarn start                 # Start production server

# Database
yarn migration:create      # Create new migration
yarn migration:apply       # Apply migrations to local DB
```

**For complete command reference and architecture details, see [CLAUDE.md](./CLAUDE.md)**

## Demo Pages

The application includes several demo pages showcasing modern React 18+ features:

- **HomePage** (`/`) - Landing page with navigation to demo pages
- **Redux Example** (`/redux-example`) - Classic Redux pattern with API middleware
- **Posts** (`/posts`) - Paginated list with Suspense boundaries
- **Post Detail** (`/posts/:id`) - Individual post with comments
- **Users** (`/users`) - User directory with `useTransition` for smooth search filtering
- **User Profile** (`/users/:id`) - User profile with `useDeferredValue` for optimized search

These pages demonstrate modern patterns like concurrent rendering, `useTransition`, `useDeferredValue`, and Suspense boundaries working with SSR.

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
├── client/              # Client-side entry point and routing
│   ├── app.jsx          # Client entry point with hydration
│   ├── router.jsx       # Client route definitions with React.lazy
│   └── ...              # Redux store and other client code
├── common/              # Shared components
│   └── components/      # React components (with tests and stories)
├── server/              # Server-side code
│   ├── app.jsx          # SSR entry point
│   ├── router.jsx       # Server route definitions (non-lazy imports)
│   ├── middleware/      # Express middleware (including SSR)
│   ├── routes/          # API and server routes
│   │   └── api/         # API endpoints (posts, users)
│   ├── repositories/    # Data access layer with Repository pattern
│   └── ExpressServer.js # Express app setup
└── lib/                 # Shared utilities and database clients

__tests__/               # Server integration tests
├── ExpressServer.test.js
└── routes/
    └── api/             # API endpoint integration tests

config/                  # Configuration files (base + environment overrides)
migrations/              # Database migration files
```

## Tech Stack

- **Node.js** v22 LTS - Long-term support runtime
- **React** v18 - UI library with concurrent features
- **Express** v4 - Node.js web framework
- **Vite** v5 - Next-generation bundler (10-20x faster than Webpack!)
- **Vitest** - Lightning-fast test runner with Vite integration
- **Babel** v7 - JavaScript transpiler
- **Redux** - State management with redux-api-middleware
- **React Router** v6 - Client-side routing with async support
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind CSS** v3 - Utility-first CSS framework
- **CSS Modules** - Scoped component styles
- **React.lazy** - Built-in code splitting
- **Confit/Meddleware** - Configuration and middleware management
- **ESLint + Stylelint** - Code quality with flat config
- **Husky** - Git hooks (lint on commit, test before push)
- **Storybook** v8 - Component development with Vite

## Adding Features

### New Server Route

1. Create file in `src/server/routes/` (or `src/server/routes/api/` for APIs)
2. Export function receiving `router` parameter
3. Register routes using `router.get()`, `router.post()`, etc.

### New Client Route

1. Create component in `src/common/components/`
2. Add route in `src/client/router.jsx` using `React.lazy(() => import('../common/components/YourComponent'))`
3. Add route in `src/server/router.jsx` with regular import for SSR

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

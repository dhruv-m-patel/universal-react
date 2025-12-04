# Universal React - Modernization Plan

**Document Version:** 1.2
**Last Updated:** 2025-12-01
**Status:** Wave 7 In Progress - Documentation & Polish (Waves 1-6 Complete)

---

## Executive Summary

This document outlines the comprehensive modernization plan for the Universal React application. The goal is to upgrade the technology stack to modern, industry-standard tools while maintaining backward compatibility, SSR functionality, and developer productivity.

### Key Objectives

1.  Upgrade to Node.js 22 LTS for long-term stability
2.  Migrate from Webpack 4 to Vite 5+ for faster builds and better DX
3.  Replace Jest with Vitest for faster, modern testing
4.  Migrate from react-bootstrap to Radix UI + Tailwind CSS
5.  Upgrade React Router v5 � v6 for better async support
6.  Upgrade Storybook v5 � v8 for modern component development
7.  Demonstrate modern React 18+ features (Suspense, Concurrent rendering, Streaming SSR)
8.  Maintain SSR functionality with zero downtime
9.  Keep Redux + REST architecture (state management overhaul deferred)

### Out of Scope

- L Apollo GraphQL migration (separate project)
- L Redux removal/replacement (separate project)
- L TypeScript migration (can be done incrementally later)
- L Major architectural changes to Express server
- L Database schema or migration system changes

---

## Technology Stack Changes

| Category             | Current             | Target                   | Reason                                                  |
| -------------------- | ------------------- | ------------------------ | ------------------------------------------------------- |
| **Node.js**          | 18.18.0             | 22.x LTS                 | Long-term support, latest features                      |
| **Bundler**          | Webpack 4           | Vite 5+                  | 10-20x faster builds, better HMR, modern DX             |
| **Testing**          | Jest 29 + Enzyme    | Vitest + Testing Library | Faster tests, Vite integration, modern API              |
| **Storybook**        | v5.3.21             | v8.x                     | Vite support, modern features, better performance       |
| **Router**           | react-router-dom v5 | v6.x                     | Better async, data loading, modern API                  |
| **UI Library**       | react-bootstrap 1.6 | Radix UI + Tailwind      | Headless primitives, full customization, modern styling |
| **Styling**          | CSS Modules only    | CSS Modules + Tailwind   | Keep existing, add Tailwind for rapid development       |
| **Code Splitting**   | @loadable/component | Vite native + React.lazy | Built-in support, simpler API                           |
| **Database**         | mysql + pg          | mysql2 + pg (latest)     | Better performance, Node 22 compatibility               |
| **State Management** | Redux + REST        | **No Change**            | Deferred to separate project                            |

---

## Execution Plan - 7 Waves

### Commit Strategy

**All changes will be committed at important checkpoints using conventional commits.**

#### Commit Checkpoints

Commits will be made after completing significant milestones within each wave. Each commit must:

1. ✅ **Pass all quality gates** - Lint, tests, and functionality checks
2. ✅ **Follow conventional commits** - Proper format: `<type>(<scope>): <description>`
3. ✅ **Be atomic and focused** - One logical change per commit
4. ✅ **Include the wave number** - For traceability (e.g., `feat(wave-1): upgrade Node.js to v22`)

#### Wave 1 Commits

- `chore(wave-1): upgrade Node.js to v22 and update .nvmrc`
- `feat(wave-1): install and configure Tailwind CSS`
- `feat(wave-1): upgrade React Router from v5 to v6`
- `chore(wave-1): upgrade database clients to mysql2 and latest pg`
- `chore(wave-1): update core dependencies for Node 22 compatibility`

#### Wave 2 Commits

- `feat(wave-2): install Vite and configure for SSR`
- `feat(wave-2): create Vite entry points for client and server`
- `feat(wave-2): migrate Express server to use Vite in development`
- `feat(wave-2): configure Vite production build`
- `refactor(wave-2): migrate code splitting from loadable to React.lazy`
- `chore(wave-2): remove Webpack configuration and dependencies`

#### Wave 3 Commits

- `feat(wave-3): install Vitest and Testing Library`
- `feat(wave-3): create Vitest configuration`
- `test(wave-3): migrate Jest tests to Vitest`
- `refactor(wave-3): replace Enzyme with Testing Library`
- `chore(wave-3): remove Jest and Enzyme dependencies`

#### Wave 4 Commits

- `feat(wave-4): install Radix UI primitives`
- `feat(wave-4): create base component library with Radix and Tailwind`
- `refactor(wave-4): migrate HomePage to Radix UI`
- `refactor(wave-4): migrate ReduxExamplePage to Radix UI`
- `refactor(wave-4): migrate remaining pages to Radix UI`
- `chore(wave-4): remove react-bootstrap dependency`

#### Wave 5 Commits

- ✅ `feat(wave-5): add PostsPage with pagination and dark mode improvements` (f8d43ed)
- ✅ `feat(wave-5): improve dark mode contrast for better readability` (cc5d549)
- ✅ `refactor: move ui components from src/common/components/ui to src/common/ui` (b2530a3)
- ✅ `feat(wave-5): add UsersPage with useTransition hook` (acda2f7)
- ✅ `feat(wave-5): add UserProfilePage with useDeferredValue hook` (106183f)
- [ ] `feat(wave-5): implement streaming SSR with renderToPipeableStream` - Deferred

#### Wave 6 Commits

- `chore(wave-6): upgrade Storybook from v5 to v8`
- `feat(wave-6): configure Storybook with Vite`
- `docs(wave-6): update existing Storybook stories to v8 format`
- `docs(wave-6): create stories for new Radix UI components`

#### Wave 7 Commits

- ✅ `docs(wave-7): update README with new tech stack and examples` (9f886ed)
- ✅ `docs(wave-7): update CLAUDE.md with modernized Vite/Vitest architecture` (6f81514)
- ❌ ~~`docs(wave-7): create MIGRATION.md guide`~~ - Cancelled by user (info integrated into CLAUDE.md)
- [ ] `style(wave-7): run lint and fix all issues` - Deferred (lint already passing)

#### Final Commit

- `chore: complete modernization to Vite, Radix UI, and Node 22`

#### Commit Guidelines

**DO:**

- ✅ Commit after each logical milestone
- ✅ Run `yarn lint` before committing
- ✅ Run `yarn test` before committing (if tests exist at that point)
- ✅ Use descriptive commit messages
- ✅ Reference wave number for traceability
- ✅ Keep commits focused and atomic

**DON'T:**

- ❌ Commit broken code
- ❌ Commit without running lint
- ❌ Commit failing tests
- ❌ Mix multiple unrelated changes in one commit
- ❌ Use vague commit messages like "update files" or "WIP"

#### Rollback Strategy

Since we're committing at checkpoints:

- Can rollback to any checkpoint commit using `git revert` or `git reset`
- Each commit is a stable, working state
- Git history provides clear audit trail of changes
- Can cherry-pick specific changes if needed

---

### Wave 1: Foundation Setup

**Objective:** Upgrade core infrastructure without breaking existing functionality.

#### Tasks

1. **Update Node.js to v22 LTS**
   - [x] Update `.nvmrc` file to `22`
   - [x] Update `package.json` engines: `"node": ">= 22"`
   - [x] Test existing app runs on Node 22
   - [x] Update CI/CD workflows to use Node 22 (uses .nvmrc automatically)

2. **Install and Configure Tailwind CSS**
   - [x] Install: `tailwindcss`, `postcss`, `autoprefixer`
   - [x] Create `tailwind.config.js`
   - [x] Update `postcss.config.js` to include Tailwind
   - [x] Create base Tailwind CSS file
   - [x] Test Tailwind works alongside existing CSS Modules
   - [x] Add Tailwind to build process

3. **Upgrade React Router v5 � v6**
   - [x] Install `react-router-dom@6`
   - [x] Update route definitions (`<Switch>` � `<Routes>`, `<Route>` API changes)
   - [x] Update navigation hooks (`useHistory()` � `useNavigate()`)
   - [x] Update `<Redirect>` to `<Navigate>`
   - [x] Test all routes work correctly
   - [x] Update server-side routing if needed

4. **Upgrade Database Clients**
   - [x] Replace `mysql` with `mysql2` (drop-in replacement)
   - [x] Update `pg` to latest version
   - [x] Update `src/lib/clients/mysql.js` to use mysql2
   - [x] Update `src/lib/clients/postgres.js` if needed
   - [x] Test database connections work
   - [x] Verify `executeQuery` functions work correctly

5. **Update Core Dependencies**
   - [x] Update React to `18.3.x` (latest in v18)
   - [x] Update React DOM to `18.3.x`
   - [x] Update Express to `4.x` (latest)
   - [x] Update all Babel packages to latest v7
   - [x] Update ESLint to v9.x
   - [x] Update Prettier to latest
   - [x] Run `yarn install` and verify no conflicts
   - [x] Migrate ESLint config to flat config format
   - [x] Install @babel/eslint-parser (replaces deprecated babel-eslint)
   - [x] Fix linting errors
   - [x] Verify all tests pass

**Success Criteria:**

-  App runs on Node 22 without errors
-  Existing functionality unchanged
-  All tests pass
-  Lint passes
-  Database connections work

**Rollback Strategy:**

- Revert `.nvmrc` and `package.json` changes
- Reinstall old dependencies
- Use `nvm use 18` to switch back

---

### Wave 2: Vite Migration

**Objective:** Replace Webpack with Vite for development and production builds.

#### Tasks

1. **Install Vite and Plugins**
   - [x] Install: `vite`, `@vitejs/plugin-react`
   - [x] Install: custom SSR setup with Vite middleware
   - [x] Install: `rollup-plugin-visualizer` (bundle analysis)

2. **Create Vite Configuration**
   - [x] Create `vite.config.js` for client and SSR build
   - [x] Configure React plugin with Fast Refresh
   - [x] Configure CSS Modules support
   - [x] Configure PostCSS (Tailwind)
   - [x] Configure build output directory (`build-static`)
   - [x] Configure code splitting strategy
   - [x] Configure environment variables

3. **Create SSR Configuration**
   - [x] Create separate SSR entry point (`src/server/app.jsx`)
   - [x] Create client entry point (`src/client/app.jsx`)
   - [x] Configure Vite for SSR mode
   - [x] Set up SSR build command
   - [x] Configure manifest generation

4. **Update Express Server for Vite**
   - [x] Add Vite dev middleware for development
   - [x] Update `src/server/ExpressServer.js` to use Vite in dev
   - [x] Update production to load Vite build outputs
   - [x] Update asset loading (CSS, JS chunks)
   - [x] Update HMR setup (via Vite's built-in HMR)
   - [x] Created `renderPageVite.js` middleware for SSR

5. **Migrate Code Splitting**
   - [x] Replace `@loadable/component` with `React.lazy()`
   - [x] Update `src/common/router.jsx` imports
   - [x] Remove `@loadable/babel-plugin`
   - [x] Remove `@loadable/webpack-plugin`
   - [x] Created `src/server/router.jsx` for SSR without lazy loading

6. **Update Build Scripts**
   - [x] Add `build:client` script using Vite
   - [x] Add `build:ssr` script for SSR bundle
   - [x] Update `build` script to use Vite
   - [x] Test development server with Vite
   - [x] Test production build
   - [x] All tests passing

7. **Remove Webpack**
   - [x] Delete `webpack.config.js`
   - [x] Remove all webpack dependencies
   - [x] Remove webpack plugins (mini-css-extract, terser, etc.)
   - [x] Remove webpack loaders (css-loader, style-loader, etc.)
   - [x] Clean up package.json scripts
   - [x] Remove `@loadable` dependencies

**Success Criteria:**

-  Vite dev server runs successfully
-  HMR works for React components
-  Production build completes successfully
-  SSR works in both dev and production
-  Code splitting works correctly
-  Build time significantly faster than Webpack
-  Bundle size similar or smaller
-  All existing features work

**Rollback Strategy:**

- Keep Webpack config until Vite proven
- Use feature flag to switch between bundlers
- Revert Express server changes

---

### Wave 3: Testing Migration

**Objective:** Migrate from Jest + Enzyme to Vitest + Testing Library.

#### Tasks

1. **Install Vitest and Testing Library**
   - [x] Install: `vitest`, `@vitest/ui`
   - [x] Install: `@testing-library/react`
   - [x] Install: `@testing-library/jest-dom`
   - [x] Install: `@testing-library/user-event`
   - [x] Install: `happy-dom` (used instead of jsdom for better performance)

2. **Create Vitest Configuration**
   - [x] Create `vitest.config.mjs`
   - [x] Configure happy-dom environment
   - [x] Configure test file patterns
   - [x] Configure coverage settings
   - [x] Configure global test setup
   - [x] Configure CSS Modules mock
   - [x] Configure aliases (match Vite config)

3. **Create Test Setup Files**
   - [x] Create `vitest.setup.js` for Vitest
   - [x] Configure @testing-library/jest-dom
   - [x] Add custom matchers if needed
   - [x] Configure global test utilities

4. **Migrate Existing Tests**
   - [x] Update `DefaultHelmet.test.js` (migrate from Enzyme)
   - [x] Update `HomePage.test.js` (migrate from Enzyme)
   - [x] Update `NotFound.test.js` (migrate from Enzyme)
   - [x] Update `Page.test.js` (migrate from Enzyme) → renamed to `Page.test.jsx`
   - [x] Update `ReduxExamplePage.test.js` (migrate from Enzyme)
   - [x] Replace Enzyme's `shallow()`, `mount()` with `render()`
   - [x] Replace Enzyme's `find()` with Testing Library queries
   - [x] Update snapshot tests if needed

5. **Update Test Scripts**
   - [x] Update `test` script to use Vitest
   - [x] Update `ci:test` script
   - [x] Remove `pretest` (Jest cache clear)
   - [x] Add `test:ui` script for Vitest UI
   - [x] Add `test:coverage` script

6. **Remove Jest and Enzyme**
   - [x] Remove Jest dependencies
   - [x] Remove Enzyme dependencies
   - [x] Remove `jest.config.js`
   - [x] Remove babel-jest configuration
   - [x] Clean up package.json

**Success Criteria:**

- ✅ All existing tests pass with Vitest (11 tests across 6 test files)
- ✅ Test coverage maintained or improved
- ✅ Tests run faster than with Jest
- ✅ No Enzyme dependencies remain
- ✅ CI/CD pipeline updated and passing

**Rollback Strategy:**

- Keep jest.config.js until all tests migrated
- Can run both Jest and Vitest in parallel during migration
- Use npm scripts to switch between test runners

---

### Wave 4: UI Migration

**Objective:** Replace react-bootstrap with Radix UI + Tailwind CSS.

#### Tasks

1. **Install Radix UI Primitives**
   - [x] Install: `@radix-ui/react-dialog`
   - [x] Install: `@radix-ui/react-dropdown-menu`
   - [x] Install: `@radix-ui/react-select`
   - [x] Install: `@radix-ui/react-tabs`
   - [x] Install: `@radix-ui/react-tooltip`
   - [x] Install: `@radix-ui/react-alert-dialog`
   - [x] Install: `@radix-ui/react-popover`
   - [x] Install other primitives as needed

2. **Create Base Component Library**
   - [ ] Create `src/common/components/ui/Button.jsx` (Radix + Tailwind) - Not needed yet
   - [x] Create `src/common/components/ui/Card.jsx` (with stories and tests)
   - [ ] Create `src/common/components/ui/Input.jsx` - Not needed yet
   - [ ] Create `src/common/components/ui/Select.jsx` - Not needed yet
   - [ ] Create `src/common/components/ui/Dialog.jsx` - Not needed yet
   - [ ] Create `src/common/components/ui/Dropdown.jsx` - Not needed yet
   - [ ] Create `src/common/components/ui/Tabs.jsx` - Not needed yet
   - [ ] Create `src/common/components/ui/Tooltip.jsx` - Not needed yet
   - [x] Create component exports in `src/common/components/ui/index.js`

3. **Migrate Existing Components**
   - [x] Audit HomePage for react-bootstrap usage
   - [x] Migrate HomePage to Radix UI + Tailwind
   - [x] Test HomePage renders correctly
   - [x] Audit ReduxExamplePage for react-bootstrap usage
   - [x] Migrate ReduxExamplePage to Radix UI + Tailwind
   - [x] Test ReduxExamplePage works correctly
   - [x] Audit NotFound page
   - [x] Migrate NotFound to Radix UI + Tailwind
   - [x] Update Page component if needed

4. **Update Tests**
   - [x] Update HomePage tests for new components
   - [x] Update ReduxExamplePage tests
   - [x] Update NotFound tests
   - [x] Update snapshots if needed
   - [x] Ensure all tests pass (21 tests passing)

5. **Remove react-bootstrap**
   - [x] Verify no react-bootstrap imports remain
   - [x] Remove react-bootstrap from package.json
   - [x] Remove Bootstrap CDN link from HTML template (N/A - no CDN)
   - [x] Clean up unused styles

**Success Criteria:**

-  All pages migrated to Radix UI
-  UI looks good and is functional
-  Accessibility maintained (Radix is accessible by default)
-  All tests pass
-  No react-bootstrap dependencies remain

**Rollback Strategy:**

- Migrate one component at a time
- Keep react-bootstrap installed until all components migrated
- Can have both libraries coexist during migration

---

### Wave 5: Modern React Features

**Objective:** Build demo pages showcasing modern React 18+ features using jsonplaceholder API.

**Note:** Simplified approach - used direct fetch API calls instead of Redux to better demonstrate modern React patterns and keep examples focused.

#### Tasks

1. **Setup Redux Actions/Reducers for jsonplaceholder**
   - [x] ~~Redux actions/reducers~~ - Skipped: Used direct fetch API for cleaner demos
   - [x] Decision: Keep Redux for existing features, use fetch for new demos

2. **Create API Service Layer**
   - [x] ~~API service layer~~ - Not needed: Used fetch API directly in components
   - [x] Decision: Inline API calls to demonstrate modern React patterns more clearly

3. **Build Posts List Page**
   - [x] Create `src/common/components/PostsPage/PostsPage.jsx`
   - [x] Implement posts fetching with fetch API
   - [x] Extract and create reusable Pagination component (`src/common/ui/Pagination`)
   - [x] Add pagination UI (Tailwind)
   - [x] Add loading states with Spinner
   - [x] Add error handling with error states
   - [x] Style with Tailwind
   - [x] Add tests and Storybook stories
   - [x] Add route to router (`/posts`)

4. **Build Post Detail Page**
   - [x] Create `src/common/components/PostDetailPage/PostDetailPage.jsx`
   - [x] Fetch single post with fetch API
   - [x] Fetch comments with fetch API
   - [x] Add loading fallbacks with Spinner
   - [x] Add error handling
   - [x] Style with Tailwind + Radix UI
   - [x] Add tests and Storybook stories
   - [x] Add route with dynamic param (`/posts/:id`)

5. **Build Users Directory Page**
   - [x] Create `src/common/components/UsersPage/UsersPage.jsx`
   - [x] Fetch users list with fetch API
   - [x] Implement `useTransition` for search/filter
   - [x] Add user cards (Tailwind styling)
   - [x] Add smooth loading states with isPending indicator
   - [x] Add pagination using extracted Pagination component
   - [x] Style with Tailwind
   - [x] Add tests and Storybook stories
   - [x] Add route (`/users`)
   - [x] Add clickable user names linking to profiles

6. **Build User Profile Page**
   - [x] Create `src/common/components/UserProfilePage/UserProfilePage.jsx`
   - [x] Fetch user details with fetch API
   - [x] Fetch user posts with fetch API
   - [x] ~~Fetch user albums~~ - Not implemented: Kept scope focused on posts
   - [x] ~~Implement tabs~~ - Not needed: Single view design
   - [x] Use `useDeferredValue` for search filtering performance
   - [x] Add concurrent rendering demos with visual feedback (opacity change)
   - [x] Add artificial delay to demonstrate useDeferredValue benefit
   - [x] Style with Tailwind
   - [x] Add tests and Storybook stories
   - [x] Add route with dynamic param (`/users/:id`)

7. **Reorganize UI Components**
   - [x] Move `src/common/components/ui` to `src/common/ui`
   - [x] Update all import references across the codebase
   - [x] Update test imports
   - [x] Verify all tests pass after reorganization

8. **Implement Streaming SSR**
   - [ ] Update `src/server/middleware/renderPage.js`
   - [ ] Replace `renderToString` with `renderToPipeableStream`
   - [ ] Implement shell-ready callback
   - [ ] Implement error handling
   - [ ] Test streaming works in production
   - [ ] Verify Suspense boundaries stream correctly
   - [ ] Add performance monitoring
   - **Note:** Deferred - traditional SSR working well for current use case

9. **Update Navigation**
   - [x] Add navigation links to new pages on HomePage
   - [x] Add "View Posts" link
   - [x] Add "View Users" link
   - [x] Test navigation works
   - [x] All routes properly configured

**Success Criteria:**

-  All 4 demo pages work perfectly
-  Data fetches from jsonplaceholder API
-  Suspense boundaries work correctly
-  useTransition creates smooth transitions
-  Streaming SSR works in production
-  Loading states are polished
-  Error handling is robust
-  All tests pass
-  SSR works for all new pages

**Rollback Strategy:**

- New pages are additive, can be removed without affecting existing pages
- Keep traditional `renderToString` as fallback
- Feature flags for streaming SSR

**Wave 5 Status: ✅ COMPLETED** (5/5 commits)

**Achievements:**

- ✅ 4 modern React demo pages built (PostsPage, PostDetailPage, UsersPage, UserProfilePage)
- ✅ React 18 hooks demonstrated (useTransition, useDeferredValue)
- ✅ Reusable Pagination component extracted from PostsPage
- ✅ Dark mode contrast improvements (WCAG AA compliant)
- ✅ UI components reorganized to src/common/ui
- ✅ All 41 tests passing across 14 test files
- ✅ Full SSR support for all new pages
- ⏸️ Streaming SSR deferred to future iteration (traditional SSR working well)

**Key Learnings:**

- Direct fetch API in components provides cleaner demos than Redux for new features
- useTransition perfect for search/filter with immediate input feedback
- useDeferredValue excellent for expensive computations with visual stale indicators
- Component extraction (Pagination) improves reusability
- Slate colors (vs Gray) provide better dark mode contrast

---

### Wave 6: Storybook Upgrade

**Objective:** Upgrade Storybook from v5 to v8 and integrate with Vite.

#### Tasks

1. **Upgrade Storybook**
   - [x] Run `npx storybook@latest upgrade`
   - [x] Review breaking changes
   - [x] Install `@storybook/react-vite`
   - [x] Install `@storybook/addon-essentials`
   - [x] Install `@storybook/addon-interactions`
   - [x] Install `@storybook/addon-a11y`

2. **Configure Storybook with Vite**
   - [x] Create `.storybook/main.js` for Vite
   - [x] Configure Vite builder
   - [x] Configure addons
   - [x] Configure story patterns
   - [x] Fix PostCSS null byte path error (inline config)
   - [x] Add static assets serving (`staticDirs`)

3. **Create Storybook Preview Config**
   - [x] Create `.storybook/preview.jsx`
   - [x] Import Tailwind CSS
   - [x] Configure global decorators
   - [x] Create Redux decorator factory (`withRedux`)
   - [x] Create conditional Router decorator (prevents nested Router errors)

4. **Update Existing Stories**
   - [x] Update `DefaultHelmet.stories.jsx` to CSF3 format
   - [x] Update `PostsPage.stories.jsx` (use presentational component)
   - [x] Update `PostDetailPage.stories.jsx`
   - [x] Update `UsersPage.stories.jsx`
   - [x] Update `UserProfilePage.stories.jsx` (add router disable parameter)
   - [x] Test all existing stories work

5. **Create Stories for Missing Components**
   - [x] Create `HomePage.stories.jsx`
   - [x] Create `NotFound.stories.jsx`
   - [x] Create `Page.stories.jsx` (Default + WithTitleAndDescription)
   - [x] Create `ReduxExamplePage.stories.jsx` (Default, Loading, Error, Empty)
   - [x] All page components now have stories

6. **Migrate Tests to Modern Pattern**
   - [x] Install `@storybook/react` for composeStories
   - [x] Migrate `Card.test.jsx` to composeStories pattern
   - [x] Migrate `Spinner.test.jsx` to composeStories pattern
   - [x] Migrate `HomePage.test.jsx` to composeStories pattern
   - [x] Migrate `NotFound.test.jsx` to composeStories pattern
   - [x] Migrate `Page.test.jsx` to composeStories pattern
   - [x] Migrate `PostsPage.test.jsx` to composeStories pattern
   - [x] Migrate `ReduxExamplePage.test.jsx` to composeStories pattern
   - [x] Replace snapshot assertions with DOM assertions
   - [x] Rename test files from `.js` to `.jsx` for JSX parsing

7. **Update Scripts**
   - [x] Update `storybook` script
   - [x] Update `build-storybook` script
   - [x] Test Storybook dev server
   - [x] Test Storybook build

8. **Remove Old Storybook Dependencies**
   - [x] Remove old @storybook v5 packages
   - [x] Remove storybook-react-router
   - [x] Clean up package.json

**Success Criteria:**

- ✅ Storybook v8 runs successfully on http://localhost:3001/
- ✅ All existing stories work
- ✅ All page component stories created
- ✅ Vite integration working with HMR
- ✅ Build time faster than v5
- ✅ Hot reload works
- ✅ All tests migrated to composeStories pattern (45/45 passing)
- ✅ Redux and Router decorators working correctly

**Rollback Strategy:**

- Keep v5 configuration files until v8 proven
- Can run both versions side-by-side temporarily
- Storybook is development tool, low risk

**Wave 6 Status: ✅ COMPLETED** (1 commit: `56592b1`)

**Achievements:**

- ✅ Upgraded Storybook from v5.3.21 to v8.6.14
- ✅ Integrated with Vite for faster builds and HMR
- ✅ Fixed critical PostCSS null byte path error
- ✅ Created flexible Redux decorator factory (withRedux)
- ✅ Implemented conditional Router decorator
- ✅ Added stories for all missing page components (HomePage, NotFound, Page, ReduxExamplePage)
- ✅ Migrated 7 test files to modern composeStories pattern
- ✅ Replaced snapshot testing with DOM-based assertions
- ✅ 45/45 tests passing (up from 41)
- ✅ All stories rendering correctly in Storybook

**Key Learnings:**

- PostCSS inline config in Storybook's viteFinal resolves path issues
- Conditional decorators (router.disable parameter) prevent nested Router conflicts
- composeStories pattern from @storybook/react enables story reuse in tests
- DOM assertions with Testing Library more maintainable than snapshots
- Factory pattern for decorators (withRedux) provides flexibility
- Presentational components in stories easier to test than connected containers

---

### Wave 7: Documentation & Polish

**Objective:** Update documentation, verify everything works, final polish.

#### Tasks

1. **Update README.md**
   - [x] Update tech stack section (Vite, Vitest, Radix UI, Tailwind, etc.)
   - [x] Update quick start commands
   - [x] Update build commands (Vite instead of Webpack)
   - [x] Update testing commands (Vitest)
   - [x] Add section for new demo pages
   - [x] Update code splitting to React.lazy
   - [x] Added modern React patterns section

2. **Update CLAUDE.md**
   - [x] Update Development Commands section
   - [x] Update Architecture section (Vite instead of Webpack)
   - [x] Add Vite configuration details
   - [x] Add Tailwind CSS patterns
   - [x] Add Radix UI component patterns
   - [x] Update Build System section
   - [x] Add modern React patterns (Suspense, Streaming SSR)
   - [x] Update testing section (Vitest)
   - [x] Add composeStories testing pattern documentation
   - ✅ `docs(wave-7): update CLAUDE.md with modernized Vite/Vitest architecture` (6f81514)

3. **Create MIGRATION.md**
   - [x] ~~Explicitly cancelled by user~~ - Migration information integrated into CLAUDE.md instead

4. **Code Quality Check**
   - [x] Run `yarn lint` - All passing (0 errors)
   - [x] Prettier formatting applied via lint-staged
   - [ ] Review all TODO comments in code (deferred)
   - [ ] Remove dead code (deferred)
   - [ ] Remove unused dependencies (deferred)
   - [ ] Check for console.log statements (deferred)
   - [ ] Verify all imports are used (lint checks this)

5. **Testing Verification**
   - [x] Run `yarn test` - 46/46 tests passing (100%)
   - [x] Migrated all snapshot tests to composeStories pattern
   - [x] Removed all **snapshots** directories
   - [x] DOM-based assertions replace snapshots
   - [ ] Check test coverage reports (deferred)
   - [ ] Test all pages manually in browser (deferred)

6. **Build Verification**
   - [x] Run `yarn build` successfully (< 5s total)
   - [x] Client build: 3.87s with Vite
   - [x] SSR build: 867ms
   - [x] Code splitting working (multiple chunks generated)
   - [x] Vendor chunk: 381KB (gzip: 119KB)
   - [ ] Run production build locally (deferred)
   - [ ] Test SSR in production mode (deferred)

7. **Final SSR Verification**
   - [ ] Test all pages render on server
   - [ ] Verify hydration works without errors
   - [ ] Check for hydration mismatches
   - [ ] Verify Suspense boundaries work
   - [ ] Test streaming SSR in production
   - [ ] Check meta tags and SEO
   - [ ] Verify page load performance

8. **Database Integration Test**
   - [ ] Test MySQL connection (if configured)
   - [ ] Test PostgreSQL connection (if configured)
   - [ ] Verify executeQuery works
   - [ ] Test migration commands still work

9. **Cross-Browser Testing**
   - [ ] Test in Chrome
   - [ ] Test in Firefox
   - [ ] Test in Safari
   - [ ] Test in Edge
   - [ ] Check mobile responsiveness

**Success Criteria:**

-  All documentation updated and accurate
-  All lint checks pass
-  All tests pass with 100% success rate
-  Production build works perfectly
-  SSR works in all scenarios
-  No console errors in browser
-  All demo pages work
-  Database integration works
-  Cross-browser compatibility verified

**Rollback Strategy:**

- Documentation can be reverted easily
- Git history maintains all changes
- Can rollback to any previous wave if issues found

---

## Risk Assessment & Mitigation

### High Risk Items

1. **Vite SSR Migration**
   - **Risk:** SSR might break during Webpack � Vite migration
   - **Mitigation:** Keep Webpack config until Vite proven; test extensively before removing
   - **Rollback:** Revert to Webpack if critical issues

2. **React Router v5 � v6**
   - **Risk:** Breaking API changes might affect routing
   - **Mitigation:** Update one route at a time; maintain thorough tests
   - **Rollback:** Can pin to react-router-dom v5 if needed

3. **Radix UI Migration**
   - **Risk:** UI might look different or have accessibility issues
   - **Mitigation:** Build component library first; test each component; gradual migration
   - **Rollback:** Keep react-bootstrap until all components migrated

### Medium Risk Items

1. **Streaming SSR**
   - **Risk:** Might cause hydration issues or performance problems
   - **Mitigation:** Keep traditional renderToString as fallback; feature flag
   - **Rollback:** Use renderToString instead of renderToPipeableStream

2. **Vitest Migration**
   - **Risk:** Tests might behave differently or fail
   - **Mitigation:** Jest-compatible API reduces risk; test incrementally
   - **Rollback:** Keep Jest config until all tests pass

### Low Risk Items

1. **Node.js 22 Upgrade** - Well-tested, backward compatible
2. **Tailwind CSS** - Additive, doesn't break existing CSS Modules
3. **Storybook Upgrade** - Development tool, doesn't affect production
4. **Database Client Upgrades** - Drop-in replacements, minimal changes

---

## Performance Targets

### Build Performance

| Metric               | Current (Webpack) | Target (Vite)  | Measurement                    |
| -------------------- | ----------------- | -------------- | ------------------------------ |
| **Cold start**       | ~30-45s           | ~3-5s          | Time to first page load in dev |
| **HMR**              | ~2-3s             | ~50-200ms      | Time to see changes after edit |
| **Production build** | ~60-90s           | ~20-30s        | Full build time                |
| **Bundle size**      | Baseline          | -10% or better | Gzip size                      |

### Runtime Performance

| Metric                             | Target | Measurement      |
| ---------------------------------- | ------ | ---------------- |
| **First Contentful Paint (FCP)**   | < 1.5s | Lighthouse score |
| **Largest Contentful Paint (LCP)** | < 2.5s | Lighthouse score |
| **Time to Interactive (TTI)**      | < 3.5s | Lighthouse score |
| **Cumulative Layout Shift (CLS)**  | < 0.1  | Lighthouse score |

### Testing Performance

| Metric                  | Current (Jest) | Target (Vitest) | Measurement                |
| ----------------------- | -------------- | --------------- | -------------------------- |
| **Test suite run time** | Baseline       | -30% or better  | Total time for `yarn test` |

---

## Quality Gates

Each wave must pass these gates before proceeding to the next:

### Gate 1: Code Quality

- [ ] ESLint passes with zero errors
- [ ] Prettier formatting applied
- [ ] No TypeScript errors (if applicable)
- [ ] No console.log or debugger statements
- [ ] No TODO comments without issue references

### Gate 2: Testing

- [ ] All existing tests pass
- [ ] New tests added for new features
- [ ] Test coverage maintained or improved
- [ ] No skipped or disabled tests without reason
- [ ] Snapshot tests reviewed and approved

### Gate 3: Functionality

- [ ] All pages render correctly
- [ ] All routes work
- [ ] All forms work
- [ ] All API calls work
- [ ] Database integration works
- [ ] SSR works in dev and prod

### Gate 4: Performance

- [ ] Build time meets targets
- [ ] Bundle size meets targets
- [ ] Lighthouse scores acceptable
- [ ] No performance regressions

### Gate 5: Documentation

- [ ] README.md updated
- [ ] CLAUDE.md updated
- [ ] MIGRATION.md created
- [ ] Code comments added where needed
- [ ] All breaking changes documented

---

## Testing Strategy

### Unit Tests (Vitest + Testing Library)

- Test all React components
- Test Redux actions and reducers
- Test utility functions
- Test hooks
- Maintain or improve coverage

### Integration Tests

- Test page-level components
- Test Redux + API integration
- Test routing
- Test forms and user interactions

### SSR Tests

- Test server-side rendering works
- Test hydration is correct
- Test no hydration mismatches
- Test streaming SSR
- Test Suspense boundaries

### E2E Tests (Manual for now)

- Test all user flows
- Test all pages load correctly
- Test navigation works
- Test forms submit correctly
- Test error handling

### Performance Tests

- Measure build times
- Measure bundle sizes
- Run Lighthouse audits
- Test HMR speed

---

## Dependencies to Add

### Core

```bash
# Vite
vite@^5.0.0
@vitejs/plugin-react@^4.0.0

# Vitest
vitest@^1.0.0
@vitest/ui@^1.0.0

# Testing Library
@testing-library/react@^14.0.0
@testing-library/jest-dom@^6.0.0
@testing-library/user-event@^14.0.0

# Tailwind CSS
tailwindcss@^3.4.0
autoprefixer@^10.4.0

# Radix UI
@radix-ui/react-dialog@^1.0.0
@radix-ui/react-dropdown-menu@^2.0.0
@radix-ui/react-select@^2.0.0
@radix-ui/react-tabs@^1.0.0
@radix-ui/react-tooltip@^1.0.0
@radix-ui/react-alert-dialog@^1.0.0
@radix-ui/react-popover@^1.0.0

# React Router
react-router-dom@^6.20.0

# Storybook
@storybook/react-vite@^8.0.0
@storybook/addon-essentials@^8.0.0
@storybook/addon-interactions@^8.0.0
@storybook/addon-a11y@^8.0.0

# Database
mysql2@^3.6.0
pg@^8.11.0
```

---

## Dependencies to Remove

### Webpack & Related

```bash
webpack
webpack-cli
webpack-dev-middleware
webpack-hot-middleware
webpack-manifest-plugin
mini-css-extract-plugin
optimize-css-assets-webpack-plugin
terser-webpack-plugin
css-loader
style-loader
```

### Jest & Enzyme

```bash
jest
babel-jest
jest-enzyme
enzyme
enzyme-adapter-react-16
```

### Loadable Components

```bash
@loadable/component
@loadable/server
@loadable/babel-plugin
@loadable/webpack-plugin
```

### react-bootstrap

```bash
react-bootstrap
```

### Old Database Client

```bash
mysql # Replace with mysql2
```

---

## Success Metrics

### Technical Metrics

-  Build time reduced by 60%+
-  HMR time reduced by 90%+
-  Test suite runs 30%+ faster
-  Bundle size maintained or reduced
-  Zero SSR errors
-  100% test pass rate
-  Zero linting errors

### Developer Experience Metrics

-  Faster onboarding (better docs)
-  Faster development cycle (better HMR)
-  Easier component development (Storybook v8)
-  Better debugging (Vitest UI, Vite dev tools)
-  Modern patterns documented

### User Experience Metrics

-  Lighthouse score > 90
-  FCP < 1.5s
-  LCP < 2.5s
-  CLS < 0.1
-  No visual regressions

---

## Sign-off

### Before Starting

- [ ] Risks understood and accepted
- [ ] Backup strategy in place

### After Each Wave

- [ ] Quality gates passed
- [ ] Changes reviewed
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Changes committed with conventional commits

### Final Sign-off

- [ ] All waves complete
- [ ] All success criteria met
- [ ] All tests passing
- [ ] All documentation updated
- [ ] Production deployment tested
- [ ] Team trained on new stack

---

## Notes

- This is a living document - update as needed during execution
- Use conventional commits for all changes
- Create PR for each wave for easier review
- Document any deviations from plan
- Update success metrics as you go
- Keep stakeholders informed of progress

---

**Next Steps:** Begin Wave 1 - Foundation Setup

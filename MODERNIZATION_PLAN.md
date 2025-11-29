# Universal React - Modernization Plan

**Document Version:** 1.0
**Last Updated:** 2025-11-29
**Status:** Planning Phase
**Owner:** Senior Engineering Team

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

- `feat(wave-5): setup Redux actions and reducers for jsonplaceholder API`
- `feat(wave-5): create API service layer for jsonplaceholder`
- `feat(wave-5): add Posts list page with pagination`
- `feat(wave-5): add Post detail page with Suspense`
- `feat(wave-5): add Users directory page with useTransition`
- `feat(wave-5): add User profile page with concurrent features`
- `feat(wave-5): implement streaming SSR with renderToPipeableStream`
- `feat(wave-5): update navigation for new demo pages`

#### Wave 6 Commits

- `chore(wave-6): upgrade Storybook from v5 to v8`
- `feat(wave-6): configure Storybook with Vite`
- `docs(wave-6): update existing Storybook stories to v8 format`
- `docs(wave-6): create stories for new Radix UI components`

#### Wave 7 Commits

- `docs(wave-7): update README with new tech stack and examples`
- `docs(wave-7): update CLAUDE.md with new architecture details`
- `docs(wave-7): create MIGRATION.md guide`
- `style(wave-7): run lint and fix all issues`

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
   - [ ] Update CI/CD workflows to use Node 22

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
   - [ ] Update React to `18.3.x` (latest in v18)
   - [ ] Update React DOM to `18.3.x`
   - [ ] Update Express to `4.x` (latest)
   - [ ] Update all Babel packages to latest v7
   - [ ] Update ESLint to v9.x
   - [ ] Update Prettier to latest
   - [ ] Run `yarn install` and verify no conflicts

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

   - [ ] Install: `vite`, `@vitejs/plugin-react`
   - [ ] Install: `vite-plugin-ssr` or custom SSR setup
   - [ ] Install: `rollup-plugin-visualizer` (bundle analysis)

2. **Create Vite Configuration**

   - [ ] Create `vite.config.js` for client build
   - [ ] Configure React plugin with Fast Refresh
   - [ ] Configure CSS Modules support
   - [ ] Configure PostCSS (Tailwind)
   - [ ] Configure build output directory (`build-static`)
   - [ ] Configure code splitting strategy
   - [ ] Configure environment variables

3. **Create SSR Configuration**

   - [ ] Create separate SSR entry point (`src/entry-server.js`)
   - [ ] Create client entry point (`src/entry-client.js`)
   - [ ] Configure Vite for SSR mode
   - [ ] Set up SSR build command
   - [ ] Configure manifest generation

4. **Update Express Server for Vite**

   - [ ] Add Vite dev middleware for development
   - [ ] Update `src/server/ExpressServer.js` to use Vite in dev
   - [ ] Update production to load Vite build outputs
   - [ ] Update asset loading (CSS, JS chunks)
   - [ ] Update HMR setup
   - [ ] Test hot module replacement works

5. **Migrate Code Splitting**

   - [ ] Replace `@loadable/component` with `React.lazy()`
   - [ ] Update `src/common/router.jsx` imports
   - [ ] Remove `@loadable/babel-plugin`
   - [ ] Remove `@loadable/webpack-plugin`
   - [ ] Test code splitting still works

6. **Update Build Scripts**

   - [ ] Add `build:client:vite` script
   - [ ] Add `build:server:vite` script
   - [ ] Update `build` script to use Vite
   - [ ] Add `dev:vite` script
   - [ ] Test development server
   - [ ] Test production build

7. **Remove Webpack**
   - [ ] Delete `webpack.config.js`
   - [ ] Remove all webpack dependencies
   - [ ] Remove webpack plugins (mini-css-extract, terser, etc.)
   - [ ] Remove webpack loaders (css-loader, style-loader, etc.)
   - [ ] Clean up package.json scripts
   - [ ] Remove `.babelrc` webpack-specific config

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

   - [ ] Install: `vitest`, `@vitest/ui`
   - [ ] Install: `@testing-library/react`
   - [ ] Install: `@testing-library/jest-dom`
   - [ ] Install: `@testing-library/user-event`
   - [ ] Install: `jsdom` (already have, verify version)

2. **Create Vitest Configuration**

   - [ ] Create `vitest.config.js`
   - [ ] Configure jsdom environment
   - [ ] Configure test file patterns
   - [ ] Configure coverage settings
   - [ ] Configure global test setup
   - [ ] Configure CSS Modules mock
   - [ ] Configure aliases (match Vite config)

3. **Create Test Setup Files**

   - [ ] Create `src/setupTests.js` for Vitest
   - [ ] Configure @testing-library/jest-dom
   - [ ] Add custom matchers if needed
   - [ ] Configure global test utilities

4. **Migrate Existing Tests**

   - [ ] Update `DefaultHelmet.test.js` (migrate from Enzyme)
   - [ ] Update `HomePage.test.js` (migrate from Enzyme)
   - [ ] Update `NotFound.test.js` (migrate from Enzyme)
   - [ ] Update `Page.test.js` (migrate from Enzyme)
   - [ ] Update `ReduxExamplePage.test.js` (migrate from Enzyme)
   - [ ] Replace Enzyme's `shallow()`, `mount()` with `render()`
   - [ ] Replace Enzyme's `find()` with Testing Library queries
   - [ ] Update snapshot tests if needed

5. **Update Test Scripts**

   - [ ] Update `test` script to use Vitest
   - [ ] Update `ci:test` script
   - [ ] Remove `pretest` (Jest cache clear)
   - [ ] Add `test:ui` script for Vitest UI
   - [ ] Add `test:coverage` script

6. **Remove Jest and Enzyme**
   - [ ] Remove Jest dependencies
   - [ ] Remove Enzyme dependencies
   - [ ] Remove `jest.config.js`
   - [ ] Remove babel-jest configuration
   - [ ] Clean up package.json

**Success Criteria:**

-  All existing tests pass with Vitest
-  Test coverage maintained or improved
-  Tests run faster than with Jest
-  No Enzyme dependencies remain
-  CI/CD pipeline updated and passing

**Rollback Strategy:**

- Keep jest.config.js until all tests migrated
- Can run both Jest and Vitest in parallel during migration
- Use npm scripts to switch between test runners

---

### Wave 4: UI Migration

**Objective:** Replace react-bootstrap with Radix UI + Tailwind CSS.

#### Tasks

1. **Install Radix UI Primitives**

   - [ ] Install: `@radix-ui/react-dialog`
   - [ ] Install: `@radix-ui/react-dropdown-menu`
   - [ ] Install: `@radix-ui/react-select`
   - [ ] Install: `@radix-ui/react-tabs`
   - [ ] Install: `@radix-ui/react-tooltip`
   - [ ] Install: `@radix-ui/react-alert-dialog`
   - [ ] Install: `@radix-ui/react-popover`
   - [ ] Install other primitives as needed

2. **Create Base Component Library**

   - [ ] Create `src/common/components/ui/Button.jsx` (Radix + Tailwind)
   - [ ] Create `src/common/components/ui/Card.jsx`
   - [ ] Create `src/common/components/ui/Input.jsx`
   - [ ] Create `src/common/components/ui/Select.jsx`
   - [ ] Create `src/common/components/ui/Dialog.jsx`
   - [ ] Create `src/common/components/ui/Dropdown.jsx`
   - [ ] Create `src/common/components/ui/Tabs.jsx`
   - [ ] Create `src/common/components/ui/Tooltip.jsx`
   - [ ] Create component exports in `src/common/components/ui/index.js`

3. **Migrate Existing Components**

   - [ ] Audit HomePage for react-bootstrap usage
   - [ ] Migrate HomePage to Radix UI + Tailwind
   - [ ] Test HomePage renders correctly
   - [ ] Audit ReduxExamplePage for react-bootstrap usage
   - [ ] Migrate ReduxExamplePage to Radix UI + Tailwind
   - [ ] Test ReduxExamplePage works correctly
   - [ ] Audit NotFound page
   - [ ] Migrate NotFound to Radix UI + Tailwind
   - [ ] Update Page component if needed

4. **Update Tests**

   - [ ] Update HomePage tests for new components
   - [ ] Update ReduxExamplePage tests
   - [ ] Update NotFound tests
   - [ ] Update snapshots if needed
   - [ ] Ensure all tests pass

5. **Remove react-bootstrap**
   - [ ] Verify no react-bootstrap imports remain
   - [ ] Remove react-bootstrap from package.json
   - [ ] Remove Bootstrap CDN link from HTML template
   - [ ] Clean up unused styles

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

#### Tasks

1. **Setup Redux Actions/Reducers for jsonplaceholder**

   - [ ] Create `src/client/redux/actions/posts.js`
   - [ ] Create `src/client/redux/actions/users.js`
   - [ ] Create `src/client/redux/actions/comments.js`
   - [ ] Create `src/client/redux/reducers/posts.js`
   - [ ] Create `src/client/redux/reducers/users.js`
   - [ ] Create `src/client/redux/reducers/comments.js`
   - [ ] Add to root reducer

2. **Create API Service Layer**

   - [ ] Create `src/lib/api/jsonplaceholder.js`
   - [ ] Add `fetchPosts()` function
   - [ ] Add `fetchPost(id)` function
   - [ ] Add `fetchUsers()` function
   - [ ] Add `fetchUser(id)` function
   - [ ] Add `fetchComments(postId)` function
   - [ ] Use with redux-api-middleware

3. **Build Posts List Page**

   - [ ] Create `src/common/components/PostsPage/PostsPage.jsx`
   - [ ] Implement posts fetching with Redux
   - [ ] Add pagination UI (Radix UI + Tailwind)
   - [ ] Add loading states
   - [ ] Add error handling
   - [ ] Style with Tailwind
   - [ ] Add tests
   - [ ] Add route to router

4. **Build Post Detail Page**

   - [ ] Create `src/common/components/PostDetailPage/PostDetailPage.jsx`
   - [ ] Fetch single post with Redux
   - [ ] Fetch comments with Redux
   - [ ] Implement Suspense boundaries for comments
   - [ ] Add loading fallbacks
   - [ ] Add error boundaries
   - [ ] Style with Tailwind + Radix UI
   - [ ] Add tests
   - [ ] Add route with dynamic param

5. **Build Users Directory Page**

   - [ ] Create `src/common/components/UsersPage/UsersPage.jsx`
   - [ ] Fetch users list with Redux
   - [ ] Implement `useTransition` for search/filter
   - [ ] Add user cards (Radix UI + Tailwind)
   - [ ] Add smooth loading states
   - [ ] Style with Tailwind
   - [ ] Add tests
   - [ ] Add route

6. **Build User Profile Page**

   - [ ] Create `src/common/components/UserProfilePage/UserProfilePage.jsx`
   - [ ] Fetch user details with Redux
   - [ ] Fetch user posts with Redux
   - [ ] Fetch user albums with Redux
   - [ ] Implement tabs (Radix UI)
   - [ ] Use `useDeferredValue` for performance
   - [ ] Add concurrent rendering demos
   - [ ] Style with Tailwind
   - [ ] Add tests
   - [ ] Add route with dynamic param

7. **Implement Streaming SSR**

   - [ ] Update `src/server/middleware/renderPage.js`
   - [ ] Replace `renderToString` with `renderToPipeableStream`
   - [ ] Implement shell-ready callback
   - [ ] Implement error handling
   - [ ] Test streaming works in production
   - [ ] Verify Suspense boundaries stream correctly
   - [ ] Add performance monitoring

8. **Update Navigation**
   - [ ] Add navigation links to new pages
   - [ ] Update header/menu component
   - [ ] Test navigation works
   - [ ] Update default helmet/meta tags

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

---

### Wave 6: Storybook Upgrade

**Objective:** Upgrade Storybook from v5 to v8 and integrate with Vite.

#### Tasks

1. **Upgrade Storybook**

   - [ ] Run `npx storybook@latest upgrade`
   - [ ] Review breaking changes
   - [ ] Install `@storybook/react-vite`
   - [ ] Install `@storybook/addon-essentials`
   - [ ] Install `@storybook/addon-interactions`
   - [ ] Install `@storybook/addon-a11y`

2. **Configure Storybook with Vite**

   - [ ] Create `.storybook/main.js` for Vite
   - [ ] Configure Vite builder
   - [ ] Configure addons
   - [ ] Configure story patterns
   - [ ] Set up TypeScript support (for stories metadata)

3. **Create Storybook Preview Config**

   - [ ] Create `.storybook/preview.js`
   - [ ] Import Tailwind CSS
   - [ ] Configure global decorators
   - [ ] Configure Redux provider wrapper if needed
   - [ ] Configure React Router decorator if needed

4. **Update Existing Stories**

   - [ ] Update `DefaultHelmet.stories.js` to v8 CSF format
   - [ ] Remove storybook-react-router (use built-in)
   - [ ] Test existing stories work

5. **Create Stories for New Components**

   - [ ] Create story for Button component
   - [ ] Create story for Card component
   - [ ] Create story for Input component
   - [ ] Create story for Select component
   - [ ] Create story for Dialog component
   - [ ] Create stories for new pages (Posts, Users, etc.)
   - [ ] Add interaction tests where appropriate
   - [ ] Add accessibility tests

6. **Update Scripts**

   - [ ] Update `storybook` script
   - [ ] Update `build-storybook` script
   - [ ] Test Storybook dev server
   - [ ] Test Storybook build

7. **Remove Old Storybook Dependencies**
   - [ ] Remove old @storybook packages
   - [ ] Remove storybook-react-router
   - [ ] Clean up package.json

**Success Criteria:**

-  Storybook v8 runs successfully
-  All existing stories work
-  New component stories created
-  Vite integration working
-  Build time faster than v5
-  Hot reload works

**Rollback Strategy:**

- Keep v5 configuration files until v8 proven
- Can run both versions side-by-side temporarily
- Storybook is development tool, low risk

---

### Wave 7: Documentation & Polish

**Objective:** Update documentation, verify everything works, final polish.

#### Tasks

1. **Update README.md**

   - [ ] Update tech stack section (Vite, Vitest, Radix UI, Tailwind, etc.)
   - [ ] Update quick start commands
   - [ ] Update build commands (Vite instead of Webpack)
   - [ ] Update testing commands (Vitest)
   - [ ] Add section for new demo pages
   - [ ] Update project structure (Vite entry points)
   - [ ] Update example code snippets
   - [ ] Add Tailwind CSS documentation
   - [ ] Add Radix UI component usage

2. **Update CLAUDE.md**

   - [ ] Update Development Commands section
   - [ ] Update Architecture section (Vite instead of Webpack)
   - [ ] Add Vite configuration details
   - [ ] Add Tailwind CSS patterns
   - [ ] Add Radix UI component patterns
   - [ ] Update Build System section
   - [ ] Add modern React patterns (Suspense, Streaming SSR)
   - [ ] Update testing section (Vitest)
   - [ ] Add troubleshooting section

3. **Create MIGRATION.md**

   - [ ] Document all breaking changes
   - [ ] Document React Router v5 � v6 migration
   - [ ] Document Webpack � Vite migration
   - [ ] Document Jest � Vitest migration
   - [ ] Document react-bootstrap � Radix UI migration
   - [ ] Document CSS Modules + Tailwind usage
   - [ ] Add code examples for common patterns
   - [ ] Add troubleshooting guide

4. **Code Quality Check**

   - [ ] Run `yarn lint` and fix all issues
   - [ ] Run `yarn prettier:format` on all files
   - [ ] Review all TODO comments in code
   - [ ] Remove dead code
   - [ ] Remove unused dependencies
   - [ ] Check for console.log statements
   - [ ] Verify all imports are used

5. **Testing Verification**

   - [ ] Run `yarn test` - ensure 100% pass
   - [ ] Check test coverage reports
   - [ ] Add missing tests if needed
   - [ ] Verify snapshot tests are up to date
   - [ ] Test all pages manually in browser

6. **Build Verification**

   - [ ] Run `yarn build` successfully
   - [ ] Check build output size
   - [ ] Verify code splitting worked
   - [ ] Check for large chunks
   - [ ] Run production build locally
   - [ ] Test SSR in production mode

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

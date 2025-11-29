// Jest setup file to handle expected console warnings during tests

// Store original console methods
const originalError = console.error;
const originalWarn = console.warn;

// List of expected warnings that should not fail tests
const expectedWarnings = [
  'React Router Future Flag Warning',
  'Support for defaultProps will be removed',
  'componentWillMount has been renamed',
  'Cannot log after tests are done',
];

// Filter function to check if a message should be suppressed
const shouldSuppressWarning = (message) => {
  const messageStr = String(message);
  return expectedWarnings.some((warning) => messageStr.includes(warning));
};

// Override console.error to filter expected warnings
console.error = (...args) => {
  const message = args[0];

  // Suppress expected warnings
  if (shouldSuppressWarning(message)) {
    return;
  }

  // Let actual errors through
  originalError.apply(console, args);
};

// Override console.warn to filter expected warnings
console.warn = (...args) => {
  const message = args[0];

  // Suppress expected warnings
  if (shouldSuppressWarning(message)) {
    return;
  }

  // Let other warnings through
  originalWarn.apply(console, args);
};

// Clean up any pending timers/promises after each test
afterEach(() => {
  jest.clearAllTimers();
});

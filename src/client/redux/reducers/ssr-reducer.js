/**
 * SSR Reducer
 * Manages server-side rendering error state
 */

const initialState = {
  error: null,
};

export default function ssrReducer(
  state = initialState,
  action = { type: undefined }
) {
  switch (action.type) {
    // No actions needed - this state is only set during SSR
    // and used on initial client hydration
    default:
      return state;
  }
}

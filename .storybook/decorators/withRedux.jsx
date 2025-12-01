import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../src/client/store';
import { DEFAULT_STATE } from '../../src/client/redux/reducers';

/**
 * Redux decorator factory for Storybook stories
 * Creates a decorator with default initial state that can be overridden per story
 *
 * Usage:
 *
 * // In preview.js - set global default
 * decorators: [withRedux()]
 *
 * // In a story file - override for specific story
 * export const MyStory = () => <MyComponent />;
 * MyStory.parameters = {
 *   redux: {
 *     initialState: {
 *       posts: { posts: { data: mockPosts, isFetching: false } }
 *     }
 *   }
 * };
 *
 * // Or use story-level decorator with different defaults
 * export default {
 *   decorators: [withRedux({
 *     posts: { posts: { data: mockPosts, isFetching: false } }
 *   })]
 * };
 */
export const withRedux = (defaultInitialState = DEFAULT_STATE) => {
  return (Story, context) => {
    // Story parameters take precedence over decorator defaults
    const storyInitialState = context.parameters?.redux?.initialState;

    const initialState = storyInitialState || defaultInitialState;

    // Create a new store for each story to ensure isolation
    const store = configureStore(initialState);

    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  };
};

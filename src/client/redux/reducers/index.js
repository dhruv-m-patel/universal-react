import { combineReducers } from 'redux';

import postsReducer from './posts-reducer';
import usersReducer from './users-reducer';
import ssrReducer from './ssr-reducer';

let DEFAULT_STATE = {
  posts: postsReducer(),
  users: usersReducer(),
  ssr: ssrReducer(),
};

if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
  DEFAULT_STATE = window.__PRELOADED_STATE__;
  const stateData = document.getElementById('stateData');
  document.head.removeChild(stateData);
}

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  ssr: ssrReducer,
});
export { DEFAULT_STATE };

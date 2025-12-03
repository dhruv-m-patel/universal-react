import { combineReducers } from 'redux';

import postsReducer from './posts-reducer';
import usersReducer from './users-reducer';

let DEFAULT_STATE = {
  posts: postsReducer(),
  users: usersReducer(),
};

if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
  DEFAULT_STATE = window.__PRELOADED_STATE__;
  const stateData = document.getElementById('stateData');
  document.head.removeChild(stateData);
}

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
export { DEFAULT_STATE };

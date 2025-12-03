import { DEFAULT_STATE } from '../../client/redux/reducers';

export default function getInitialState(req) {
  return {
    ...DEFAULT_STATE,
    ...(req.initialState || {}),
  };
}

import { FETCH_VIDEOS } from '../actions/ActionTypes';

export default function videos(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload;
    default:
      return state;
  }
}

import { INIT_LOADING, FINISH_LOADING } from '../actions/types';

export default (state = false, action) => {
  switch(action.type) {
    case INIT_LOADING:
      return true;
    case FINISH_LOADING:
      return false;
    default:
      return state;
  }
}

import { push }      from 'react-router-redux';
import TracksActions from './tracks.js.es6';

export default class SearchActions {
  static UPDATE_SEARCH() { return 'UPDATE_SEARCH'; }

  static update(search = {}) {
    const self   = this;
    const action = { type: self.UPDATE_SEARCH, search };
    return (dispatch) => {
      dispatch(TracksActions.fetch(search));
      // TODO: replace hardcoded url:
      dispatch(push('/search'));
      return action;
    };
  }
}

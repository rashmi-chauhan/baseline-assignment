import { ActionTypes } from '../actions/profile';

const initialState = {};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_PROFILE:
      return retrieveProfileFromToken(state, action);
    default:
      return state;
  }
};

function retrieveProfileFromToken(state, action) {
  return Object.assign({}, state, action.profile);
}
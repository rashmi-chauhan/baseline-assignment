export const ActionTypes = {
  RECEIVE_PROFILE: 'RECEIVE_PROFILE'
};

export function retrieveProfileFromToken(accessToken) {
  return (dispatch, store) => {
    dispatch({
      type: RECEIVE_PROFILE,
      profile: {
        firstName: 'TODO: firstName',
        lastName: 'TODO: lastName',
        email: 'TODO: email'
      }
    });
  };
}
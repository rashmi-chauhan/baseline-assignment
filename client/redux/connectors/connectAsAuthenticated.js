import React from 'react';
import Router from 'next/router';
import store from '../store';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import { LOCAL_STORAGE, PROFILE_STATUS } from '../../constants';
import * as ProfileActionCreators from '../actions/profile';

export default function connectAsAuthenticated(WrappedComponent) {
  class ConnectedComponent extends React.Component {
    componentDidMount() {
      const { userActions, push } = this.props;
      if (!localStorage[LOCAL_STORAGE.TOKEN]) {
        return Router.push('/');
      }
      if (localStorage[LOCAL_STORAGE.TOKEN]) {
        let auth = JSON.parse(localStorage[LOCAL_STORAGE.TOKEN]);
        profileActions.retrieveProfileFromToken(auth.access_token);
      }
    }

    componentWillReceiveProps(nextProps) {
      const { push } = this.props;
      if (nextProps.profile.status !== PROFILE_STATUS.AUTHENTICATED) {
        Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    let { profile } = state;
    return {
      profile
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      profileActions: bindActionCreators(ProfileActionCreators, dispatch)
    };
  }

  return withRedux(store, mapStateToProps, mapDispatchToProps)(
    ConnectedComponent
  );
}

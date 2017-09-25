import React from 'react';
import Router from 'next/router';
import store from '../store';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import * as ProfileActionCreators from '../actions/profile';

export default function connectAsAnonymous(WrappedComponent) {
  class ConnectedComponent extends React.Component {
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

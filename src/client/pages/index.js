import Link from 'next/link';
import React from 'react';
import { bindActionCreators } from 'redux';
import * as profileActionCreators from '../redux/actions/profile';
import store from '../redux/store';
import withRedux from 'next-redux-wrapper'

class PageLanding extends React.Component {
  render() {
    return (
      <div>
        <div>
          TODO: Implement landing page
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(profileActionCreators, dispatch)
  };
};

const mapStateToProps = (state, ownProps) => {
  const { profile } = state;
  return {
    profile
  }
};

export default withRedux(store, mapStateToProps, mapDispatchToProps)(PageLanding);
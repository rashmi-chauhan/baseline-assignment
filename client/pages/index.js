import Link from 'next/link';
import React from 'react';
import { bindActionCreators } from 'redux';
import * as profileActionCreators from '../redux/actions/profile';
import stylesheet from '../styles/index.css';
import { connectAsAnonymous } from '../redux/connectors';

class PageLanding extends React.Component {
  render() {
    return (
      <div id="landing-content">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <img src="/static/images/appirio-logo.png" />
        <div>
          <span>TODO: Implement landing page</span>
        </div>
      </div>
    );
  }
}

export default connectAsAnonymous(PageLanding);

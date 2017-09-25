import Link from 'next/link';
import React from 'react';
import { bindActionCreators } from 'redux';
import * as profileActionCreators from '../redux/actions/profile';
import stylesheet from '../styles/index.css';
import { connectAsAnonymous } from '../redux/connectors';
import { Button } from 'react-lightning-design-system';

class PageLanding extends React.Component {
  onClick = () => {
    console.log('clickety');
  };

  render() {
    return (
      <div id="landing-content">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <img src="/static/images/appirio-logo.png" />
        <div>
          <Button onClick={this.click}>Simple</Button>
          <Button type="neutral" onClick={this.click}>
            Neutral
          </Button>
          <Button type="brand" onClick={this.click}>
            Brand
          </Button>
          <Button
            type="neutral"
            icon="download"
            iconAlign="left"
            onClick={this.click}
          >
            Icon #1
          </Button>
          <Button type="neutral" disabled>
            Disabled Neutral
          </Button>
          <Button type="brand" disabled>
            Disabled Brand
          </Button>
        </div>
      </div>
    );
  }
}

export default connectAsAnonymous(PageLanding);

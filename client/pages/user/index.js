import Link from 'next/link';
import React from 'react';
import { connectAsAuthenticated } from '../../redux/connectors';

class PageUser extends React.Component {
  render() {
    let message = process.env.WEBAPP_MESSAGE || 'no message found';
    return (
      <div>
        <div>
          <Link href="/user/profile">Profile</Link>
        </div>
      </div>
    );
  }
}

export default connectAsAuthenticated(PageUser);

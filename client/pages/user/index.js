import Link from 'next/link';
import React from 'react';

export default class PageUser extends React.Component {
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

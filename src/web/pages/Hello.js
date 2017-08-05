import React from 'react';

export default class Hello extends React.Component {
  render() {
    let message = process.env.WEBAPP_MESSAGE || 'no message found';
    return (
      <div>
        {message}
      </div>
    );
  }
}
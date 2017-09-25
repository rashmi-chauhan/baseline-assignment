import React, { Component } from 'react';
import { Button } from 'react-lightning-design-system';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Button
            onClick={() => {
              console.log('click');
            }}
          >
            Simple
          </Button>
          <Button
            type="neutral"
            onClick={() => {
              console.log('click');
            }}
          >
            Neutral
          </Button>
          <Button
            type="brand"
            onClick={() => {
              console.log('click');
            }}
          >
            Brand
          </Button>
          <Button
            type="neutral"
            icon="download"
            iconAlign="left"
            onClick={() => {
              console.log('click');
            }}
          >
            Icon #1
          </Button>
          <Button type="neutral" disabled>
            Disabled Neutral
          </Button>
          <Button type="brand" disabled>
            Disabled Brand
          </Button>
        </p>
      </div>
    );
  }
}

export default App;

import React from 'react';

export default class App extends React.Component {
  log = () => {
    console.log("action!")
  }

  render() {
    return (
      <button onClick={this.log}></button>
    )
  }
}
import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="Search" />
        <a>or Browse All</a>
      </div>
    );
  }
}

export default Landing;
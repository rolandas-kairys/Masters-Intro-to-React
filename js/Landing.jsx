import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="Search" />
        <Link to="search">or Browse All on the list </Link>
      </div>
    );
  }
}

export default Landing;
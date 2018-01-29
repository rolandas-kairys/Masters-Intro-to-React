import React, { Component } from 'react';
import preload from '../data.json';


class Search extends Component {

  render() {
    return (
      <div className="search">
        {preload.shows.map(
          (show) => <h3>{show.title}</h3>)
        }
      </div>
    );
  }
}

export default Search;
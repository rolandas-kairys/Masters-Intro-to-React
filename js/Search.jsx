import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';


class Search extends Component {

  render() {
    return (
      <div className="search">
        {preload.shows.map(
          (show) =>
            <ShowCard key={show.title} show={show} />
        )}
      </div>
    );
  }
}

export default Search;
import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';


class Search extends Component {

  render() {
    return (
      <div className="search">
        <div>
          {preload.shows.map(
            (show) =>
              <ShowCard key={show.title} show={show} />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
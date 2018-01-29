import React, { Component } from 'react';
import preload from '../data.json';


class Search extends Component {

  render() {
    return (
      <div className="search">
        {preload.shows.map(
          (show) =>
            <div className="show-card">
              <img
                src={`/public/img/posters/${show.poster}`}
                alt={`${show.title} Show Poster`} />
              <div>
                <h3>{show.title}</h3>
                <h4> ({show.year} )</h4>
                <p> {show.description} </p>
              </div>
            </div>
        )}
      </div>
    );
  }
}

export default Search;
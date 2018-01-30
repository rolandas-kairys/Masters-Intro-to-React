import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "This is debug statement"
    };
  }



  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input value={this.state.searchTerm} type="text" placeholder="Search" />
        </header>
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
// @flow


import React, { Component } from 'react';
import ShowCard from './ShowCard';


type Show = { title: string, year: string, description: string, poster: string, imdbID: string, trailer: string };

class Search extends Component {
  state = {
    searchTerm: ""
  };

  props: {
    shows: Array<Show>
  };


  handleSearchTermChange = (event: SyntheticKeyboardEvent<HTMLButtonElement> & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value })
  }


  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) =>
              <ShowCard key={show.title} show={show} />
            )}
        </div>
      </div>
    );
  }
}

export default Search;

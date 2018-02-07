// @flow


import React, { Component } from 'react';
import ShowCard from './ShowCard';


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

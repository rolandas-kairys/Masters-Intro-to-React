import React, { Component } from 'react';
import preload from '../data.json';


class Search extends Component {

  render() {
    return (
      <div className="search">
        <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
      </div>
    );
  }
}

export default Search;
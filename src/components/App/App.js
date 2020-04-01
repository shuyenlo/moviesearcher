import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import IMDB from '../../util/IMDB/IMDB';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }

    this.search = this.search.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  search(term) {
    IMDB.search(term).then(
      (response) => { this.setState({ searchResults: response }) }
    );
  }

  sortBy(sortType) {
    if (sortType === "yearDown" && this.state.searchResults) {
      const results = this.state.searchResults.sort(function (a, b) {
        return b.year - a.year;
      });
      this.setState({ searchResults: results });
    } else if (sortType === "yearUp" && this.state.searchResults) {
      const results = this.state.searchResults.sort(function (a, b) {
        return a.year - b.year;
      });
      this.setState({ searchResults: results });
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} sortBy={this.sortBy} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

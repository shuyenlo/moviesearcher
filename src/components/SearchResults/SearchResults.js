import React from 'react';
import './SearchResults.css';
import Movie from '../Movie/Movie';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sortType: "" };

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event) {
        const sortType = event.target.value;
        this.props.sortBy(sortType);
    }

    render() {
        return (
            <div>
                <p className="heading">Search Results</p>
                <div className="select">
                    <select className="option" onChange={this.handleSelectChange}>
                        <option value="">Sort by</option>
                        <option value="yearUp">Year(ascending)</option>
                        <option value="yearDown">Year(descending)</option>
                    </select>
                </div>
                <div className="gallery-image">
                    {
                        this.props.searchResults.map(movie => {
                            return <Movie title={movie.title} year={movie.year} posterUrl={movie.posterUrl} type={movie.type}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SearchResults;
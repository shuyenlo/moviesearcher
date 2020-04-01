import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleEnterKeyUp(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }

    render() {
        return (
            <main>
                <h1>MovieSearcher</h1>
                <div className="SearchBox">
                    <input type="text" className="SearchBox-input" placeholder="search here" onChange={this.handleTermChange} onKeyUp={this.handleEnterKeyUp}></input>

                    <button className="SearchBox-button" onClick={this.search}>
                        <i className="SearchBox-icon  material-icons" >search</i>
                    </button>
                </div>
            </main>
        )
    }
}

export default SearchBar;
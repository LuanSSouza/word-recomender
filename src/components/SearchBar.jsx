import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {

    state = {film: ''}

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.film)
    }

    render(){
        return  (
            <div>
                <form onSubmit={this.onFormSubmit} className="form-inline">
                    <input id="search-input"
                        className="form-control search" 
                        type="text" 
                        placeholder="Search the name of a movie from 2011 to 2016"
                        value={this.state.film} 
                        onChange={e => this.setState({film: e.target.value})} />

                    <button type="submit" className="btn btn-primary btn-submit">
						PROCURAR
					</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
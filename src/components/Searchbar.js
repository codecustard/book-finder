import React, { Component } from 'react';
import axios from 'axios';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', books: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchBook = this.searchBook.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    searchBook(event) {
        axios.request( {
            method: 'get', 
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.value
        }).then( (response) => {
            this.setState( {books: response.data.items}, () => {
                console.log(this.state);
            })
        }).catch( (error) => {
            console.log(error);
        });

        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.searchBook}>
                    <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default Searchbar;
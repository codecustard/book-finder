import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Searchbar from './components/Searchbar';
import Book from './components/Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

    this.retrieveBooks = this.retrieveBooks.bind(this);
  }

  retrieveBooks(b) {
    this.setState({books: b});

  }

  render() {
    let bookItems;
    if (this.state.books) {
      bookItems = this.state.books.map( book => {
        let bookTitle = book.volumeInfo.title;
        let bookAuthor = book.volumeInfo.authors;
        let bookPublisher = book.volumeInfo.publisher;
        let bookImage = book.volumeInfo.imageLinks;
        let bookLink = book.volumeInfo.infoLink;
        if (bookImage == undefined) {
          bookImage = [];
          bookImage['thumbnail'] = "";
        }
        console.log(bookImage['thumbnail']);

        return (
          <Book title={bookTitle} author={bookAuthor} publisher={bookPublisher} image={bookImage['thumbnail']} link={bookLink} />
        );
      });

    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            BOOK FINDER
          </h1>
          <Searchbar onRetrieveBooks={this.retrieveBooks} />
          <br />
          <div className='ui three column grid'>
          {bookItems}
          </div>
          {/* <Book title='Title' description='Book description' /> */}
        </header>
      </div>
    );
  }  
}

export default App;

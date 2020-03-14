import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import {Input, FormControl} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


const useStyles = theme => ({
  root: {
    '& > *': {
    // margin: theme.spacing(1),
      width: 200,
    }
  },
  input:  {
    color: "black"
}
});

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

            this.props.onRetrieveBooks(response.data.items);
            console.log(response.data.items);

        }).catch( (error) => {
            console.log(error);
        });

        event.preventDefault();
    }


    render() {

        const {classes} = this.props;

        return (
          <form noValidate autoComplete="off" onSubmit={this.searchBook}>
            <Input fullWidth={true} required={true} className={classes.input} type="text" autoFocus={true} color="primary" id="filled-basic" label="Filled" variant="filled" value={this.state.value} onChange={this.handleChange} />
            <Button type="submit" color="secondary">Search</Button>
          </form>
        );

        // return (
        //     <div>
        //         <form onSubmit={this.searchBook}>
        //             <label>
        //             <input type="text" value={this.state.value} onChange={this.handleChange} />
        //             </label>
        //             <input type="submit" value="Search" />
        //         </form>
        //     </div>
        // );
    }
}

export default withStyles(useStyles, { withTheme: true})(Searchbar);
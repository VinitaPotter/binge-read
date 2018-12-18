import React, { Component } from 'react';
import axios from 'axios';
import './Search.css'
import BookImage from './BookImage';
import Result from './Result';

class Search extends Component{
    state = {
        query: "",
        results: [],
        active: false,
        selected: [],
        pageCount: 0,
        title: "",
        image: "",
    }

    handleChange =(e) => {
        const val = e.target.value
        this.setState({
            query: val
        });
    }

    displayResult = (e) =>{
        e.preventDefault()
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.query).then(res => {
            const data = res.data.items
            data.map(item => {
                 return this.setState({
                    results: data,
                    active: true,
                })
            })            
         })
    }



    handleClick = (e) => {
        e.preventDefault();
        const book = this.state.results.filter((result) => result.volumeInfo.title === e.target.innerText);
        this.setState({  
            selected: book,
            active: false,
            title: book[0].volumeInfo.title,
            pageCount: book[0].volumeInfo.pageCount,
            image: book[0].volumeInfo.imageLinks.thumbnail,
            query: ""
        })
    }

    render(){
        const result = this.state.results.map(result => {
            return <li className="collection-item" onClick={this.handleClick} key={result.id}>{result.volumeInfo.title}</li>
        })
        
        return(
            <div>
                <div className="container">
                <div className="row">
                <form onSubmit={this.displayResult}>
                <input type="text" id="bookname" placeholder="Enter a book name" value={this.state.query}className="col s8 white-text offset-s2" onChange={this.handleChange}/>
                    <button className="btn-floating s2 red accent-3 waves-effect waves-light z-depth-3" >
                        <i className="material-icons">check</i>
                    </button>
                </form>
                </div>
                <div className="container" >
                    <ul className={this.state.active ? 'collection': "hide"}>
                        {result}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col l6">
                    <BookImage thumbnail={this.state.image}/>
                </div>
                <div className="col s12 l6">
                    <Result selectedBook={this.state.title} pages={this.state.pageCount}/>
                </div>
            </div>
            </div> 
        ) 
    }
}




export default Search;
import React, { Component } from 'react';
import "./Result.css";

class Result extends Component{

    state= {
        results: "",
        pageCount: "",
        hours: 0,
        days: 0

    }

    controlHours = (e) =>{
        if(this.state.hours >= 0 && this.state.hours < 24 && e.target.innerText === "add"){
             this.setState({hours: this.state.hours+1})
        } else if (this.state.hours > 0 && e.target.innerText === "remove"){
            this.setState({hours: this.state.hours-1});
        }
    }


    render(){     
        const { selectedBook, pages } = this.props;   
        if(selectedBook && pages){
        return(
            <div className="container orange accent-1 box center z-depth-5">
                <p>Average time required to read {selectedBook} is: </p>
                <div>
                <button className="btn-floating brown">{((pages * 5) / 60).toString().split(".")[0] }</button><span> hours </span>
                <button className="btn-floating brown">{(((pages * 5) / 60).toString().split(".")[1]).slice(0, 2)}</button><span> Minutes </span></div>
                <small className="grey-text text-darken-2">On Average a person takes 5 minutes to read a page</small>
                <hr></hr>
                <p>Plan it!!</p>
                <p>How many hours a day will you be reading the book?</p>
                <div>
                    <button className="btn-floating btn-small orange accent-1 z-depth-0" id="plus" onClick={this.controlHours}>
                        <i className="material-icons red-text accent-4">add</i>
                    </button>
                    <span className="brown-text"> {this.state.hours} </span>
                    <button className="btn-floating btn-small orange accent-1 z-depth-0" id="minus" onClick={this.controlHours}>
                        <i className="material-icons red-text accent-4">remove</i>
                    </button> 
                    <br></br>
                    <span>Hours a day </span>
                </div>
                <p>It will take you {(((pages * 5) / 60)/ this.state.hours).toFixed(2)} days to complete reading this book </p>
            </div>
        ) 
        }
        else if (selectedBook){
            return(
                <div className="container box orange accent-1 center valign-wrapper z-depth-5">
                    <div>
                        <p>Not enough details found for {selectedBook}</p>
                        <p>Please select a different book</p>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="container box orange accent-1 center z-depth-5 valign-wrapper">
                    <div>
                        <div className="home ">
                            <p>When you like a book, you hardly ever want it to end. But I have found myself in a situation, more often than I would like to admit, when I wanted to know how long will it take me to finish a book I am currently reading. Sometimes the book is too boring but I have read it enough to not give up, sometimes it's a classic that is a must-read. But most of the times, I have to take a book on a vacation with me or finish before an exam</p>
                            <p>This app was inspired by <a href="www.bingewatch.com">Bing Watch</a> website</p>
                            <p>So if you're like me search a book and know how long it will take you to read it :)</p>
                        </div>
                        <small className="footer">This webpage is created using <a href="https://reactjs.org/" >ReactJS</a> and <a href="https://materializecss.com/" >Materialize CSS</a></small>
                    </div>
                </div>
            )
        }
    }
}

export default Result;
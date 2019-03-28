import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let url, config;

class MovieSubmit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        }
        
        url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        
        fetch(url, config).then(res => res.json())
        .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Movie added with the ${res} ID!`);
                }
            }).catch(e => {
                console.error(e);
                alert('There has been an error.');
            });
    }

  render() {
    return (
      <div className="general">
       
        <div className="FormMovie">
            <h1 >Submit a movie</h1>
           
            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Movie info to submit</legend>
                    <div className="form-data">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                            placeholder="name of the movie"
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Poster</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                            placeholder="link to poster"
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            rows="4" cols="50"
                            type="comment"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                            placeholder="why do you like the movie? what moved you? etc."
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                    <input type="submit" value="Send" />
                    </div>
                </fieldset>
            </form>
        </div>
      </div>
    );
  }
}

export default MovieSubmit;
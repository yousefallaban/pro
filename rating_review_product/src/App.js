import React, { Component } from 'react';
import Product from "./components/Product/Product";
import ReviewsList from './components/Review/ReviewsList';
import ReviewsDetails from './components/Review/ReviewsDetails';
//data
import reviewData from './data/reviews.json';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';

import './assets/App.css'
import moment from 'moment';
import uuid from 'uuid/v1';
class App extends Component {
  state = loadFromLocalStorage() || {
    reviews: reviewData,
    author: "",
    reviewBody: "",
    score: "",
    isReview: false,
  }
  componentDidUpdate = () => saveToLocalStorage(this.state);
  
  handleCreateReview = () => {
    const newReview = {
      author: this.state.author,
      reviewBody: this.state.reviewBody,
      score: Number(this.state.score),
      id: uuid(),
      datePublished: moment().format('YYYY-MM-DD')
    }
    this.setState({
      reviews: [
        newReview,
        ...this.state.reviews,
      ],
      isReview: !this.state.isReview
    });
  };

  handleFieldChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleToggleReview = () => {
    this.setState({
      isReview: !this.state.isReview
    })
  }

  render() {
    return (
      <div>
        < Product />
        < ReviewsDetails
          handleToggleReview={this.handleToggleReview}
          reviews={this.state.reviews}
        />
        < ReviewsList
          reviews={this.state.reviews}
          isReview={this.state.isReview}
          closeModal={this.handleToggleReview}
          handleCreateReview={this.handleCreateReview}
          handleFieldChange={this.handleFieldChange}
        />
      </div>
    );
  }
}

export default App;

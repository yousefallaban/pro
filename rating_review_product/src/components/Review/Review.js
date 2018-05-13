import React, { Component } from 'react';
import Stars from '../../Helpers/Stars/starts';
class Review extends Component {

  render() {
    const {
      author,
      datePublished,
      reviewBody,
      score,
    } = this.props.review;
    return (
      <div>
        <Stars score={score}>
          <ul>
            <li>{author}</li>
            <li>{datePublished}</li>
            <li>{reviewBody}</li>
          </ul>
        </Stars>       
      </div>
    );
  }
}

export default Review;

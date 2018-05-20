import React, { Component } from 'react';
import Stars from '../../Helpers/Stars/stars';
import Styles from '../../assets/reviewsDetails.css';

class ReviewsDetails extends Component {
  render() {
    const { handleToggleReview,
      reviews } = this.props;
    //calc the average rating    
    const scores = reviews.map(review => review.score)
    const totalScore = reviews.reduce((acc, cur) => acc + cur.score, 0) / scores.length;
    const roundTotalScore = Math.round(totalScore * 10) / 10
    return (
      <div className={Styles.reviewCont}>
        <div className={Styles.container}>
          <h3 className={Styles.rHeader}>
            <i className="fas fa-bullhorn"></i> 
            Reviews:
            </h3>
          <div>
            <Stars score={roundTotalScore} />
            <span>Overview of scores based on (</span>
            <strong>{reviews.length}</strong>
            <span>) reviews </span>
          </div>
          <h5 className={Styles.subHeader}>
            Average score
            <span>{roundTotalScore}</span>
          </h5>
          <div className={Styles.btnCont} >
            <button className={Styles.btn}
              onClick={handleToggleReview} >          
                Write a review
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsDetails;

import React, { Component } from 'react';
import Review from './Review';
import Modal from "../../Helpers/Modal/Modal.js";
import ReviewForm from "./ReviewForm";

class ReviewsList extends Component {

  render() {
    const { reviews,
      isReview,
      closeModal,
      handleCreateReview,
      handleFieldChange, } = this.props;
    
//calc the average rating    
    const scores = reviews.map(review => review.score)
    const totalScore = reviews.reduce((acc, cur) => acc + cur.score, 0) / scores.length;
    const roundTotalScore = Math.round(totalScore * 10) / 10
    return (
      <div>
        <h1>{roundTotalScore} </h1>
        {
          reviews.map(review => (
            <Review key={review.id}
              review={review}
            />
          ))
        }
        {
          isReview ?
            <Modal
              title="Add a review"
              visible={isReview}
              closeModal={closeModal}
            >
              < ReviewForm
                handleCreateReview={handleCreateReview}
                handleFieldChange={handleFieldChange}

              />
            </Modal>
            : null
        }
      </div>
    );
  }
}

export default ReviewsList;

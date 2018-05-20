import React, { Component } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import Modal from "../../Helpers/Modal/Modal.js";

class ReviewsList extends Component {

  render() {
    const { reviews,
      isReview,
      closeModal,
      handleCreateReview,
      handleFieldChange, } = this.props;
    
    return (
      <div>
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

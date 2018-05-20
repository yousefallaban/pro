import React, { Component } from 'react';
import ImgUrl from '../../assets/images/hero.jpg';
import Styles from '../../assets/ReviewForm.css';


class AddReviewForm extends Component {
  render() {
    const { handleCreateReview,
      handleFieldChange,
    } = this.props;
    return (
      <div className={Styles.reviewFormCont}>
        <div>
          <div className={Styles.productContainer}>
            <div className={Styles.pItem}>
              <img className={Styles.heroImg} src={ImgUrl} alt="" />
            </div>
            <h4 className={Styles.ProductTitle}>
              Apple MacBook Pro 13'' (2017) MPXR2N/A Silver
              </h4>
          </div>
          <div>
            <span>What do you think of this article?</span>
          </div>
          <div className={Styles.rating} onChange={(e) => handleFieldChange(e, 'score')}>
            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Awesome!">☆</label>
            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Great">☆</label>
            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Very good">☆</label>
            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Good">☆</label>
            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Bad">☆</label>
          </div>
          <div className={Styles.reviewName}>
            <label>your name:</label>
            <input type="text"
              onChange={(e) => handleFieldChange(e, 'author')} />
          </div>
            <span>your review: </span>
          <div className={Styles.reviewBody}>
            <textarea name="rating" cols="30" rows="5"
              onChange={(e) => handleFieldChange(e, 'reviewBody')}
            >
            </textarea>
          </div>
        </div>
        
        <div className={Styles.btnCont}>
          <button className={Styles.btn}
            onClick={handleCreateReview}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default AddReviewForm;

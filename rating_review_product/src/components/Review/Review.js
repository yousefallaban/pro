import React, { Component } from 'react';
import Stars from '../../Helpers/Stars/stars';
import Styles from '../../assets/review.css';
class Review extends Component {

  render() {
    const {
      author,
      datePublished,
      reviewBody,
      score,
    } = this.props.review;
    return (
      <div className={Styles.reviewContainer}>
        <ul className={Styles.reviewList}>
          <div className={Styles.starcont}>
            <Stars score={score} />
          </div>
          <li className={Styles.reviewListItem}>
            <h5 className={Styles.reviewer}>
              <i className="fas fa-user-circle"></i>{author}
            </h5>
            <span className={Styles.reviewer}>{datePublished}</span>
          </li>
          <li className={Styles.reviewListItem}>
            <span className={Styles.reviewBody}>{reviewBody}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Review;

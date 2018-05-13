import React, { Component } from 'react'
import Styles from './stars.css'

export default class Stars extends Component {

  render() {
    const totalScore = 5;
    const starPercentage = (this.props.score / totalScore) * 100
    const starPercentageRounded = Math.round((starPercentage / 10) * 10)
    const widthPercentage = {
      width: `${starPercentageRounded}%`,
    }
    return (
      <div>
        <div className={Styles.starsOuter}>
          <div className={Styles.starsInner} style={widthPercentage}></div>
        </div>
        <div>
          {this.props.children}
         </div>
      </div>          
    )
  }
}

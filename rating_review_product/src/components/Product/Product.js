import React, { Component } from 'react';
import ImgUrl from '../../assets/images/hero.jpg';
import Styles from '../../assets/Product.css';


class Product extends Component {
  render() {
    return (
      <div className={Styles.row}>
        <header>
          <h2 className={Styles.ProductTitle}>MacBook Pro</h2>
        </header>
        <main className={Styles.mainContainer}>
          <div className={Styles.imgContainer}>
            <img className={Styles.heroImg} src={ImgUrl} alt="" />
          </div>
          <div className={Styles.infoContainer}>
            <ul className={Styles.productItem}>
              <li className={Styles.productList}>
                <span> ‎€ </span>
                <span>2,799.00</span>
              </li>
              <li className={Styles.productList}>This page is built as example for those learning to implement proper Product</li>
              <li className={Styles.productList}>2.9GHz quad-core 7th-generation Core i7 processor</li>
              <li className={Styles.productList}>512GB SSD storage</li>
              <li className={Styles.productList}>16GB 2133MHz LPDDR3 memory</li>
              <li className={Styles.productList}>Silver</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Product;

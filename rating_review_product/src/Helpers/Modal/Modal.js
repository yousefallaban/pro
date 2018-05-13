import React, { Component } from 'react'
import Styles from './modal.css'

export default class ModalDialog extends Component {
  handleClickBackdrop = e => {
    e.stopPropagation()
    if (e.target.classList.contains(Styles.overlay)) {
      this.props.closeModal()
    }
  }
  render() {
    return (
      <div
        onMouseDown={this.handleClickBackdrop}
        className={Styles.overlay}
        style={{
          visibility: this.props.visible ? 'visible' : 'hidden',
          opacity: this.props.visible ? '1' : '0'
        }}
      >
        <div className={Styles.popup}>
          <div className={Styles.popup_header}>
            <a className={Styles.popup_close} onClick={this.props.closeModal}>
              ×
            </a>
            <span>{this.props.title}</span>
          </div>
          <div className={Styles.popup_content}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

import React, {Component } from 'react'
import './Modal.css'
import propTypes from 'prop-types'

export default class Modal extends Component {
render() {
    return (
        <div>
            <div className='cd-popup is-visible' role="alert">
                <div className='cd-popup-container'>
                    <p>{this.props.message}</p>
                    <ul>
                        <li><a href='#0'>تایید</a></li>
                        <li><a href='#0'>بازگشت</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}
  Modal.defaultProps = {
    message: 'شما با موفقیت وارد پنل شدید'
  }
  Modal.propTypes = {
    message: propTypes.oneOf(['true', 'false'])
  }
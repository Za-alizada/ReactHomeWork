import React from 'react'
import './Modal.css'

export default function Modal({ children}) {
    return (
        <div>
            <div className="cd-popup is-visible" role="alert">
                <div className="cd-popup-container">
                    {children}
                    <h1>Hello Frienda</h1>
                    <a href="#" className="cd-popup-close img-replace">Close</a>
                </div>
            </div>
        </div>
    )
}
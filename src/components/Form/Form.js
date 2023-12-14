import React, { Component } from "react";
import './Form.css'
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";

export default class Form extends Component {

    constructor (props) {
        super(props)
        this.state = {
            fistNameData: '',
            lastNameData: '',
            emailData: '',
            submitted: false,
            allValid: false
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.fistNameValidation = this.fistNameValidation.bind(this)
        this.lastNameValidation = this.lastNameValidation.bind(this)
        this.emailValidation = this.emailValidation.bind(this)
    }

    submitHandler (event) {
        event.preventDefault()
        this.setState({
            submitted: true
        })
        if(this.state.fistNameData.length !== 0 && this.state.lastNameData.length !== 0 && 
            this.state.emailData.length !== 0){
                this.setState({
                    allValid:true
                })
                setTimeout(() => {
                    this.setState({
                        allValid: false
                    })
                },3000);
            }
        console.log(event);
    }

    fistNameValidation(event) {
        this.setState({
            fistNameData: event.target.value
        })
    }
    lastNameValidation(event) {
        this.setState({
            lastNameData: event.target.value
        })
    }
    emailValidation(event) {
        this.setState({
            emailData: event.target.value
        })
    }
    render() {
        return(
            <div className="form-container">
                <form className="register-form" onSubmit={this.submitHandler} autoComplete="off">
                    {/* Uncomment the next line to show the success message */}
                    { this.state.submitted && this.state.allValid && (
                        <div id="success-message">Success! Thank you for registering</div>
                    )}
                    <input 
                        id="first-name"
                        onChange={this.fistNameValidation} 
                        value={this.state.fistNameData}
                        className="form-field" 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.fistNameData.length == 0 && (
                        <span id="last-name-error">Please enter a first name</span>
                    )}
                    <input 
                        id="last-name"
                        onChange={this.lastNameValidation} 
                        value={this.state.lastNameData}
                        className="form-field" 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.lastNameData.length == 0 && (
                        <span id="last-name-error">Please enter a last name</span>
                    )}
                    <input 
                        id="email"
                        onChange={this.emailValidation}
                        value={this.state.emailData}
                        className="form-field"
                        placeholder="Emael"
                        type="email"
                        name="email"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.emailData.length == 0 && (
                        <span id="email-name-error">Please enter an email address</span>
                    )}
                    <button className="btn-form" type="subcit">
                        Register
                    </button>
                </form>
            </div>
        )
    }
}
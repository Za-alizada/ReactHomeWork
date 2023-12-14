import React,{ Component } from "react";
import './Counter.css'


export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Counter: 0
        }

        this.addToCounter = this.addToCounter.bind(this)
        this.minusFromCounter = this.minusFromCounter.bind(this)
    }

    addToCounter() {
       this.setState(prevState => {
        return {Counter: prevState.Counter + 1}
       })
    }
    minusFromCounter() {
        this.setState(prevState => {
            return {Counter: prevState.Counter - 1}
           })
    }
    render() {
        return (
            <div>
                <section id='main'>
                    <div className="container">
                        <h2 id="title">Counter</h2>
                        <h3 id="counter">{this.state.Counter}</h3>
                        <div className="btn-container">
                            <button id="add" onClick={this.addToCounter}>Add Counter</button>
                            <button id="lower" onClick={this.minusFromCounter}>Lower Counter</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
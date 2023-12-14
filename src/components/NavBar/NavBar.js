import React, { Component } from "react";
import './NavBar.css'
import { render } from "@testing-library/react";

export default class NavBar extends Component {

    constructor () {
        super()

        this.state = {
            notifications: [
                "اطلاعیه شماره 1",
                "اطلاعیه شماره 2",
                "اطلاعیه شماره 3",
                "اطلاعیه شماره 4",
                "اطلاعیه شماره 5",
            ]
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-default fixed-top navbar-dark id
            mainNav">
                <a className="navbar-brand" herf='/'>Testing Project</a>
                

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav"> 
                        {this.state.notifications.length > 0 && (
                            <li className="nav-item">
                                <span className="badge badge-pill badge-warging">
                                    {this.state.notifications.length}
                                </span>
                                <a className="nav-link" href="/News">News</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}
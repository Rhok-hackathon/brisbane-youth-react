import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
        <div>
            <NavLink exact to="/">Home</NavLink>&nbsp;
            <NavLink exact to="/profile">Profile</NavLink>&nbsp;
            <NavLink exact to="/journal">Journal</NavLink>&nbsp;
            <NavLink exact to="/chat">Chat</NavLink>&nbsp;
            <NavLink exact to="/emoji">Emoji</NavLink>&nbsp;
            <NavLink exact to="/login">Login</NavLink>&nbsp;
            <NavLink exact to="/register">Register</NavLink>
        </div>
        )
    }
}


export default Navbar;



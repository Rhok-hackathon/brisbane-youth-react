import React, { Component, Fragment } from 'react';
import logo from '../images/bys-logo-short.png'
import { Img, Welcome, Chat, navlinkstyle, Survey, Journal, Emoji } from '../styles/components/HomePage.styles';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {

render(){
    return(
        <Fragment>
        <Img src={logo} alt="Brisbane Youth Services logo"></Img>
        <Welcome>Welcome Nick</ Welcome>
            <Survey>Survey</Survey>
            <Chat>
                <NavLink style={navlinkstyle} exact to="/chat">Chat</NavLink>
            </Chat>
            <Journal>Journal</Journal>
            <Emoji>Emojis</Emoji>
        </ Fragment>    
        )}
    }
  
export default HomePage;
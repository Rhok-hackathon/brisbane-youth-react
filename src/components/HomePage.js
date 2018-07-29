import React, { Component, Fragment } from 'react';

import logo from '../images/bys-logo-short.png'
import { Img, Welcome, Chat, Survey, Journal, Emoji } from '../styles/components/HomePage.styles';

class HomePage extends Component {

render(){
    return(
        <Fragment>
        <Img src={logo} alt="Brisbane Youth Services logo"></Img>
        <Welcome>Welcome John</ Welcome>
            <Survey>Survey</Survey>
            <Chat>Chat</Chat>
            <Journal>Journal</Journal>
            <Emoji>Emojis</Emoji>
        </ Fragment>    
        )}
    }
  
export default HomePage;
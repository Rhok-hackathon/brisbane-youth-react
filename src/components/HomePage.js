import React, { Component, Fragment } from 'react';

import logo from '../images/bys-logo-short.png'
import { Img, Welcome, Bubble1, Bubble2, Bubble3, Bubble4 } from '../styles/components/HomePage.styles';

class HomePage extends Component {

render(){
    return(
        <Fragment>
        <Img src={logo} alt="Brisbane Youth Services logo"></Img>
        <Welcome>Welcome John</ Welcome>
            <Bubble2>Survey</Bubble2>
            <Bubble1>Chat</Bubble1>
            <Bubble3>Journal</Bubble3>
            <Bubble4>Survey</Bubble4>
        </ Fragment>    
        )}
    }
  
export default HomePage;
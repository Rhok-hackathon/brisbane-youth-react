import React, { Component, Fragment } from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../components/Navbar.js'
import HomePage from '../components/HomePage.js'
import Profile from '../components/Profile.js'
import Journal from '../components/Journal.js'
import Chat from '../components/Chat.js'
import Emoji from '../components/Emoji.js'
import Login from '../components/Login.js'
import Register from '../components/Register.js'

const AppRouter = () => (
            <BrowserRouter> 
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        {/*
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/profile" component={Profile}  exact={true}/>
                        <Route path="/journal" component={Journal}  exact={true}/>
                        <Route path="/chat" component={Chat}  exact={true}/>
                        <Route path="/emoji" component={Emoji} exact={true}/>
                        <Route path="/login" component={Login} exact={true}/>
                        <Route path="/register" component={Register} exact={true}/>
                        */}
                    </ Switch>
                </ Fragment>
            </ BrowserRouter> 
    )


export default AppRouter;
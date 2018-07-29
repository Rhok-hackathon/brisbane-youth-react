import React, { Component } from 'react'
import Square from './Square'
import Pin from './Pin'
import '../../styles/Board.css'
import { Img, Login } from '../../styles/components/HomePage.styles';
import logo from '../../images/bys-logo-short.png'

// Where the buttons are displayed.

class Board extends Component {
  // Details are an empty array which add numbers when a button is clicked.
  constructor(props){
    super(props)
    this.state = {
        pinDetails: [],
        username: '',
    }
  }


  displayNumber = (i) => {
    // Displays the numbers when their buttons are clicked
    // & puts them into an array
    const pinDetails = [...this.state.pinDetails]
    if (pinDetails.length < 4) {
      pinDetails.push(i)
      this.setState({
        pinDetails
      })
    } else {
      alert('PIN can only have 4 numbers')
      this.setState({pinDetails: []})
    }

    console.log(pinDetails)
  }

  removeNumber = () => {
    let removeNumber = [...this.state.pinDetails]
    removeNumber.pop()
    this.setState({pinDetails: removeNumber})
    console.log(removeNumber)
  }

  submitPin = (event) => {
      event.preventDefault()
      localStorage.setItem('username', this.state.username)
        const pinDetails = [...this.state.pinDetails]
        
        console.log(this.state.username)
  }

handleUsername = event => {
    let username = {...this.state.username}
    username = event.target.value
    console.log(this.state.username)
    this.setState({ username })
}

  renderSquare(i) {
    return <Square value={i} clickHandler={this.displayNumber} />;
  }

  displayPIN = () => {
    let pin = ''
    for (let num of this.state.pinDetails) {
      pin += num
    }
    return `Pin number: ${pin}`;
  }

  render() {
    const status = <Login>Please enter you pin below:</Login>

    return (
        <div>
            <Img src={logo} alt="Brisbane Youth Services logo"></Img>
            <form onSubmit={this.submitPin}>
            <div>
                <label>Username:
                    <input onChange={this.handleUsername}></input>
                </label>
            </div>
            <br />
            <div>
                <div className="status">{status}</div>
                <div className="status">{this.displayPIN()}</div>                
                <div className="board-row">
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                </div>
                <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                </div>
                <div className="board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                </div>
                <div className="board-row last-row">
                <button className="placeholder"></button>
                {this.renderSquare(0)}
                <button className="placeholder"></button>
                </div>
                <button type="submit" onClick={this.submitPin}>Submit</button>
                <button onClick={this.removeNumber}>Remove Number</button>
            </div>
            </form>
        </div>
    );
  }
}

export default Board
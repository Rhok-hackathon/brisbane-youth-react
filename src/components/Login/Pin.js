import React, { Component } from 'react'
import Square from './Square'
import Board from './Board'

class Pin extends Component {
  render() {
    return (
        <div>
            <div className="Pin">
                <div className="Pin-board">
                <Board user={this.props.user} />
                </div>
            </div>
        </div>
    );
  }
}

export default Pin
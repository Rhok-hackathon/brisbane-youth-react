import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './chat/MessageList'
import SendMessageForm from './chat/SendMessageForm'
import RoomList from './chat/RoomList'
import NewRoomForm from './chat/NewRoomForm'

// import { tokenUrl, instanceLocator } from './config'

const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/02409cd7-b851-45d3-85c6-20e70ec23cd7/token";
const instanceLocator = "v1:us1:02409cd7-b851-45d3-85c6-20e70ec23cd7";

// exports.tokenUrl = tokenUrl;
// exports.instanceLocator = instanceLocator;

class Chat extends Component {

    constructor() {
        super()
        this.state = {
            currentRoomId: null,
            joinableRooms: [],
            joinedRooms: [],
            messages: []
        }
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
    }

    componentDidMount () {
        let username
        if (localStorage.getItem('username')) {
            username = localStorage.getItem('username')
        } else {
            username = ''
        }
        const chatManager = new Chatkit.ChatManager({
                instanceLocator: instanceLocator,
                userId: username,
                tokenProvider: new Chatkit.TokenProvider({
                    url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            return this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })           
        })
        .catch(err => console.log('error connecting: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoomId
        })
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log(err))
    }

    subscribeToRoom(roomId) {
        this.setState({
            messages: []
        });
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(currentRoom => {
            this.setState({currentRoomId: currentRoom.id})
            return this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
        })
        .catch(err => console.log('error on subscribing: ', err))
    }


    render () {
        return (
            <div className="app">
                <RoomList
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    subscribeToRoom={this.subscribeToRoom}
                    currentRoomId={this.state.currentRoomId} />
                <MessageList
                    currentRoomId={this.state.currentRoomId}
                    messages={this.state.messages} />
                <NewRoomForm onSubmit={this.createRoom.bind(this)} />
                <SendMessageForm
                    sendMessage={this.sendMessage}
                    disabled={!this.state.currentRoomId} />
            </div>
        )
    }
}

// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
// const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
// const roomId = 9806194
// const username = 'perborgen'

// class Chat extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             messages: []
//         }
//         this.sendMessage = this.sendMessage.bind(this)
//     } 
    
//     componentDidMount() {
//         const chatManager = new Chatkit.ChatManager({
//             instanceLocator: instanceLocator,
//             userId: 'janedoe',
//             tokenProvider: new Chatkit.TokenProvider({
//                 url: testToken
//             })
//         })
        
//         chatManager.connect()
//         .then(currentUser => {
//             this.currentUser = currentUser
//             this.currentUser.subscribeToRoom({
//             roomId: roomId,
//             hooks: {
//                 onNewMessage: message => {

//                     this.setState({
//                         messages: [...this.state.messages, message]
//                     })
//                 }
//             }
//         })
//       })
//     }
    
//     sendMessage(text) {
//         this.currentUser.sendMessage({
//             text,
//             roomId: roomId
//         })
//     }
    
//     render() {
//         return (
//             <div className="app">
//               <Title />
//               <MessageList 
//                   roomId={this.state.roomId}
//                   messages={this.state.messages} />
//               <SendMessageForm
//                   sendMessage={this.sendMessage} />
//             </div>
//         );
//     }
// }

// class MessageList extends React.Component {
//     render() {
//         return (
//             <ul className="message-list">
//                 {this.props.messages.map((message, index) => {
//                     return (
//                       <li  key={message.id} className="message">
//                         <div>{message.senderId}</div>
//                         <div>{message.text}</div>
//                       </li>
//                     )
//                 })}
//             </ul>
//         )
//     }
// }

// class SendMessageForm extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             message: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
    
//     handleChange(e) {
//         this.setState({
//             message: e.target.value
//         })
//     }
    
//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.sendMessage(this.state.message)
//         this.setState({
//             message: ''
//         })
//     }
    
//     render() {
//         return (
//             <form
//                 onSubmit={this.handleSubmit}
//                 className="send-message-form">
//                 <input
//                     onChange={this.handleChange}
//                     value={this.state.message}
//                     placeholder="Type your message and hit ENTER"
//                     type="text" />
//             </form>
//         )
//     }
// }

// function Title() {
//   return <p className="title">My awesome chat app</p>
// }

export default Chat;
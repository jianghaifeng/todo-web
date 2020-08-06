import React from "react";
import SockJsClient from "react-stomp";
import { TalkBox } from "react-talk";

class WebSockets extends React.Component {
    constructor(props) {
        super(props);
        // randomUserId is used to emulate a unique user id for this demo usage
        this.randomUserName = "123";
        this.randomUserId = this.randomUserName;
        this.state = {
            clientConnected: false,
            messages: []
        };
    }

    onMessageReceive = (msg, topic) => {
        this.setState(prevState => ({
            messages: [...prevState.messages, msg]
        }));
    }

    sendMessage = (msg, selfMsg) => {
        try {
            this.clientRef.sendMessage("/app/hello", JSON.stringify(selfMsg));
            return true;
        } catch(e) {
            return false;
        }
    }

    render() {
        const wsSourceUrl = "http://localhost:8080/gs-guide-websocket";
        return (
            <div>
                <TalkBox topic="gs-guide-websocket" currentUserId={ this.randomUserId }
                         currentUser={ this.randomUserName } messages={ this.state.messages }
                         onSendMessage={ this.sendMessage } connected={ this.state.clientConnected }/>

                <SockJsClient url={ wsSourceUrl } topics={["/topic/greetings"]}
                              onMessage={ this.onMessageReceive } ref={ (client) => { this.clientRef = client }}
                              onConnect={ () => { this.setState({ clientConnected: true }) } }
                              onDisconnect={ () => { this.setState({ clientConnected: false }) } }
                              debug={ false }/>
            </div>
        );
    }
}

export default WebSockets;
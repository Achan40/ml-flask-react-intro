import React, {Component} from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class AppWebSocket extends Component {
    constructor() {
        super()
        this.onButtonClicked = this.onButtonClicked.bind(this)
    }

    onButtonClicked = (value) => {
        client.send(JSON.stringify({
            type: "message",
            msg: value
        }));
    }

    componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('Received reply: ', dataFromServer);
        };
    }

    render() {
        return (
            <div className="main">
                <p>Websocket Component</p>
                <button onClick={() => this.onButtonClicked("Hello World!")}>Send a message to websocket server</button>
            </div>
        )
    }
}
export default AppWebSocket
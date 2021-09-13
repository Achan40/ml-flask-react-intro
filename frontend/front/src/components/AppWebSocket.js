import React, {Component} from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class AppWebSocket extends Component {

    componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            console.log(message);
        };
    }

    render() {
        return (
            <div>
                <p>Websocket component</p>
            </div>
        )
    }
}
export default AppWebSocket
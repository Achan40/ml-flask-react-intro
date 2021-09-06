import logo from '../logo.svg';
import '../App.css';
import React, {Component} from "react"
import AppForm from './AppForm';
import AppExtra from './AppExtra';
import AppClassComp from './AppClassComp';

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            flask: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("http://localhost:5000/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    flask: data
                })
            })
    }

    render() {
        const api_response = this.state.loading ? "Loading..." : this.state.flask.Message
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>ml-flask-react-intro</p>
                    <h3>{api_response}</h3>
                    <AppExtra/>
                    <br></br>
                    <AppClassComp/>
                    <AppForm/>
                </header>
            </div>
        )
    }
}

export default App
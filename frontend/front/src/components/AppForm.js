import React, {Component} from "react"

class AppForm extends Component {
    constructor() {
        super()
        this.state = {
            SepalL: "",
            SepalW: "",
            PetalL: "",
            PetalW: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(responseJSON => console.log(responseJSON))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="SepalL" value={this.state.SepalL} placeholder="Sepal Length" onChange={this.handleChange}/>
                    <input type="text" name="SepalW" value={this.state.SepalW} placeholder="Sepal Width" onChange={this.handleChange}/>
                    <input type="text" name="PetalL" value={this.state.PetalL} placeholder="Petal Length" onChange={this.handleChange}/>
                    <input type="text" name="PetalW" value={this.state.PetalW} placeholder="Petal Width" onChange={this.handleChange}/>
                    <button>Generate Prediction</button>
                </form>
                <h3>{this.state.SepalL} {this.state.SepalW} {this.state.PetalL} {this.state.PetalW}</h3>
                <h1>{this.Prediction}</h1>
            </div>
        )
    }
}

export default AppForm
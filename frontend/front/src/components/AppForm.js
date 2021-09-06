import React, {Component} from "react"

class AppForm extends Component {
    constructor() {
        super()
        this.state = {
            inputs: {
                SepalL: "",
                SepalW: "",
                PetalL: "",
                PetalW: "",
            },
            result: {
                prediction: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            inputs: {
                ...this.state.inputs,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(this.state.inputs)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                result: {
                    prediction: data.Prediction
                }
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="SepalL" required value={this.state.inputs.SepalL} placeholder="Sepal Length" onChange={this.handleChange}/>
                    <input type="number" name="SepalW" required value={this.state.inputs.SepalW} placeholder="Sepal Width" onChange={this.handleChange}/>
                    <input type="number" name="PetalL" required value={this.state.inputs.PetalL} placeholder="Petal Length" onChange={this.handleChange}/>
                    <input type="number" name="PetalW" required value={this.state.inputs.PetalW} placeholder="Petal Width" onChange={this.handleChange}/>
                    <button>Generate Prediction</button>
                </form>
                <h3>{this.state.inputs.SepalL} {this.state.inputs.SepalW} {this.state.inputs.PetalL} {this.state.inputs.PetalW}</h3>
                <h1>{this.state.result.prediction}</h1>
            </div>
        )
    }
}

export default AppForm
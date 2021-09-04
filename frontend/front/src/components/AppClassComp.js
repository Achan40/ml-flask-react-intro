import React from "react"

class AppClassComp extends React.Component {
    constructor() {
        // inherit super method from parent class
        super()
        this.state = {
            answer: "Yes"
        }
        // bind the method 
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            // ternary operator for toggle button
            return {answer: prevState.answer === "Yes" ? prevState.answer = "No" : prevState.answer = "Yes"}
        })
    }

    render() {
        return (
            <div>
                <p>Is this a class component? 
                    <button onClick={this.handleClick}>{this.state.answer}</button>
                </p>
            </div>
        )
    }
}
export default AppClassComp
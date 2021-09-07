import React, {Component} from "react"

class AppResult extends Component {

    render() {
        return (
            <div>
                <p>Pass down result as a property to another component:</p>
                <h1>{this.props.res}</h1>
            </div>
        )
    }
}

export default AppResult
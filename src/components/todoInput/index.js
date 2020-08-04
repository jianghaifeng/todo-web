import * as React from "react";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        })
    };

    handlePost = () => {
        this.props.post(this.state.text)
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.handleInputChange}/>
                <button onClick={this.handlePost}>add</button>
            </div>
        )
    }
}

export default TodoInput;
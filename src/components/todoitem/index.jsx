import * as React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

    }

    removeMe = (id) => {
        this.props.remove(this.props.id)
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.text}
                </label>
                <button onClick={this.removeMe}>X</button>
            </div>
        )
    }
}

export default TodoItem;
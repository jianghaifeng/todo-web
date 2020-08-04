import * as React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeMe = (id) => {
        this.props.remove(this.props.id)
    };

    toggle = (id) => {
        this.props.toggle(this.props.id)
    };

    render() {
        return (
            <div>
                <span style={ { textDecoration : `${this.props.value.finished ? "line-through" : "none"}` } } onClick={this.toggle}>
                    {this.props.value.text}
                </span>
                <button onClick={this.removeMe}>X</button>
            </div>
        )
    }
}

export default TodoItem;
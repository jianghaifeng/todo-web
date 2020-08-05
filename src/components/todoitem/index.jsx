import * as React from "react";
import {GET_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";
import axios from "axios";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeMe = () => {
        console.log("--->delete item")
        axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/'+ this.props.value.id)
            .then((response)=> {
                this.props.removeItem(response.data.id)
            })
    };

    toggle = () => {
        console.log("--->toggle item")
        axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/'+ this.props.value.id, {status: !this.props.value.status})
            .then((response)=> {
                this.props.toggleItemFinish(response.data)
            })
    };

    render() {
        return (
            <div>
                <span style={ { textDecoration : `${this.props.value.status ? "line-through" : "none"}` } } onClick={this.toggle}>
                    {this.props.value.content}
                </span>
                <button onClick={this.removeMe}>X</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (index) => {dispatch({type: REMOVE_TODO_ITEM, index})},
        toggleItemFinish: (value) => {dispatch({type: TOGGLE_TODO_ITEM, value})},
    }
};

export default connect(null, mapDispatchToProps)(TodoItem)

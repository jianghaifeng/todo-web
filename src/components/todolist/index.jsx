import * as React from "react";
import TodoItem from "../todoitem";
import TodoInput from "../todoInput";
import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoInput post={this.props.addItem}/>
                {
                    this.props.todoItems.map((value,index) =>
                        <TodoItem id={index} remove={this.props.removeItem} toggle={this.props.toggleItemFinish} key={index} value={value}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoItems: state.itemList}
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (text) => {dispatch({type: ADD_TODO_ITEM, text})},
        removeItem: (index) => {dispatch({type: REMOVE_TODO_ITEM, index})},
        toggleItemFinish: (index) => {dispatch({type: TOGGLE_TODO_ITEM, index})},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
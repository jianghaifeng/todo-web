import * as React from "react";
import TodoItem from "../todoitem";
import TodoInput from "../todoInput";
import {ADD_TODO_ITEM, GET_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";
import axios from 'axios';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("--->get items")
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
            .then((response)=> {
                this.props.getItemList(response.data)
            })
    }

    render() {
        return (
            <div>
            <h2>todo list</h2>
                <TodoInput />
                {
                    this.props.todoItems.map((value,index) =>
                        <TodoItem key={index} value={value}/>)
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
        getItemList: (itemList) => {dispatch({type: GET_TODO_ITEM, itemList})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
import * as React from "react";
import TodoItem from "../todoitem";
import TodoInput from "../todoInput";
import {GET_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";
import axios from 'axios';
import {ApiUrl} from "../../url";

class TodoList extends React.Component {
    componentDidMount() {
        console.log("--->get items")
        axios.get(ApiUrl)
            .then((response) => {
                this.props.getItemList(response.data)
            })
    }

    render() {
        return (
            <div>
                <h2>todo list</h2>
                <TodoInput/>
                {
                    this.props.todoItems.map((value, index) =>
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
        getItemList: (itemList) => {
            dispatch({type: GET_TODO_ITEM, itemList})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
import * as React from "react";
import TodoItem from "../todoitem";
import {ADD_TODO_ITEM, GET_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";

class FinishedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const finishedItems = this.props.todoItems.filter((value, index) => value.status === true);
        return (
            <div>
                <h2>finished list</h2>
                {
                    finishedItems.map((value,index) =>
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

export default connect(mapStateToProps, mapDispatchToProps)(FinishedList)
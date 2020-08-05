import * as React from "react";
import TodoItem from "../todoitem";
import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";

class FinishedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const finishedItems = this.props.todoItems.filter((value, index) => value.finished === true);
        console.log(finishedItems);
        return (
            <div>
                <h2>finished list</h2>
                {
                    finishedItems.map((value,index) =>
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
        removeItem: (index) => {dispatch({type: "", index})},
        toggleItemFinish: (index) => {dispatch({type: "", index})},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishedList)
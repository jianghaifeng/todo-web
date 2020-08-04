import * as React from "react";
import TodoItem from "../todoitem";
import TodoInput from "../todoInput";
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }

    removeItem = (index) => {
        this.setState({todoItems: this.state.todoItems.filter((item, id) => index !== id)});
    };

    handlePost = (text) => {
        this.setState(prevState => ({
            todoItems: prevState.todoItems.concat(text)
        }))
    };

    render() {
        return (
            <div>
                <TodoInput post={this.handlePost}/>
                {
                    this.state.todoItems.map((value,index) => <TodoItem id={index} remove={this.removeItem} key={index} text={value}/>)
                }
            </div>
        )
    }
}

export default TodoList
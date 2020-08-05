import * as React from "react";
import {ADD_TODO_ITEM} from "../actiontypes";
import {connect} from "react-redux";
import axios from "axios";
import {ApiUrl} from "../../url";

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
        console.log("--->add item")
        axios.post(ApiUrl,{content:this.state.text, status: false})
            .then((response)=> {
                this.props.addItem(response.data)
            })
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.handleInputChange}/>
                <button onClick={this.handlePost}>add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (text) => {dispatch({type: ADD_TODO_ITEM, text})}
    }
};

export default connect(null, mapDispatchToProps)(TodoInput)
import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";

const initState = {itemList: []};

const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                itemList: state.itemList.concat({text: action.text, finished: false})
            };
        case REMOVE_TODO_ITEM:
            return {
                itemList: state.itemList.filter((value, index) => index !== action.index)
            };
        case TOGGLE_TODO_ITEM:
            return {
                itemList: state.itemList.map((item,index) => (index === action.index ? {text: item.text, finished: !item.finished}: item))
            }
        default:
            return state;
    }
};

export default TodoReducer;
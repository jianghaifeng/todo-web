import {ADD_TODO_ITEM, GET_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "../actiontypes";

const initState = {itemList: []};

const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TODO_ITEM:
            return {
                itemList: action.itemList
            };
        case ADD_TODO_ITEM:
            return {
                itemList: state.itemList.concat(action.text)
            };
        case REMOVE_TODO_ITEM:
            return {
                itemList: state.itemList.filter((item, index) => item.id !== action.index)
            };
        case TOGGLE_TODO_ITEM:
            return {
                itemList: state.itemList.map((item,index) => (item.id === action.value.id ? action.value: item))
            };
        default:
            return state;
    }
};

export default TodoReducer;
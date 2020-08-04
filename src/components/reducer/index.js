import {ADD_TODO_ITEM} from "../actiontypes";

const initState = {itemList: []};

const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                itemList: state.itemList.concat({text: action.text, finished: false})
            };
        default:
            return state;
    }
};

export default TodoReducer;
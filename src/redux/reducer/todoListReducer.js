import {
  ADD_TODO_ITEM,
  CHANGE_TODO_ITEM,
  DEL_TODO_ITEM,
} from "../action/todoListAction";
import { v4 as uuidv4 } from "uuid";

//初始状态数据
const initialState = {
  todos: [],
};

//根据action的type, 对state进行响应的操作，并返回新的state
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.todos.push({
        id: uuidv4(),
        title: action.title,
        finished: false,
      });
      return newState;
    }
    case CHANGE_TODO_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.todos.length !== 0 &&
        newState.todos.forEach((item) => {
          if (item.id === action.itemId) {
            item.finished = !item.finished;
          }
        });
      return newState;
    }
    case DEL_TODO_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.todos =
        state.todos.length !== 0
          ? state.todos.filter((item) => item.id !== action.itemId)
          : [];
      return newState;
    }
    default:
      return state;
  }
};

export default todoListReducer;

import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import {
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  CHANGE_TODO_ITEM,
} from "../../redux/action/todoListAction";
import TodoItem from "./TodoItem";
import "./TodoList.scss";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  submit() {
    this.props.addTodoItem(this.state.title);
  }

  render() {
    const { title } = this.state;
    const { todos, delTodoItem, changeTodoItem } = this.props;
    let processList = [];
    let finishedList = [];
    todos.length !== 0 &&
      todos.forEach((item) => {
        if (!item.finished) {
          processList.push(item);
        } else {
          finishedList.push(item);
        }
      });
    return (
      <div className="todolist">
        <div className="title">ToDoList</div>
        <div className="wrap">
          <div className="search">
            <Input
              placeholder="请输入内容..."
              value={title}
              onChange={this.changeTitle}
              style={{ width: 500, marginRight: 20 }}
            />
            <Button type="primary" onClick={this.submit}>
              提交
            </Button>
          </div>
          <div className="content">
            {
              <React.Fragment>
                <div className="item">
                  <span
                    className="text"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    正在进行
                  </span>
                  <span className="count">{processList.length}</span>
                </div>
                {processList.length !== 0 &&
                  processList.map((item) => (
                    <TodoItem
                      item={item}
                      key={item.id}
                      todoList={this.props.todoList}
                      delTodoItem={delTodoItem}
                      changeTodoItem={changeTodoItem}
                    />
                  ))}
              </React.Fragment>
            }
            {
              <React.Fragment>
                <div className="item">
                  <span
                    className="text"
                    style={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    已经完成
                  </span>
                  <span className="count">{finishedList.length}</span>
                </div>
                {finishedList.length !== 0 &&
                  finishedList.map((item) => (
                    <TodoItem
                      item={item}
                      key={item.id}
                      todoList={this.props.todoList}
                      delTodoItem={delTodoItem}
                      changeTodoItem={changeTodoItem}
                    />
                  ))}
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todoListReducer.todos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodoItem: (value) => {
      dispatch({ type: ADD_TODO_ITEM, title: value });
    },
    delTodoItem: (value) => {
      dispatch({ type: DEL_TODO_ITEM, itemId: value });
    },
    changeTodoItem: (value) => {
      dispatch({ type: CHANGE_TODO_ITEM, itemId: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

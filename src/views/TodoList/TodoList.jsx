import React from "react";
import { Button } from "antd";
import "./TodoList.scss";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit() {}

  render() {
    return (
      <div className="todolist">
        <div className="title">ToDoList</div>
        <div className="wrap">
          <div className="search">
            {/* <Input
              placeholder="请输入内容..."
              value={title}
              onChange={this.changeTitle}
              style={{ width: 500, marginRight: 20 }}
            /> */}
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
                  {/* <span className="count">{processList.length}</span> */}
                </div>
                {/* {processList.length !== 0 &&
                  processList.map((item) => (
                    <TodoItem
                      item={item}
                      key={item.id}
                      todoList={this.props.todoList}
                    />
                  ))} */}
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
                  {/* <span className="count">{finishedList.length}</span> */}
                </div>
                {/* {finishedList.length !== 0 &&
                  finishedList.map((item) => (
                    <TodoItem
                      item={item}
                      key={item.id}
                      todoList={this.props.todoList}
                    />
                  ))} */}
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;

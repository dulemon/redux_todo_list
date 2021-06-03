import React, { Component } from "react";
import { Button, Checkbox } from "antd";

class TodoItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className={item.finished ? "todo finished" : "todo"} key={item.id}>
        <div className="left">
          <Checkbox
            onChange={() => this.props.changeTodoItem(item.id)}
            checked={item.finished}
          ></Checkbox>
          <span style={{ marginLeft: 10 }}>{item.title}</span>
        </div>
        <div className="right">
          <Button size="small" onClick={() => this.props.delTodoItem(item.id)}>
            删除
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoItem;

import React, { Component } from "react";
import Completed from "./common/Completed";

class ToDoList extends Component {
  state = {
    todoList: []
  };
  setData(data) {
    data.sort((a, b) => {
      if (a.completed === false && b.userId === 1) {
        return 1;
      }
      return 0;
    });
    this.setState({ todoList: data });
  }
  handleClicked = completed => {
    const list = [...this.state.todoList];
    const index = list.indexOf(completed);
    list[index] = { ...completed };
    list[index].completed = !list[index].completed;
    this.setState({ todoList: list });
  };
  getClasses(completed) {
    let classes = "list-group-item list-group-item-";
    classes += completed === true ? "success" : "danger";
    return classes;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => this.setData(json));
  }

  render() {
    const count = this.state.todoList.length;
    const completedCount = this.state.todoList.filter(l => l.completed === true)
      .length;

    return (
      <div className="mt-2">
        <h4 className="badge badge-info p-2 ">Showing Total {count} Tasks</h4>
        <h4 className="badge badge-success p-2 ml-2 ">
          Showing Total {completedCount} Completed Tasks
        </h4>
        <h4 className="badge badge-danger p-2 ml-2 ">
          Showing Total {count - completedCount} Remaining Tasks
        </h4>
        <ol className="list-group list-group-flush">
          {this.state.todoList.map(list => (
            <li key={list.id} className={this.getClasses(list.completed)}>
              {list.id}. {list.title}{" "}
              <Completed list={list} onClicked={this.handleClicked} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ToDoList;

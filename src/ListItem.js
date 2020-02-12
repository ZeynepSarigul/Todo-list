import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import Homepage from "./Homepage.js";
import Moment from "react-moment";
class ListItem extends React.Component {
  render() {
    const todoList = this.props.todos;
    const myTodoList = todoList.map(elem => {
      return (
        <div className="list" key={elem.key}>
          <p>
            <input
              type="text"
              id={elem.key}
              onChange={e => {
                this.props.setUpdate(e.target.value, e.key);
              }}
              value={elem.text}
            ></input>
            <input
              type="text"
              id={elem.key}
              onChange={e => {
                this.props.setDescription(e.target.value, e.key);
              }}
              value={elem.description}
            ></input>
            <br></br>
            <div style={{ left: "50px", position: "absolute" }}>
              due on{" "}
              <Moment format="YYYY/MM/DD">{elem.date.toLocaleString()}</Moment>{" "}
            </div>
            <span class="firstSpan">
              <FontAwesomeIcon
                className="icons"
                icon="check"
                onClick={() => this.props.completeTask(elem.key)}
              />
            </span>{" "}
            <br></br> <br></br>
            <span class="secondSpan">
              <FontAwesomeIcon
                className="icons"
                icon="trash"
                onClick={() => this.props.deleteItem(elem.key)}
              />
            </span>
          </p>
        </div>
      );
    });
    return (
      <div className="mylist">
        <FlipMove duration={300} easing="ease-in-out">
          {myTodoList}
        </FlipMove>
      </div>
    );
  }
}

export default ListItem;

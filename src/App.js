import React from "react";
import moment from "moment";
import logo from "./logo.svg";
import "./App.css";
import ListItem from "./ListItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shuffle } from "lodash";
import Homepage from "./Homepage.js";
import Calendar from "react-calendar";
import agenda from "./agenda.jpg";
library.add(faTrash);
library.add(faCheck);
library.add(faHome);

let imageStyle = {
  height: "inherit",
  width: "850px"
};

let myButton = {
  top: "100px",
  height: "50px",
  width: "inherit",
  borderRadius: "80px",
  border: "0",
  backgroundColor: "#b1a18f",
  cursor: "pointer",
  position: "absolute",
  left: "400px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bolder"
};

let myShuffleButton = {
  top: "100px",
  height: "50px",
  width: "inherit",
  borderRadius: "80px",
  border: "0",
  backgroundColor: "#b1a18f",
  cursor: "pointer",
  position: "absolute",
  left: "230px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bolder"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: {
        text: "",
        description: "",
        key: "",
        date: new Date()
      },
      step: 1,
      complete: "false",
      buttonStyle: {
        display: "none"
      }
    };
  }

  showCalendar = () => {
    if (this.state.buttonStyle.display === "none") {
      this.setState({
        buttonStyle: {
          display: "block"
        }
      });
    } else {
      this.setState({
        buttonStyle: {
          display: "none"
        }
      });
    }
  };

  completeTask = key => {
    const filteredItems = this.state.todos.filter(i => i.key !== key);
    this.setState({
      todos: filteredItems
    });
  };

  handleChange = event => {
    let item = this.state.currentTodo;
    let desc = item.description;
    this.setState({
      currentTodo: {
        text: event.target.value,
        description: desc,
        key: Date.now(),
        date: this.state.currentTodo.date
      }
    });
  };
  handleDescription = event => {
    let item = this.state.currentTodo;
    let mytext = item.text;
    this.setState({
      currentTodo: {
        text: mytext,
        description: event.target.value,
        key: this.state.currentTodo.key,
        date: this.state.currentTodo.date
      }
    });
  };
  deleteItem = key => {
    const filteredItems = this.state.todos.filter(i => i.key !== key);
    this.setState({
      todos: filteredItems
    });
  };

  setUpdate = (text, key) => {
    const items = this.state.todos;

    items.map(item => {
      if (items.key === key) {
        item.text = text;
      }
    });

    this.setState({
      todos: items
    });
  };

  setDescription = (description, key) => {
    const items = this.state.todos;

    items.map(item => {
      if (items.key === key) {
        item.description = description;
      }
    });

    this.setState({
      todos: items
    });
  };
  shuffleList = () => {
    this.setState({
      todos: shuffle(this.state.todos)
    });
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  previousStep = () => {
    this.setState({
      step: this.state.step > 2 ? this.state.step - 1 : 1
    });
  };
  onChange = date =>
    this.setState({
      currentTodo: {
        text: this.state.currentTodo.text,
        description: this.state.currentTodo.description,
        key: this.state.currentTodo.key,
        date: date
      }
    });

  addItem = e => {
    e.preventDefault();
    const newList = this.state.currentTodo;
    console.log(newList);
    if (newList.text !== "") {
      const items = [...this.state.todos, newList];
      this.setState({
        todos: items,
        currentTodo: {
          text: "",
          description: "",
          key: "",
          date: new Date()
        }
      });
    } else {
      alert("Please enter aa task name!");
    }
  };
  render() {
    let myText = this.state.todos.map(i => {
      return i.text;
    });

    switch (this.state.step) {
      case 1:
        return <Homepage nextStep={this.nextStep} />;
      case 2:
        return (
          <div
            className="taskManager"
            style={{ fontFamily: "Lemonada,cursive" }}
          >
            <div style={{ left: "15px", position: "relative" }}>
              Task Manager
            </div>
            <FontAwesomeIcon
              style={{
                fontSize: "40px",
                cursor: "pointer",
                right: "20px",
                top: "20px",
                position: "absolute"
              }}
              className="icons"
              icon="home"
              onClick={this.previousStep}
            />
            <link
              href="https://fonts.googleapis.com/css?family=Lemonada:300|Montserrat&display=swap"
              rel="stylesheet"
            ></link>{" "}
            <div className="page">
              <div className="photo">
                {" "}
                <img src={agenda} style={imageStyle} />{" "}
              </div>

              <div className="App">
                <header>
                  <form id="todo-form" onSubmit={this.addItem}>
                    <input
                      type="text"
                      placeholder="Enter Text"
                      value={this.state.currentTodo.text}
                      onChange={this.handleChange}
                    />

                    <input
                      type="text"
                      placeholder="Enter Description"
                      value={this.state.currentTodo.description}
                      onChange={this.handleDescription}
                    />
                    <button type="submit">Add</button>
                  </form>
                  <div className="custom">
                    <button onClick={this.showCalendar} style={myButton}>
                      {this.state.buttonStyle.display === "none"
                        ? "  Select a deadline"
                        : "Click to close it"}{" "}
                    </button>

                    <div style={this.state.buttonStyle}>
                      <Calendar
                        locale="en"
                        onChange={this.onChange}
                        value={this.state.date}
                      />{" "}
                    </div>

                    <button onClick={this.shuffleList} style={myShuffleButton}>
                      Shuffle your tasks
                    </button>
                  </div>
                </header>
                <div style={{ top: "300px" }}>
                  <ListItem
                    todos={this.state.todos}
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                    setDescription={this.setDescription}
                    shuffleList={this.shuffleList}
                    completeTask={this.completeTask}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default App;

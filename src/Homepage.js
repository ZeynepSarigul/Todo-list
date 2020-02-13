import React from "react";
import punch from "./punch.jpg";

let start = {
  height: "38px",
  padding: "0 15px",
  textAlign: "center",
  fontSize: "13px",
  fontWeight: "600",
  lineHeight: "38px",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
  textDecoration: "none",
  whiteSpace: "nowrap",
  borderRadius: "4px",
  border: "1px solid #bbb",
  cursor: "pointer",
  boxSizing: "border-box",
  display: "inline-block",
  margin: "0px auto",
  color: "#3b3b3b",
  backgroundColor: "#FFF",
  borderColor: "#FFF",
  zIndex: "2",
  transition: "0.5s",
  top: "460px",
  left: "195px",
  zIndex: "4",
  position: "absolute"
};

let homepageStyle = {
  fontSize: "19px",
  fontWeight: "600",
  height: "100%",
  width: "100%",
  position: "relative",
  marginTop: "0px"
};

let imageStyle = {
  backgroundSize: "cover",
  height: "100%",
  width: "100%",

  zIndex: "3"
};

let welcomeStyle = {
  color: "#888888",
  top: "295px",
  left: "150px",
  zIndex: "4",
  position: "absolute",
  fontSize: "20px",

  fontFamily: "Lemonada, cursive"
};

let to = {
  color: "#888888",

  left: "90px",
  zIndex: "4",
  position: "absolute",
  fontSize: "17px",
  lineHeight: "45px"
};
let myWelcome = {
  color: "#888888",

  left: "22px",
  zIndex: "4",
  position: "absolute",
  fontSize: "20px",
  lineHeight: "45px"
};

class Homepage extends React.Component {
  render() {
    return (
      <div style={homepageStyle}>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Lemonada:300|Montserrat&display=swap"
            rel="stylesheet"
          ></link>{" "}
        </head>
        <div style={welcomeStyle}>
          <div style={myWelcome}>Welcome </div> <br></br>{" "}
          <div style={to}> to </div> <br></br> Task Manager
        </div>
        <button style={start} onClick={this.props.nextStep}>
          Start Here
        </button>
        <img src={punch} style={imageStyle} alt="logo" />
      </div>
    );
  }
}

export default Homepage;

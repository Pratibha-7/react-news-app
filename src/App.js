import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

import React, { Component } from "react";

export default class App extends React.Component {
 
  constructor() {
    super();
    console.log("This constructor function");
  }
  componentDidMount() {
    console.log("This is componentDidMount Function");
  }
  render() {
    return <>
    <NavBar />
    <News pageSize={5} country="in" category="general"/>
        </>
  }
}

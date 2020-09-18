import React, { useState } from "react";
import "./App.css";

function Display(props) {
  return <h1>Counter: {props.counter}</h1>;
}

function Button(props) {
  return <button onClick={props.count}>{props.sign}</button>;
}

function Counter() {
  const [counter, setCounter] = useState(0);

  function inc() {
    setCounter(counter + 1);
  }
  function dec() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <Display counter={counter} />
      <Button sign={"+"} count={inc}></Button>
      <Button sign={"-"} count={dec}></Button>
    </div>
  );
}

export default Counter;

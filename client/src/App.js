import React, { Fragment } from 'react';
import './App.css';
import InputTodos from "./components/InputTodos"
import ListAllTodos from "./components/ListAllTodos"

function App() {
  return (
    <div className="container">
      <Fragment>
        <InputTodos/>
        <ListAllTodos/>
      </Fragment>
    </div>

  );
}

export default App;

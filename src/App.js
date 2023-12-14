import React, { Component }  from "react";
import { render } from "@testing-library/react";
import NavBar from './components/NavBar/NavBar'
import Counter from './components/Counter/Counter'
import Temp from './components/Temp/Temp'
import Form from './components/Form/Form'
import { nominalTypeHack } from "prop-types";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Form />
      </div>
    )
  }
}

export default App
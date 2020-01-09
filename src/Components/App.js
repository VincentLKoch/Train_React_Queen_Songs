import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components : Stateless
import { Header } from "./layout/Header";
// Most of the logic are in home page module
import Home from "./Home";

// Others
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" render={() => <Home />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

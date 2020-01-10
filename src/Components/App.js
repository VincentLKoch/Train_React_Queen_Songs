import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Components
import { Header } from "./layout/Header";
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

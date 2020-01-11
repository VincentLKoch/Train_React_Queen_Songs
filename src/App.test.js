import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const store = createStore(rootReducer);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

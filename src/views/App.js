import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppProvider } from "../context";
import Home from "./Home";
import Article from "./Article";
import Navbar from "../components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/articles/:id" component={Article} />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;

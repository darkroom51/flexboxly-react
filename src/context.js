import React, { Component } from "react";

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  state = {
    articles: [],
    page: "",
    menuOpened: false
  };

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({ articles: data });
      })
      .catch(err => console.log(err));
  }

  setPage = page => {
    this.setState({ page });
  };

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpened: !prevState.menuOpened }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setPage: this.setPage,
          toggleMenu: this.toggleMenu
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer, AppContext };
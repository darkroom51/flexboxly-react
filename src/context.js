import React, { Component } from "react";

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  state = {
    articles: [],
    isMain: true
  };

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}data.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({ articles: data });
      })
      .catch(err => console.log(err));
  }

  setIsMain = () => {
    this.setState(prevState => ({isMain: !prevState.isMain}))
  };

  render() {
    console.log(this.state);

    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setIsMain: this.setIsMain
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
};

export { AppProvider, AppConsumer, AppContext };

import React from 'react';

class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}data.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({articles: data});
      });
  }
  
  render() {
    return (
      <div className="App">
        {this.state.articles.map(article => (
          <div key={article.id}>{article.title}</div>
        ))}
      </div>
    );
  }
}

export default App;

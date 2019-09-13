import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({
      user,
    });
  }

  render() {
    const { Header} = this.state;
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;

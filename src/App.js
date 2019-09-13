import { Switch, Route, Component} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import House from './components/House';
import Wizard from './components/Wizard';




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

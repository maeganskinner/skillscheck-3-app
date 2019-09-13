

class App extends Component {
    register() {
        const { username, password, isAdmin } = this.state;
        axios
          .post('/auth/register', { username, password, isAdmin })
          .then(user => {
            this.setState({ username: '', password: '' });
            this.props.updateUser(user.data);
          })
          .catch(err => {
            this.setState({ username: '', password: '' });
            alert(err.response.request.response);
          });


}


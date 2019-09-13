export default class store extends Component {
    constructor(props) {
        super(props);
        this.state = {
          section: [
              name:
              address:
              city:
              state:
              zipcode:
          ]
        };
      }
    render() {
        return (
          <div>
            <Header />
            <nav>
              <button onClick={() => this.setState({ section: "complete" })}>
                Complete
              </button>
    
              <button onClick={() => this.setState({ section: "cancel" })}>
                cancel
              </button>
              
            </nav>
            <div
          onClick={() => {
            this.setState({ selected: !this.state.selected });
          }}
        >
          <img
            src={this.props.image}
            className={this.state.selected ? "selected" : ""}
          />
          <div>
            <h2>{this.props.name}</h2>
            <button
            
              onClick={e => {
                e.stopPropagation();
                Axios.delete(`/api/wizard/${this.props.index}`).then(response => {
                  this.props.updateWishes(response.data);
                });
              }}
            >
              Delete
            </button>
          </div>
          </div>
        );
      }
    }

};

export default class store extends Component {

}
    

export default class store extends Component {
    nav>
    <button onClick={() => this.setState({ section: "complete" })}>
      Complete
    </button>

}


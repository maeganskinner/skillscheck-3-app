// ADD EDIT HOME
import React from "react";
import Header from "./components/Header";




class Wizard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        section: [
            name = "name",
            address = "address",
            city = "city",
            state = "state",
            zipcode = "zipcode"
        ]
      };
    }
    render() {
      return (
        <div>
          <Header />
  
           
        <div>
          <h2>{this.props.name}</h2>
          <button

            onClick={e => {
              e.stopPropagation();
              Axios.delete(`/api/houses/${this.props.index}`).then(response => {
                this.props.updateHouses(response.data);
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
  
  export default App;
// VIEW HOMES 
import React, { Component } from "react";
import Wizard from "./Wizard";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        };
        this.updateHouses = this.updateHouses.bind(this);
    }

    updateHouses(houses) {
        this.setState({ houses: houses });
    }
    componentDidMount() {
        axios
            .get("/api/wizard")
            .then(response => {
                this.setState({ wishes: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <nav>
                    <button onClick={() => this.setState({ section: "add new property" })}>
                        Add New Property
                        {this.state.houses.map((house, index) => (
                            <Wizard
                                updateHouses={this.updateHouses}
                                name={wizard.name}
                                address={wizard.address}
                                city={wizard.city}
                                state={wizard.state}
                                zipcode={wizard.zipcode}
                                index={index}
                            />
                        ))}
                    </button>

                </nav>
                <nav>
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            Axios.delete(`/api/wizard/${this.props.index}`).then(response => {
                                this.props.updateHouseresponse.data);
                            });
                        }}
                    >
                        Delete
        </button>


                </nav>
            </div>
        );
    }
}

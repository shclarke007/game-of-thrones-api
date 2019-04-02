import React, { Component } from "react";
import HousesHeaderTitle from './components/headers/HousesHeaderTitle';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://www.anapioficeandfire.com/api/houses")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          houses: json
        });
      });
  }

  render() {
    var { isLoaded, houses } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <header className="cardsHeader">
            <HousesHeaderTitle />
          </header>
          <div className="cardsContainer">
            {houses}
          </div>
        </div>
      );
    }
  }
}

export default Houses;

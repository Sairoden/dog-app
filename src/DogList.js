import React, { Component } from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="row">
          {this.props.dogs.map(dog => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={dog.name}>
              <img src={dog.src} alt={dog.name} />
              <h3>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;

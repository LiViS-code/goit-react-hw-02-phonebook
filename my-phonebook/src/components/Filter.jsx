import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label>
          Find contacts by name
          <input type="text" name="filter"></input>
        </label>
      </>
    );
  }
}

export default Filter;

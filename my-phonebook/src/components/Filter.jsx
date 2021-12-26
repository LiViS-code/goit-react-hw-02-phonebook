import React, { Component } from "react";

class Filter extends Component {
  handleInput = (e) => {
    const { value } = e.target;
    const { onFilter } = this.props;
    onFilter(value);
  };

  render() {
    const { handleInput } = this;
    return (
      <>
        <label>
          Find contacts by name
          <input type="text" name="filter" onChange={handleInput}></input>
        </label>
      </>
    );
  }
}

export default Filter;

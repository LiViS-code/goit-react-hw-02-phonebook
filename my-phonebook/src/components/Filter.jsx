import React, { Component } from "react";
import { Container } from "./Filter.styled";
import { Input, Label } from "./ContactForm.styled";

class Filter extends Component {
  handleInput = (e) => {
    const { value } = e.target;
    const { onFilter } = this.props;
    onFilter(value);
  };

  render() {
    const { handleInput } = this;
    return (
      <Container>
        <Label htmlFor="inputFilter">Find contacts by name</Label>
        <Input
          id="inputFilter"
          type="text"
          name="filter"
          onChange={handleInput}
        ></Input>
      </Container>
    );
  }
}

export default Filter;

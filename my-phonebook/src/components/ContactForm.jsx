import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleForm = () => {
    return console.log("что-то ввели");
  };

  render() {
    return (
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter contact name"
            required
            onChange={this.handleForm}
          />
        </label>
      </form>
    );
  }
}

export default ContactForm;

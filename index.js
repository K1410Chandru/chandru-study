import React, { Component } from 'react';

class PassengerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      errors: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  validateForm = () => {
    let isValid = true;
    let errors = { ...this.state.errors };

    // Name validation
    if (!this.state.name.match(/^[a-zA-Z ]+$/)) {
      errors.name = 'Name should only contain letters and spaces';
      isValid = false;
    } else {
      errors.name = '';
    }

    // Age validation
    if (!this.state.age.match(/^[0-9]+$/) || this.state.age < 1) {
      errors.age = 'Age should be a positive number';
      isValid = false;
    } else {
      errors.age = '';
    }

    // Email validation
    if (!this.state.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      errors.email = 'Email is not valid';
      isValid = false;
    } else {
      errors.email = '';
    }

    this.setState({ errors });
    return isValid;
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      console.log('Form submitted successfully');
      // Perform form submission here
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          {this.state.errors.name && <p>{this.state.errors.name}</p>}
        </div>
        <div>
          <label>Age:</label>
          <input type="text" name="age" onChange={this.handleChange} value={this.state.age} />
          {this.state.errors.age && <p>{this.state.errors.age}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
          {this.state.errors.email && <p>{this.state.errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PassengerForm;
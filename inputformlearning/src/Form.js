import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.updateState(name, value);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    alert("Mentjük már is!");
    this.props.clearState();
  }
  
  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.props.firstName}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.props.lastName}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.props.email}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="text"
                name="password"
                value={this.props.password}
                onChange={this.handleInputChange}
              />
            </label>
            <input className="submit-button" type="submit" value="submit" />
          </form>
        </div>          
        <div className="form-output">
          <h1>Output</h1>
          <p>
            <strong>First name:</strong> {this.props.firstName}
          </p>
          <p>
            <strong>Last name:</strong> {this.props.lastName}
          </p>
          <p>
            <strong>Email:</strong> {this.props.email}
          </p>
          <p>
            <strong>Password:</strong> {this.props.password}
          </p>
        </div>
      </div>
    );
  }
}

export default Form;
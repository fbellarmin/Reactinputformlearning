import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Minta János",
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    alert("Mentjük már is!");
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
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
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <input className="submit-button" type="submit" value="submit" />
          </form>
        </div>          
        <div className="form-output">
          <h1>Output</h1>
          <p>
            <strong>First name:</strong> {this.state.firstName}
          </p>
          <p>
            <strong>Last name:</strong> {this.state.lastName}
          </p>
          <p>
            <strong>Email:</strong> {this.state.email}
          </p>
          <p>
            <strong>Password:</strong> {this.state.password}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
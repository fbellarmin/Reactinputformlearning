import React from "react";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateState = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  clearState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Form
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        password={this.state.password}
        updateState={this.updateState}
        clearState={this.clearState}
      />
    );
  }
}

export default App;

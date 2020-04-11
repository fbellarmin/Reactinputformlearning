import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Minta János",
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    alert("Mentjük már is!");
    this.setState({
      name: "",
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange} />
            </label>
            <input className="submit-button" type="submit" value="submit" />
          </form>
        </div>          
        <div className="form-output">
          <h1>Output</h1>
          <p>
            <strong>Name:</strong> {this.state.name}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
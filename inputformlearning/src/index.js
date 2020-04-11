import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Minta János"
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form>
            <label>
              Name:
              <input type="text" onChange={this.handleChange} />
            </label>
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
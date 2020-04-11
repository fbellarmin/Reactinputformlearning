import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form>
            <label>
              Name:
              <input type="text" />
            </label>
          </form>
        </div>          
        <div className="form-output">
          <h1>Output</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
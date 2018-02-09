import React from "react";

class Challenge1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge 1</h1>
        <h2>
          If we list all the natural numbers below 10 that are multiples of 3 or
          5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
        </h2>
        <h2>
          Find the sum of all the multiples of 3 or 5 below your chosen number.
        </h2>
        <form onSubmit={this.props.challenge1}>
          <input
            className="inputBox"
            placeholder="Your Number"
            value={this.props.yourNumber}
            onChange={this.props.handleChange}
          />
        </form>
        <div className="resultBox">
          <h3>{this.props.result}</h3>
        </div>
      </div>
    );
  }
}

export default Challenge1;

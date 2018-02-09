import React from "react";

class Challenge5 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge 5</h1>
        <h2>
          2520 is the smallest number that can be divided by each of the numbers
          from 1 to 10 without any remainder.
        </h2>
        <h2>
          What is the smallest positive number that is evenly divisible by all
          of the numbers from 1 to your chosen number?
        </h2>
        <h5>Numbers over 20 will take a LONG time to compute!</h5>

        <form onSubmit={this.props.challenge5}>
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

export default Challenge5;

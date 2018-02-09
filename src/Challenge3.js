import React from "react";

class Challenge3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge 3</h1>
        <h2>The prime factors of 13195 are 5, 7, 13 and 29.</h2>
        <h2>What is the largest prime factor of your chosen number?</h2>
        <h5>Large numbers will take a LONG time to compute!!!</h5>
        <form onSubmit={this.props.challenge3}>
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

export default Challenge3;

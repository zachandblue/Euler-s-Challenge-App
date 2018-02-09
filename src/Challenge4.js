import React from "react";

class Challenge4 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge 4</h1>
        <h2>
          A palindromic number reads the same both ways. The largest palindrome
          made from the product of two 2-digit numbers is 9009 = 91 × 99.
        </h2>
        <h2>
          Find the largest palindrome made from the product of two 3-digit
          numbers.
        </h2>
        <form onSubmit={this.props.challenge4}>
          <button onSubmit={this.props.challenge4} className="inputBox">
            Solve
          </button>
        </form>
        <div className="resultBox">
          <h3>{this.props.result}</h3>
        </div>
      </div>
    );
  }
}

export default Challenge4;

import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Challenge1 from "./challenge1";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";
import Challenge4 from "./Challenge4";
import Challenge5 from "./Challenge5";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      yourNumber: "",
      result: "?"
    };
    this.handleChange = this.handleChange.bind(this);
    this.challenge1 = this.challenge1.bind(this);
    this.challenge2 = this.challenge2.bind(this);
    this.challenge3 = this.challenge3.bind(this);
    this.challenge4 = this.challenge4.bind(this);
    this.challenge5 = this.challenge5.bind(this);
    this.showContainer = this.showContainer.bind(this);
  }

  handleChange(event) {
    this.setState({ yourNumber: event.target.value });
  }

  challenge1(event) {
    const yourNumber = this.state.yourNumber;
    let number = 1;
    let sum = 0;
    let i = 1;
    for (i = 1; i < yourNumber; i++) {
      if (number % 3 === 0) {
        sum = sum + number;
      } else if (number % 5 === 0) {
        sum = sum + number;
      } else {
      }
      number = number + 1;
    }
    sum = sum.toLocaleString();
    this.setState({
      yourNumber: "",
      result: sum
    });
    event.preventDefault();
  }

  challenge2(event) {
    let first = 1;
    let second = 2;
    let number = 0;
    let sum = 0;
    let yourNumber = this.state.yourNumber;

    while (number < yourNumber) {
      number = first + second;

      first = second;
      second = number;

      if (number % 2 === 0) {
        sum = sum + number;
      }
    }

    sum = sum + 2;
    sum = sum.toLocaleString();

    this.setState({
      yourNumber: "",
      result: sum
    });
    event.preventDefault();
  }

  challenge3(event) {
    //  let test1 = 600851475143;
    //  let test = 60085143;
    let list = [];
    let n = 1;
    let yourNumber = this.state.yourNumber;

    while (n <= yourNumber) {
      if (yourNumber % n === 0) {
        var i = 2;
        var primeNumber = false;

        while (i < n) {
          if (n % i === 0) {
            primeNumber = false;
            break;
          } else {
            primeNumber = true;
            i++;
          }
        }
        if (primeNumber) {
          list.push(n);
        } else {
        }
      }
      n++;
    }

    let result = list.pop().toLocaleString();

    this.setState({
      yourNumber: "",
      result: result
    });
    event.preventDefault();
  }

  challenge4(event) {
    let x = 1;
    let y = 1;
    let n = 1000;
    const myArray = [];
    for (x = 1; x < n; x++) {
      for (y = 1; y < n; y++) {
        var product = x * y + "";
        var testProduct = x * y + "";
        var forwards = product.split("");
        var backwards = testProduct.split("");
        var backwards = backwards.reverse();
        var forwardString = forwards.join();
        var backwardString = backwards.join();
        var integer = parseFloat(forwardString.replace(/,/g, ""));
        if (backwardString === forwardString) {
          myArray.push(integer);
        }
      }
    }

    console.log(Math.max.apply(null, myArray));
    let result = Math.max.apply(null, myArray);
    result = result.toLocaleString();

    this.setState({
      yourNumber: "",
      result: result
    });
    event.preventDefault();
  }

  challenge5(event) {
    let n = 1;
    let i = 1;
    let result = 0;
    let smallestNumber = false;
    let yourNumber = this.state.yourNumber;
    while (smallestNumber !== true) {
      var divisibleByAll = true;
      for (i = 1; i <= yourNumber; i++) {
        if (n % i !== 0) {
          divisibleByAll = false;
        }
      }
      if (divisibleByAll) {
        console.log(n + " is divisible by all");
        result = n;
        result = result.toLocaleString();
        smallestNumber = true;
      } else {
        n++;
      }
    }
    this.setState({
      yourNumber: "",
      result: result
    });
    event.preventDefault();
  }

  showContainer(n) {
    let challenge = ".challenge" + n;
    let nav = ".nav" + n;
    let els = document.getElementsByClassName("container");
    let navs = document.getElementsByClassName("navs");
    Array.from(els).forEach(function(el) {
      el.classList.remove("show");
    });
    Array.from(navs).forEach(function(nav) {
      nav.classList.remove("active");
    });

    setTimeout(() => {
      document.querySelector(nav).classList.add("active");
      document.querySelector(challenge).classList.add("show");
    }, 600);

    this.setState({
      result: "?"
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="header black">Euler's Challenges</h1>

        <div className="navsbar">
          <ul>
            <li
              className="navs nav1 active"
              onClick={() => this.showContainer(1)}
            >
              Challenge 1
            </li>
            <li className="navs nav2" onClick={() => this.showContainer(2)}>
              Challenge 2
            </li>
            <li className="navs nav3" onClick={() => this.showContainer(3)}>
              Challenge 3
            </li>
            <li className="navs nav4" onClick={() => this.showContainer(4)}>
              Challenge 4
            </li>
            <li className="navs nav5" onClick={() => this.showContainer(5)}>
              Challenge 5
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="container challenge1 show">
            <Challenge1
              yourNumber={this.state.yourNumber}
              result={this.state.result}
              challenge1={this.challenge1}
              handleChange={this.handleChange}
            />
          </div>

          <div className="container challenge2">
            <Challenge2
              yourNumber={this.state.yourNumber}
              result={this.state.result}
              challenge2={this.challenge2}
              handleChange={this.handleChange}
            />
          </div>

          <div className="container challenge3">
            <Challenge3
              yourNumber={this.state.yourNumber}
              result={this.state.result}
              challenge3={this.challenge3}
              handleChange={this.handleChange}
            />
          </div>

          <div className="container challenge4">
            <Challenge4
              result={this.state.result}
              challenge4={this.challenge4}
            />
          </div>
          <div className="container challenge5">
            <Challenge5
              result={this.state.result}
              yourNumber={this.state.yourNumber}
              challenge5={this.challenge5}
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <h4 className="black">
            From <a href="http://www.projecteuler.net">projecteuler.net</a>{" "}
          </h4>
          <h4>
            Solutions on my{" "}
            <a href="https://github.com/zachandblue/Euler-s-Challenges">
              My GitHub
            </a>
          </h4>
        </div>
        <div className="footer">ZachAndBlue 2018</div>
      </div>
    );
  }
}

export default App;

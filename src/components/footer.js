import React from "react";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <p>
          Calculator designed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cbarber1984"
          >
            Craig
          </a>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/59744/calculator"
        >
          Calculator
        </a>{" "}
        icon by{" "}
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          Icons8
        </a>
      </div>
    );
  }
}

export default Footer;

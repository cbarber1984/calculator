import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-line-one ">
          <div className="footer-line-one-text ">
            <p>
              Calculator designed by Craig
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cbarber1984"
              >
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/c_barber1984"
              >
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/cbarber1984/"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
              </a>
            </p>
          </div>
        </div>
        <div className="footer-line-two">
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
      </div>
    );
  }
}

export default Footer;

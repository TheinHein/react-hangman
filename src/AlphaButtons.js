import React, { Component } from "react";
import "./AlphaButtons.css";
class AlphaButtons extends Component {
  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        value={ltr}
        onClick={this.props.handleGuess}
        disabled={this.props.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }
  render() {
    return (
      <div className="AlphaButtons">
        {this.props.nWrong !== this.props.maxWrong ? (
          <p>{this.generateButtons()}</p>
        ) : (
          <p>You loss!!! The correct answer is...{this.props.answer}</p>
        )}
      </div>
    );
  }
}
export default AlphaButtons;

import React, { Component } from 'react';

class NumberGuesser extends Component {
  constructor() {
    super();
    this.state = {
      min: 1,
      max: 100000000,
      guess: this.calculateMidpoint(1, 100000000),
      feedback: '',
      attempts: 1,
    };
  }

  calculateMidpoint(min, max) {
    return Math.floor((min + max) / 2);
  }

  handleFeedback(feedback) {
    const { min, max, attempts } = this.state;
    
    if (feedback === 'higher' && min < max) {
      const newMin = this.state.guess + 1;
      this.setState({
        min: newMin,
        guess: this.calculateMidpoint(newMin, max),
        attempts: attempts + 1,
      });
    } else if (feedback === 'lower' && min < max) {
      const newMax = this.state.guess - 1;
      this.setState({
        max: newMax,
        guess: this.calculateMidpoint(min, newMax),
        attempts: attempts + 1,
      });
    } else if (feedback === 'correct') {
      this.setState({ feedback: 'yippie!', attempts: attempts + 1 });
    }
  }

  render() {
    const { guess, feedback, attempts } = this.state;

    return (
      <div>
        <h1>Number Guesser</h1>
        <p>Is your number {guess}?</p>
        <p>{feedback}</p>
        <p>Attempts: {attempts}</p>
        <button onClick={() => this.handleFeedback('higher')}>Higher</button>
        <button onClick={() => this.handleFeedback('lower')}>Lower</button>
        <button onClick={() => this.handleFeedback('correct')}>Correct</button>
      </div>
    );
  }
}

export default NumberGuesser;

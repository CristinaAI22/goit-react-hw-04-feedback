import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css.feedbackOptions}>
        {options.map(option => (
          <button
            key={option}
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;

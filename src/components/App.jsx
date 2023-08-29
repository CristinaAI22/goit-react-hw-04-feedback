import React, { Component } from 'react';
import Section from '../components/section/Section';
import FeedbackOptions from '../components/feedbackOptions/FeedbackOptions';
import Statistics from '../components/statistics/Statistics';
import Notification from '../components/notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  calculateTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  calculatePositivePercentage = () => {
    const { good } = this.state;
    const total = this.calculateTotal();

    if (total === 0) {
      return 0;
    }

    return (good / total) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calculateTotal();
    return (
      <div className={css.app}>
        <Section title="Please give feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback !" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.calculatePositivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

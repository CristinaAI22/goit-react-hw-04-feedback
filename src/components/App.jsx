import React, { useState } from 'react';
import Section from '../components/section/Section';
import FeedbackOptions from '../components/feedbackOptions/FeedbackOptions';
import Statistics from '../components/statistics/Statistics';
import Notification from '../components/notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const calculateTotal = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const calculatePositivePercentage = () => {
    const { good } = feedback;
    const total = calculateTotal();

    if (total === 0) {
      return 0;
    }

    return (good / total) * 100;
  };

  const total = calculateTotal();

  return (
    <div className={css.app}>
      <Section title="Please give feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={calculatePositivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;

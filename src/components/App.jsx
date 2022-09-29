import React, { useState } from 'react';
import { Wrapper } from './StyeledComponents';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';
import report from '../data/buttons.json';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total
  }


  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(100 * good / countTotalFeedback())
    return positivePercentage
  }

  const onLeaveFeedback = event => {
    if (event === 'good') {
      setGood(prevState => prevState +1)
    } else if (event === 'neutral') {
      setNeutral(prevState => prevState +1)
    } else {
      setBad(prevState => prevState +1)
    }
  }

  return (
    <Wrapper>
      <Section
        title={'Please leave feedback'}
        component={
          <FeedbackOptions
            options={report}
            onLeaveFeedback={onLeaveFeedback}
          />
        }
      />
      <Section
        title={'Statistics'}
        component={
          countTotalFeedback() > 0
          ? <Statistics
              bad={bad}
              good={good}
              total={countTotalFeedback()}
              report={report}
              neutral={neutral}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            : <Notification message={'There is no feedback'}/>
        }
      />
    </Wrapper>
  );
};

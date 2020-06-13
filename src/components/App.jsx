import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from "./Notification";


import '../sass/base.scss';

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  leaveFeedback = (type) => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    })
  }

  countTotalFeedback = () => Object.values(this.state).reduce((acc, value) => acc + value, 0)

  countPositiveFeedbackPercentage = (totalValue, goodValue) => Math.round((goodValue / totalValue) * 100)

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total, good);

    return (
      <>
        <Section title="Please leave feedback" >
          <FeedbackOptions options={this.state} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            : <Notification title="No feedback given" />
          }
        </Section>
      </>
    )
  }
}




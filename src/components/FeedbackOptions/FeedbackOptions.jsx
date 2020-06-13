import React from 'react';
import { number, func, shape } from 'prop-types';

import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbacks = Object.keys(options);

  return (
    <div className={styles.wrapper}>
      {feedbacks.map((feedback) => (
        <button type="button" className={styles.button} key={feedback} onClick={() => onLeaveFeedback(feedback)}>
          {feedback}
        </button>
      ))}
    </div>
  );

}

FeedbackOptions.propTypes = {
  options: shape({
    good: number.isRequired,
    neutral: number.isRequired,
    bad: number.isRequired,
  }).isRequired,
  onLeaveFeedback: func.isRequired,
};


export default FeedbackOptions;


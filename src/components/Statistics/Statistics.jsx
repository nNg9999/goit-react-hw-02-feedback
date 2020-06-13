import React from 'react';
import { number } from 'prop-types';

import styles from './Statistics.module.scss';


function Statistics({ good, neutral, bad, total, positivePercentage }) {

  return (
    <div className={styles.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  )
}

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: number.isRequired,
  neutral: number.isRequired,
  bad: number.isRequired,
  total: number,
  positivePercentage: number,
};

export default Statistics;

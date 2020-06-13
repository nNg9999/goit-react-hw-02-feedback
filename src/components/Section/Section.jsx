import React from 'react';

import PropType from 'prop-types';
import styles from './Section.module.scss'

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>)
};


Section.Proptype = {
  title: PropType.string.isRequired,
  children: PropType.node.isRequired
};

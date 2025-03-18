import React, { FC } from 'react';
import styles from './Programming.module.scss';

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => (
  <div className={styles.Programming}>
    <a href="https://github.com/pynde/">Check out my projects at GitHub</a>
  </div>
);

export default Programming;

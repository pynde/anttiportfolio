import React, { FC } from 'react';
import styles from './Aboutme.module.scss';

interface AboutmeProps {}

const Aboutme: FC<AboutmeProps> = () => (
  <div className={styles.Aboutme}>
    ME
  </div>
);

export default Aboutme;

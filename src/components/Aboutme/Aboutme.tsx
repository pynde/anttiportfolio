import React, { FC } from 'react';
import styles from './Aboutme.module.scss';

interface AboutmeProps {}

const Aboutme: FC<AboutmeProps> = () => (
  <div className={styles.Aboutme}>
    <img src={`${process.env.PUBLIC_URL}/images/cv_kuva_pieni.png`}></img>
  </div>
);

export default Aboutme;

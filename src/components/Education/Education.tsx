import React, { FC } from 'react';
import styles from './Education.module.scss';

interface EducationProps {}

const Education: FC<EducationProps> = () => {
  const imageSrc : string = `${process.env.PUBLIC_URL}/images/masterOfArts.png`;


  return (
  <div className={styles.Education}>
    <img src={imageSrc} alt="" />
  </div>
)};

export default Education;

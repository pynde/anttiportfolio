import React, { FC } from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => (
  <div className={styles.Loading}>
    <div id={styles.moon}></div>
    {/* <div id={styles.text}>Loading</div> */}
  </div>
);

export default Loading;

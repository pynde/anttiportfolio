import React, { FC } from 'react';
import styles from './ProgressTile.module.scss';

interface ProgressTileProps {}

const ProgressTile: FC<ProgressTileProps> = () => (
  <div className={styles.ProgressTile}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <code>Work in progress...</code>
  </div>
);

export default ProgressTile;

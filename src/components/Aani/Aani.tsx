import React, { FC } from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import styles from './Aani.module.scss';

interface AaniProps {}

const Aani: FC<AaniProps> = () => (
  <div className={styles.Aani}>
  <MusicPlayer scSrc='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/3887664' imageSrc={`${process.env.PUBLIC_URL}/images/aurinko.png`} />
  </div>
);

export default Aani;

import React, { FC } from 'react';
import styles from './Nutshell.module.scss';

interface NutshellProps {
  items : string[]
}

/** A simple list for condenced information */
const Nutshell: FC<NutshellProps> = (props : NutshellProps) => (
  <div className={styles.Nutshell}>
    <ul>
      { props.items.map((item, index) => <li key={index}>{item}</li>) }
    </ul>
  </div>
);

export default Nutshell;

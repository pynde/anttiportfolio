import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

interface NavProps {}

const Nav: FC<NavProps> = () => (
  <div className={styles.Nav}>
    <Link to='/'>
    <div className={styles.headerContainer}>
        <img src={`${process.env.PUBLIC_URL}/images/AP.svg`} alt="Header image" />
        <div>Antti Pynn&ouml;nen</div>
    </div>
    </Link>
  </div>
);

export default Nav;

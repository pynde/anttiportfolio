import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import { ScrollContext } from '../../App';
import RadialMenu from '../RadialMenu/RadialMenu';
import { SelectionContext } from '../../App';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const scrollContext = useContext(ScrollContext);
  return (
  <div className={styles.Nav}>
    <Link to='/'>
    <div className={styles.headerContainer}>
        <img id="headerimg" src={`${process.env.PUBLIC_URL}/images/AP.svg`} alt="Header image" />
        <div id="headertext">Antti Pynn&ouml;nen</div>
    </div>
    </Link>
    <RadialMenu active={scrollContext.activeElementAsString} />
  </div>
  )
};

export default Nav;

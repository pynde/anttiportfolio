import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import { ScrollContext } from '../../App';
import RadialMenu from '../RadialMenu/RadialMenu';

interface NavProps {}

const Nav: FC<NavProps> = () => {

    const scrollContext = useContext(ScrollContext);
    const [scrolledState, setScrolledState] = useState<string>('');
    const soundContainerRef = useRef<HTMLDivElement>(null);
    const threeDeeContainerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const educationContainerRef = useRef<HTMLDivElement>(null);
    const programmingContainerRef = useRef<HTMLDivElement>(null);



  return (
  <div className={styles.Nav}>
    <Link to='/'>
    <div className={styles.headerContainer}>
        <img id="headerimg" src={`${process.env.PUBLIC_URL}/images/AP.svg`} alt="Header image" />
        <div id="headertext">Antti Pynn&ouml;nen</div>
    </div>
    </Link>
    <RadialMenu active={scrolledState} />
  </div>
  )
};

export default Nav;

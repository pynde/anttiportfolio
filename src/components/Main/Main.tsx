import React, { createRef, FC, ReactElement, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Outlet, Pathname, useLocation } from 'react-router-dom';
import { ScrollContext } from '../../App';
import Aani from '../Aani/Aani';
import Container from '../Container/Container';
import Education from '../Education/Education';
import ImageSlider from '../ImageSlider/ImageSlider';
import Programming from '../Programming/Programming';
import RadialMenu from '../RadialMenu/RadialMenu';
import Texts from '../Texts/Texts';
import ThreeDee from '../ThreeDee/ThreeDee';
import styles from './Main.module.scss';
import { log } from 'console';
import Loading from '../Loading/Loading';

interface MainProps {}


const SOUND = 'sound';
const THREEDEE = 'threedee';
const IMAGE = 'image';
const EDUCATION = 'education';
const PROGRAMMING = 'programming';
const ABOUTME = 'aboutme';

/**
 * The main component of the application.
 *
 * This component contains the main content of the application. It is responsible for rendering
 * the different sections of the application. It also manages the scroll position of the user
 * and updates the `scrolledState` based on the user's position.
 */
const Main: FC<MainProps> = () => {
  
  const firstRenderRef = useRef<boolean>(true);
  const { pathname } = useLocation();
  const scrollContext = useContext(ScrollContext);
  const [scrolledState, setScrolledState] = useState<string>('');
  const soundContainerRef = useRef<HTMLDivElement>(null);
  const threeDeeContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const educationContainerRef = useRef<HTMLDivElement>(null);
  const programmingContainerRef = useRef<HTMLDivElement>(null);
  const radialMenuRef = useRef<HTMLDivElement>(null);


  // Show components based on scrolled user position 
  useEffect(() => {
    checkScrolledState()
  }, [scrollContext.scrolledY]);

  /**
   * Checks the scrolled state and updates the `scrolledState` based on the user's scroll position.
   * It iterates through the container references and checks their position relative to the viewport.
   * If a container is in the viewport, it updates the `scrolledState` with the container's ID.
   */
  const checkScrolledState = () => {
    const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef, programmingContainerRef];
    refs.forEach((ref) => {
      if(!!ref.current) {
        if(ref.current.getBoundingClientRect().top <= 200 && ref.current.getBoundingClientRect().top >= -200) {
          setScrolledState(ref.current.id);
          console.log(ref.current.id);
        }
      }
    })
  }
  
  /**
   * Scrolls the view to the specified element.
   *
   * @param elementString - The ID of the element to scroll into view.
   *
   * This function checks if all the container references are defined. If they are,
   * it iterates through the references and scrolls the view to the element whose
   * ID matches the provided `elementString`.
   */
  const scrollToView = (elementString : string) => {  
      if(!!(soundContainerRef.current && threeDeeContainerRef.current && imageContainerRef.current && educationContainerRef.current)) {
        const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef, programmingContainerRef];
        refs.forEach(e => {
          if(e.current?.id == elementString ){
              e.current.scrollIntoView({ block: 'start' });
          }
        })
      }
  }

  return (  
  <div className={styles.Main}>
    { pathname === '/' ? <>
    <RadialMenu active={scrolledState} scrollToView={e => scrollToView(e)} ref={radialMenuRef} />
    <Container ref={soundContainerRef} id='sound'>
      <Texts id='sound'/>
      { scrolledState === 'sound' ? <Aani/> : <Loading/> }
    </Container>
    <Container ref={threeDeeContainerRef} id='threedee'>
      <Texts id='3d'/>
      { scrolledState === 'threedee' ? <ThreeDee/> : <Loading/> }
    </Container>
    <Container ref={imageContainerRef} id='image'>
      <Texts id='image' />
      { scrolledState === 'image' ? <ImageSlider/> : <Loading/> }

    </Container>
    <Container ref={educationContainerRef} id='education'>
      <Texts id='education'/>
      { scrolledState === 'education' ? <Education /> : <Loading/> }
    </Container>
    <Container ref={programmingContainerRef} id='programming'>
      <Texts id='programming'/>
      { scrolledState === 'programming' ? <Programming/> : <Loading/> }
    </Container>
      
    {/*
    <Container title='About me' id='aboutme'>
      <ProgressTile/>
    </Container> */}
    </>
    :
    <Outlet/>
    }
  </div>
  )
};

export default Main;

import React, { createRef, FC, ReactElement, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Outlet, Pathname, useLocation } from 'react-router-dom';
import { ScrollContext, SelectionContext } from '../../App';
import Aani from '../Aani/Aani';
import Container from '../Container/Container';
import Education from '../Education/Education';
import ImageSlider from '../ImageSlider/ImageSlider';
import Programming from '../Programming/Programming';
import RadialMenu from '../RadialMenu/RadialMenu';
import Texts from '../Texts/Texts';
import ThreeDee from '../ThreeDee/ThreeDee';
import styles from './Main.module.scss';
import Loading from '../Loading/Loading';
import Aboutme from '../Aboutme/Aboutme';

interface MainProps {}


export const SOUND = 'sound';
export const THREEDEE = 'threedee';
export const IMAGE = 'image';
export const EDUCATION = 'education';
export const PROGRAMMING = 'programming';
export const ABOUTME = 'aboutme';

/**
 * The main component of the application.
 *
 * This component contains the main content of the application. It is responsible for rendering
 * the different sections of the application. It also manages the scroll position of the user
 * and updates the `scrolledState` based on the user's position.
 */
const Main: FC<MainProps> = () => {
  
  const { pathname } = useLocation();
  const scrollContext = useContext(ScrollContext);
  const [scrolledState, setScrolledState] = useState<string>('');
  const soundContainerRef = useRef<HTMLDivElement>(null);
  const threeDeeContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const educationContainerRef = useRef<HTMLDivElement>(null);
  const programmingContainerRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const selectionContext = useContext(SelectionContext);

  useEffect(() => {  
    if(!!(soundContainerRef.current && threeDeeContainerRef.current && imageContainerRef.current && educationContainerRef.current && aboutMeRef.current)) {
      const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef, programmingContainerRef, aboutMeRef];
      refs.forEach(e => {
        if(e.current?.id == selectionContext.selectedAsString ){
            e.current.scrollIntoView({ block: 'start' });
        }
      })
    }
  }, [selectionContext.selectedAsString]);

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
      const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef, programmingContainerRef, aboutMeRef];
      refs.forEach((ref) => {
        if(!!ref.current) {
          if(ref.current.getBoundingClientRect().top <= 200 && ref.current.getBoundingClientRect().top >= -200) {
            scrollContext.setActiveElementAsString(ref.current.id);
          }
        }
      })
    }

  return (  
  <div className={styles.Main}>
    <>
      <Container ref={aboutMeRef} id={ABOUTME}>
        <Texts id={ABOUTME}/>
        { scrollContext.activeElementAsString === ABOUTME ? <Aboutme/> : <Loading/> }
      </Container>
      <Container ref={soundContainerRef} id={SOUND}>
        <Texts id={SOUND}/>
        { scrollContext.activeElementAsString === SOUND ? <Aani/> : <Loading/> }
      </Container>
      <Container ref={threeDeeContainerRef} id={THREEDEE}>
        <Texts id={THREEDEE}/>
        { scrollContext.activeElementAsString === THREEDEE ? <ThreeDee/> : <Loading/> }
      </Container>
      <Container ref={imageContainerRef} id={IMAGE}>
        <Texts id={IMAGE} />
        { scrollContext.activeElementAsString === IMAGE ? <ImageSlider/> : <Loading/> }
      </Container>
      <Container ref={educationContainerRef} id={EDUCATION}>
        <Texts id={EDUCATION}/>
        { scrollContext.activeElementAsString === EDUCATION ? <Education /> : <Loading/> }
      </Container>
      <Container ref={programmingContainerRef} id={PROGRAMMING}>
        <Texts id={PROGRAMMING}/>
        { scrollContext.activeElementAsString === PROGRAMMING ? <Programming/> : <Loading/> }
      </Container>
    </>
    :
    <Outlet/>
  </div>
  )
};

export default Main;

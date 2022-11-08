import React, { createRef, FC, ReactElement, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Outlet, Pathname, useLocation } from 'react-router-dom';
import { ScrollContext } from '../../App';
import Aani from '../Aani/Aani';
import Container from '../Container/Container';
import Education from '../Education/Education';
import ImageSlider from '../ImageSlider/ImageSlider';
import Nutshell from '../Nutshell/Nutshell';
import Programming from '../Programming/Programming';
import ProgressTile from '../ProgressTile/ProgressTile';
import RadialMenu from '../RadialMenu/RadialMenu';
import Texts from '../Texts/Texts';
import ThreeDee from '../ThreeDee/ThreeDee';
import styles from './Main.module.scss';

interface MainProps {}

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
  const prevScrollRef = useRef<number>(0);


  // Show components based on scrolled user position 
  useEffect(() => {
  checkScrolledState()
  }, [scrollContext.scrolledY]);

  const checkScrolledState = () => {
    const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef, programmingContainerRef];
    refs.forEach((ref) => {
      if(!!ref.current) {
      if(ref.current.getBoundingClientRect().top < ref.current.offsetHeight / 2 && ref.current.getBoundingClientRect().bottom < ref.current.offsetHeight * 1.5 ) {
        setScrolledState(ref.current.id);
      }
    }
    })
    
  }
  
  const scrollToView = (elementString : string) => {  
      if(!!(soundContainerRef.current && threeDeeContainerRef.current && imageContainerRef.current && educationContainerRef.current)) {
        const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef, programmingContainerRef];
        refs.forEach(e => {
          if(e.current?.id == elementString ){
              e.current.scrollIntoView();
          }
        })
      }
    
  }


  return (  
  <div className={styles.Main}>
    { pathname === '/' ? <>
    <RadialMenu scrollToView={e => scrollToView(e)} ref={radialMenuRef} />
    <Container ref={soundContainerRef} title='Sound' id='sound'>
      { scrolledState === 'sound' ?
      <>
      <Texts id='sound'/>
      <Aani/>
      {/* <Nutshell items={['Mikki', 'Minni', 'Hessu']}/> */}
      </>
      : <div>I'm saving your CPU. Please scroll.</div>
      }
    </Container>
    <Container ref={threeDeeContainerRef} title='3D' id='3d'>
      { scrolledState === '3d' ?
      <>
      <Texts id='3d'/>
      <ThreeDee/>
      </>
      : <div>I'm saving your CPU. Please scroll.</div>
      }
    </Container>
     
    <Container ref={educationContainerRef} title='Education' id='education'>
      {
      scrolledState === 'education' ?
      <>
      <Texts id='education'/>
      <Education />
      </>
      : <div>I'm saving your CPU. Please scroll.</div>
      }
    </Container>

    <Container ref={imageContainerRef} title='Image' id='image'>
      {
      scrolledState === 'image' ?
      <>
      <Texts id='image' />
      <ImageSlider/>
      </>
      : <div>I'm saving your CPU. Please scroll.</div>
      }
    </Container>
    
    
    <Container ref={programmingContainerRef} title='Programming' id='programming'>
      {
      scrolledState === 'programming' ?
      <>
      <Texts id='programming'/>
      <Programming/>
      </>
      : <div>I'm saving your CPU. Please scroll.</div>
      }
    </Container>
      
    {/*
    <Container title='About me' id='about-me'>
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

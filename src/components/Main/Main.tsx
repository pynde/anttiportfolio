import React, { createRef, FC, ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { Outlet, Pathname, useLocation } from 'react-router-dom';
import { ScrollContext } from '../../App';
import Aani from '../Aani/Aani';
import Container from '../Container/Container';
import Education from '../Education/Education';
import ImageSlider from '../ImageSlider/ImageSlider';
import Nutshell from '../Nutshell/Nutshell';
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
  const radialMenuRef = useRef<HTMLDivElement>(null);
  const prevScrollRef = useRef<number>(0);


  // Show components based on scrolled user position 
  useEffect(() => {
    console.log(scrollContext.scrolledY + ' pixels scrolled');

      checkScrolledState(radialMenuRef.current);
      checkScrolledState(soundContainerRef.current);
      checkScrolledState(threeDeeContainerRef.current);
      checkScrolledState(imageContainerRef.current);
      checkScrolledState(educationContainerRef.current);
    
  }, [scrollContext.scrolledY]);

  const checkScrolledState = (refObject : HTMLDivElement | null) => {
    if(!!refObject) {
      if(refObject.getBoundingClientRect().top < refObject.offsetHeight / 2 && refObject.getBoundingClientRect().bottom < refObject.offsetHeight * 1.5 ) {
        setScrolledState(refObject.id);
      }
    }
  }
  
  const scrollToView = (elementString : string) => {  
      if(!!(soundContainerRef.current && threeDeeContainerRef.current && imageContainerRef.current && educationContainerRef.current)) {
        const refs = [soundContainerRef, threeDeeContainerRef, imageContainerRef, educationContainerRef];
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
      <Nutshell items={['Mikki', 'Minni', 'Hessu']}/>
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
    
    {/*
    <Container title='Programming' id='programming'>
      <ProgressTile/>
    </Container>
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

import React, { FC } from 'react';
import { Outlet, Pathname, useLocation } from 'react-router-dom';
import Aani from '../Aani/Aani';
import Container from '../Container/Container';
import Nutshell from '../Nutshell/Nutshell';
import RadialMenu from '../RadialMenu/RadialMenu';
import Texts from '../Texts/Texts';
import ThreeDee from '../ThreeDee/ThreeDee';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => {
  const { pathname } = useLocation();
  const asd : string = 'asd';

  return (  
  <div className={styles.Main}>
    { pathname === '/' ? <>
    <RadialMenu/>
    <Container title='Sound' id='sound'>
      <Texts id='sound'/>
      <Aani/>
    </Container>
    <Container title='3D' id='3d'>
      <Texts id='3d'/>
      <ThreeDee/>
    </Container>
    </>
    :
    <Outlet/>
    }
  </div>
  )
};

export default Main;

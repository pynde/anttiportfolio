import React, { FC, ReactNode, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Container.module.scss';

interface ContainerProps {
  title : string;
  id : string;
  children?: ReactNode;
}

const Container : FC<ContainerProps & React.RefAttributes<HTMLDivElement>> = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {

  return(
    <div className={`${styles.Container}`} id={props.id} ref={ref}>
      <div id={styles.decorationCont}>
        <div className={styles.decoration}></div>
        <h1>{ props.title }</h1>
        <div className={styles.decoration}></div>
      </div>
      <div className={styles.gridCont}>
          { props.children }
      </div>
  </div>
  )
});

export default Container;

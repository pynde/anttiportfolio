import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../App';
import styles from './RadialMenu.module.scss';

interface RadialMenuProps {

}

const RadialMenu: FC<RadialMenuProps> = () => {

  const radialMenuDiv = useRef<HTMLDivElement>(null);
  const scrolledWindow = useContext(ScrollContext);
  const [menuSizePosition, setMenuSizePosition] = useState<string>();
  const placeMenu = () => {
    
  }
  useEffect(() => {
    console.log(scrolledWindow.scrolledY);
    console.log(radialMenuDiv.current?.offsetHeight);
    
    if(!!radialMenuDiv.current?.offsetHeight) {
      if (scrolledWindow.scrolledY >= radialMenuDiv.current.offsetHeight / 3) {
        setMenuSizePosition(styles.scrolled);
      }
      else if (scrolledWindow.scrolledY < radialMenuDiv.current.offsetHeight / 3) {
        setMenuSizePosition(styles.notScrolled);
      }
    }
  });

  const scrollToView = () => {
    
  };

  return (  
    <div className={`${styles.RadialMenu} ${menuSizePosition}`} onScroll={placeMenu} ref={radialMenuDiv}>
      <div id={styles.menuContainer}>
        <ul>
          <li onClick={scrollToView}><div>Sound</div><img src={`${process.env.PUBLIC_URL}/images/aani.svg`} alt="Sound icon" /></li>
          <li><div>3D</div><img src={`${process.env.PUBLIC_URL}/images/3D.svg`} alt="3D icon" /></li>
          <li><div>Education</div><img src={`${process.env.PUBLIC_URL}/images/koulutus.svg`} alt="Education icon" /></li>
          <li><div>Image</div><img src={`${process.env.PUBLIC_URL}/images/kuva.svg`} alt="Image icon" /></li>
          <li><div>Programming</div><img src={`${process.env.PUBLIC_URL}/images/ohjelmointi.svg`} alt="Programming icon" /></li>
          <li><div>Communications</div><img src={`${process.env.PUBLIC_URL}/images/viestinta.svg`} alt="Communications icon" /></li>
        </ul>
      </div>
    </div>
 )};

export default RadialMenu;

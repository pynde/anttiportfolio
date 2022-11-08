import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../../App';
import styles from './RadialMenu.module.scss';

interface RadialMenuProps {
  scrollToView : (element : string) => void
}

const RadialMenu: FC<RadialMenuProps & React.RefAttributes<HTMLDivElement>> = React.forwardRef<HTMLDivElement, RadialMenuProps>((props, _ref) => {

  const radialMenuDiv = useRef<HTMLDivElement>(null);
  const scrolledWindow = useContext(ScrollContext);
  const [menuSizePosition, setMenuSizePosition] = useState<string>();
  const [textVisible, setTextVisible] = useState<string>('visible');
  const placeMenu = () => {
    
  }
  useEffect(() => {
    
    if(!!radialMenuDiv.current?.offsetHeight) {
      if (scrolledWindow.scrolledY >= 1) {
        setMenuSizePosition(styles.scrolled);
        setTextVisible('none');
      }
      else if (scrolledWindow.scrolledY < 1) {
        setMenuSizePosition('');
        setTextVisible('block');
      }
    }
  }, [scrolledWindow.scrolledY]);



  return (  
    <div ref={_ref} className={styles.radialMenuCont} id={'radialMenu'}>
      <div className={`${styles.RadialMenu} ${menuSizePosition}`} onScroll={placeMenu} ref={radialMenuDiv}>
        <h2 style={{ display: textVisible}}>Made with React, Sass, Affinity Designer, Blender and three.js. All components made from scratch.</h2>
        <div id={styles.menuContainer}>
          <ul>
            <li onClick={() => props.scrollToView('sound')}><div>Sound</div><img src={`${process.env.PUBLIC_URL}/images/aani.svg`} alt="Sound icon" /></li>
            <li onClick={() => props.scrollToView('3d')}><div>3D</div><img src={`${process.env.PUBLIC_URL}/images/3D.svg`} alt="3D icon" /></li>
            <li onClick={() => props.scrollToView('image')}><div>Image</div><img src={`${process.env.PUBLIC_URL}/images/kuva.svg`} alt="Image icon" /></li>
            <li onClick={() => props.scrollToView('education')}><div>Education</div><img src={`${process.env.PUBLIC_URL}/images/koulutus.svg`} alt="Education icon" /></li>
            <li onClick={() => props.scrollToView('programming')}><div>Programming</div><img src={`${process.env.PUBLIC_URL}/images/ohjelmointi.svg`} alt="Programming icon" /></li>
            <li onClick={() => props.scrollToView('about-me')} style={{opacity: 0.5}}><div>About me</div><img src={`${process.env.PUBLIC_URL}/images/viestinta.svg`} alt="Communications icon" /></li>
          </ul>
        </div>
      </div>
    </div>
 )});

export default RadialMenu;

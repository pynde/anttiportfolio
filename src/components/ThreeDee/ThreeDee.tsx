import React, { FC, ReactElement, Suspense, useEffect, useRef, useState} from 'react';
import styles from './ThreeDee.module.scss';
import { Canvas, useFrame} from '@react-three/fiber';

import CustomMesh from '../CustomMesh/CustomMesh';
import KuutioMesh from '../KuutioMesh/KuutioMesh';
import { OrbitControls } from '@react-three/drei';
import { PointLight } from 'three';
import { Link, Outlet } from 'react-router-dom';
import MouseSVG from '../MouseSVG/MouseSVG';

interface ThreeDeeProps {

}



const ThreeDee: FC<ThreeDeeProps> = (props) => {

  const [selectedItem, setSelectedItem] = useState<number>(0);
  const threeDeeItems : ReactElement[] = [<KuutioMesh/>, <CustomMesh/>];
  const threeDeeHints : string[] = ['Spin and zoom me!', 'Ignite me!', 'Watch me loop the choo choo!']


  const selectThreeDee = () => {
    if(threeDeeItems.length - 1 > selectedItem) {
      setSelectedItem(s => s+1)
    }
    else {
      setSelectedItem(0);
    }
    
  }
  
  useEffect(() => {

   
  }, [])

  return (
  <div className={styles.ThreeDee}>
      <div id={styles.hints}><i>{ threeDeeHints[selectedItem] }</i><MouseSVG/></div>
      <Suspense>
        <Canvas performance={{ max: 0.5 }}>
          { threeDeeItems[selectedItem] }
        </Canvas>
      </Suspense>
      <button  onClick={selectThreeDee} type={'button'}>See another 3D object</button>
  </div>
  )
};

export default ThreeDee;

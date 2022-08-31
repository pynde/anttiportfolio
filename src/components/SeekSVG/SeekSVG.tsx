import { clear } from 'console';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './SeekSVG.module.scss';

interface SeekSVGProps {
  id: string;
  setSeekedTime : (timeInMs : number) => void
}

const SeekSVG: FC<SeekSVGProps> = (props: SeekSVGProps) => {
  const [time, setTime] = useState<number>(0);
  const timeRef = useRef<NodeJS.Timer>();
  

  useEffect(() => {
    return () => clear();
  }, []);

  const seek = () => {
        if (timeRef.current) return;
          timeRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 200)
        }, 200)      
  }

  const clear = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = undefined;
      props.setSeekedTime(time);
      setTime(0);
    }
  }

  return ( 
  <div className={styles.SeekSVG}id={styles[props.id]} onMouseDown={seek} onMouseUp={clear}>
    <svg width="100%" height="100%" viewBox="0 0 229 191" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" >
        <g transform="matrix(1,0,0,1,-1085.65,-1125.05)">
            <g transform="matrix(1,0,0,1,33,0)">
                <g id="seekGroup">
                    <g id="triangle_1" transform="matrix(6.06261e-17,0.990099,-0.626343,3.83524e-17,1888.19,1067.38)">
                        <path d="M150.547,1140.91C151.425,1139.15 153.137,1138.05 155,1138.05C156.863,1138.05 158.575,1139.15 159.453,1140.91C175.556,1173.11 230.797,1283.59 249.642,1321.28C250.981,1323.96 250.907,1327.19 249.447,1329.8C247.988,1332.41 245.356,1334 242.516,1334C205.78,1334 104.22,1334 67.484,1334C64.644,1334 62.012,1332.41 60.553,1329.8C59.093,1327.19 59.019,1323.96 60.358,1321.28C79.203,1283.59 134.444,1173.11 150.547,1140.91Z"/>
                    </g>
                    <g id="triangle_2" transform="matrix(6.06261e-17,0.990099,-0.626343,3.83524e-17,1994.24,1066.23)">
                        <path d="M150.547,1140.91C151.425,1139.15 153.137,1138.05 155,1138.05C156.863,1138.05 158.575,1139.15 159.453,1140.91C175.556,1173.11 230.797,1283.59 249.642,1321.28C250.981,1323.96 250.907,1327.19 249.447,1329.8C247.988,1332.41 245.356,1334 242.516,1334C205.78,1334 104.22,1334 67.484,1334C64.644,1334 62.012,1332.41 60.553,1329.8C59.093,1327.19 59.019,1323.96 60.358,1321.28C79.203,1283.59 134.444,1173.11 150.547,1140.91Z"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  </div>
  )
};

export default SeekSVG;

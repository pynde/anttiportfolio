import React, { FC } from 'react';
import styles from './PlaySVG.module.scss';

interface PlaySVGProps {
  className: string
}

const PlaySVG: FC<PlaySVGProps> = (props : PlaySVGProps) => (
  <div className= {`${styles.PlaySVG} ${styles[props.className]}`}>

<svg width="100%" height="100%" viewBox="0 0 187 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
    <g transform="matrix(1,0,0,1,-581.667,-1121.27)">
        <g transform="matrix(1,0,0,1,-2675,1022)">
            <g  transform="matrix(6.06261e-17,0.990099,-0.925743,5.66854e-17,4491.61,45.8085)">
                <path d="M155,1132L256,1334L54,1334L155,1132Z">
                  
                </path>
            </g>
        </g>
    </g>
</svg>

  </div>
);

export default PlaySVG;

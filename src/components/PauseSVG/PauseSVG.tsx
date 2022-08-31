import React, { FC } from 'react';
import styles from './PauseSVG.module.scss';

interface PauseSVGProps {
  className: string
}

const PauseSVG: FC<PauseSVGProps> = (props: PauseSVGProps) => (
  <div className= {`${styles.PauseSVG} ${styles[props.className]}`}>
    <svg width="100%" height="100%" viewBox="0 0 179 187" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
    <g transform="matrix(1,0,0,1,-581.621,-1128.5)">
        <g transform="matrix(1,0,0,1,-2675,1022)">
            <g transform="matrix(1.17485,0,-1.09944e-32,0.967276,-600.519,6.54487)">
                <g transform="matrix(0.718121,0,0,1,2889.19,-1022)">
                    <path d="M623,1128.72C623,1126.85 621.264,1125.34 619.126,1125.34L552.374,1125.34C550.236,1125.34 548.5,1126.85 548.5,1128.72L548.5,1315.28C548.5,1317.15 550.236,1318.66 552.374,1318.66L619.126,1318.66C621.264,1318.66 623,1317.15 623,1315.28L623,1128.72Z"/>
                </g>
                <g transform="matrix(0.718121,0,0,1,2987.53,-1022)">
                    <path d="M623,1128.72C623,1126.85 621.264,1125.34 619.126,1125.34L552.374,1125.34C550.236,1125.34 548.5,1126.85 548.5,1128.72L548.5,1315.28C548.5,1317.15 550.236,1318.66 552.374,1318.66L619.126,1318.66C621.264,1318.66 623,1317.15 623,1315.28L623,1128.72Z"/>
                </g>
            </g>
        </g>
    </g>
</svg>

  </div>
);

export default PauseSVG;

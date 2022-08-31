import React, { FC } from 'react';
import styles from './MouseSVG.module.scss';


interface MouseSvgProps {}

const MouseSvg: FC<MouseSvgProps> = () => (
  <div className={styles.MouseSVG}>
  <svg viewBox="0 0 200 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
  <g transform="matrix(1,0,0,1,-555.75,-1620.19)">
        <g transform="matrix(1,0,0,1,-2714,1521.04)">
            <g id="mouseGroup" style={{fill: 'silver'}}>
                <g id={styles.handRest} transform="matrix(1,0,0,1,2714,-1521.04)">
                    <path d="M734.25,1721.04L555.75,1721.04L555.75,1784.04C555.75,1823.3 587.632,1855.18 626.901,1855.18L662.452,1855.18C702.079,1855.18 734.25,1823.01 734.25,1783.39L734.25,1721.04Z"/>
                </g>
                <g id={styles.leftClick} transform="matrix(1,0,0,1,2714,-1521.04)">
                    <path d="M637.48,1639.61L637.48,1620.18L600.169,1620.18C575.654,1620.18 555.75,1640.09 555.75,1664.61L555.75,1711.72L637.48,1711.72L637.48,1696.76C628.648,1693.65 622.311,1685.23 622.311,1675.35L622.311,1661.02C622.311,1651.14 628.648,1642.72 637.48,1639.61Z"/>
                </g>
                <g id={styles.rightClick} transform="matrix(1,0,0,1,2714,-1521.04)">
                    <path d="M652.52,1639.61C661.352,1642.72 667.689,1651.14 667.689,1661.02L667.689,1675.35C667.689,1685.23 661.352,1693.65 652.52,1696.76L652.52,1711.72L734.25,1711.72L734.25,1664.61C734.25,1640.09 714.346,1620.18 689.831,1620.18L652.52,1620.18L652.52,1639.61Z"/>
                </g>
                <g id={styles.scroll} transform="matrix(1.40355,0,0,1.31695,2453.71,-2053.48)">
                    <path d="M657,1664.79C657,1657.73 651.623,1652 645,1652C638.377,1652 633,1657.73 633,1664.79L633,1677.21C633,1684.27 638.377,1690 645,1690C651.623,1690 657,1684.27 657,1677.21L657,1664.79Z"/>
                </g>
            </g>
        </g>
    </g>

</svg>

  </div>
);

export default MouseSvg;

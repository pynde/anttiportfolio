import React, { FC, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ScrollContext, SelectionContext } from "../../App";
import styles from "./RadialMenu.module.scss";
import clsx from "clsx";
import { Bars3Icon } from '@heroicons/react/24/outline' 

interface RadialMenuProps {
  active: string;
}

const RadialMenu: FC<RadialMenuProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, RadialMenuProps>((props, _ref) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(true);
    const thisRef = useRef<HTMLInputElement>(null);
    const selectionContext = useContext(SelectionContext);
    useImperativeHandle(_ref, () => thisRef.current as HTMLInputElement);

    /**
     * Scrolls to the specified element and closes the radial menu.
     *
     * @param {string} element - The identifier of the element to scroll to.
     */
    const selectAndClose = (element: string) => {
      setMenuVisible(false);
      setTimeout(() => {
        selectionContext.setSelectedAsString(element);
      }, 100);
    };

    const setSelected = (element: string) => {
      selectionContext.setSelectedAsString(element); 
    }

    return (
      <div ref={_ref} className={styles.RadialMenu}>
          <div className={styles.ListContainerDesktop}>
            <ul>
              <li
                onClick={() => setSelected("sound")}
                className={clsx({ [styles.active]: props.active === "sound" })}
              >
                <div>Sound</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/aani.svg`}
                  alt="Sound icon"
                />
              </li>
              <li onClick={() => setSelected("threedee")}>
                <div>3D</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/3D.svg`}
                  alt="3D icon"
                />
              </li>
              <li onClick={() => setSelected("image")}>
                <div>Image</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/kuva.svg`}
                  alt="Image icon"
                />
              </li>
              <li onClick={() => setSelected("education")}>
                <div>Education</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/koulutus.svg`}
                  alt="Education icon"
                />
              </li>
              <li onClick={() => setSelected("programming")}>
                <div>Programming</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ohjelmointi.svg`}
                  alt="Programming icon"
                />
              </li>
              <li
                onClick={() => setSelected("aboutme")}
                style={{ opacity: 0.5 }}
              >
                <div>About me</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/viestinta.svg`}
                  alt="Communications icon"
                />
              </li>
            </ul>
          </div>
          <div className={styles.ListContainerMobile}>
            <Bars3Icon className={styles.Hamburger} onClick={() => setMenuVisible(true)}/>
            <ul className={clsx({[styles.FullScreenMenu]: menuVisible})}>
                <li
                onClick={() => selectAndClose("sound")}
                className={clsx({ [styles.active]: props.active === "sound" })}
                >
                <div>Sound</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/aani.svg`}
                  alt="Sound icon"
                />
                </li>
                <li onClick={() => selectAndClose("threedee")}>
                <div>3D</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/3D.svg`}
                  alt="3D icon"
                />
                </li>
                <li onClick={() => selectAndClose("image")}>
                <div>Image</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/kuva.svg`}
                  alt="Image icon"
                />
                </li>
                <li onClick={() => selectAndClose("education")}>
                <div>Education</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/koulutus.svg`}
                  alt="Education icon"
                />
                </li>
                <li onClick={() => selectAndClose("programming")}>
                <div>Programming</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ohjelmointi.svg`}
                  alt="Programming icon"
                />
                </li>
                <li
                onClick={() => selectAndClose("about-me")}
                style={{ opacity: 0.5 }}
                >
                <div>About me</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/viestinta.svg`}
                  alt="Communications icon"
                />
                </li>
            </ul>
          </div>
      </div>
    );
  });

export default RadialMenu;

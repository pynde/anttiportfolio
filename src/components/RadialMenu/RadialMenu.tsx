import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../../App";
import styles from "./RadialMenu.module.scss";
import clsx from "clsx";
import { Bars3Icon } from '@heroicons/react/24/outline' 

interface RadialMenuProps {
  scrollToView: (element: string) => void;
  active: string;
}

const RadialMenu: FC<RadialMenuProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, RadialMenuProps>((props, _ref) => {
    const radialMenuDiv = useRef<HTMLDivElement>(null);
    const scrolledWindow = useContext(ScrollContext);
    const [textVisible, setTextVisible] = useState<string>("visible");
    const [menuVisible, setMenuVisible] = useState<boolean>(true);

    useEffect(() => {
      if (!!radialMenuDiv.current?.offsetHeight) {
        if (scrolledWindow.scrolledY >= 5) {
          setTextVisible("none");
        } else if (scrolledWindow.scrolledY < 1) {
          setTextVisible("block");
        }
      }
    }, [scrolledWindow.scrolledY]);

    /**
     * Scrolls to the specified element and closes the radial menu.
     *
     * @param {string} element - The identifier of the element to scroll to.
     */
    const scrollAndClose = (element: string) => {
      props.scrollToView(element);
      setMenuVisible(false);
    };

    return (
      <div ref={_ref} className={styles.RadialMenuCont}>
        <div className={`${styles.RadialMenu}`} ref={radialMenuDiv}>
          <h2>
            Made with React, Sass, Affinity Designer, Blender and three.js.
          </h2>
          <div className={styles.ListContainerDesktop}>
            <ul>
              <li
                onClick={() => props.scrollToView("sound")}
                className={clsx({ [styles.active]: props.active === "sound" })}
              >
                <div>Sound</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/aani.svg`}
                  alt="Sound icon"
                />
              </li>
              <li onClick={() => props.scrollToView("threedee")}>
                <div>3D</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/3D.svg`}
                  alt="3D icon"
                />
              </li>
              <li onClick={() => props.scrollToView("image")}>
                <div>Image</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/kuva.svg`}
                  alt="Image icon"
                />
              </li>
              <li onClick={() => props.scrollToView("education")}>
                <div>Education</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/koulutus.svg`}
                  alt="Education icon"
                />
              </li>
              <li onClick={() => props.scrollToView("programming")}>
                <div>Programming</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ohjelmointi.svg`}
                  alt="Programming icon"
                />
              </li>
              <li
                onClick={() => props.scrollToView("about-me")}
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
            <ul className={clsx({[styles.active]: menuVisible})}>
                <li
                onClick={() => scrollAndClose("sound")}
                className={clsx({ [styles.active]: props.active === "sound" })}
                >
                <div>Sound</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/aani.svg`}
                  alt="Sound icon"
                />
                </li>
                <li onClick={() => scrollAndClose("threedee")}>
                <div>3D</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/3D.svg`}
                  alt="3D icon"
                />
                </li>
                <li onClick={() => scrollAndClose("image")}>
                <div>Image</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/kuva.svg`}
                  alt="Image icon"
                />
                </li>
                <li onClick={() => scrollAndClose("education")}>
                <div>Education</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/koulutus.svg`}
                  alt="Education icon"
                />
                </li>
                <li onClick={() => scrollAndClose("programming")}>
                <div>Programming</div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ohjelmointi.svg`}
                  alt="Programming icon"
                />
                </li>
                <li
                onClick={() => scrollAndClose("about-me")}
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
      </div>
    );
  });

export default RadialMenu;

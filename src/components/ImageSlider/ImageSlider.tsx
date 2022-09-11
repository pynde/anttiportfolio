import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.scss';



interface ImageSliderProps {}

const ImageSlider: FC<ImageSliderProps> = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [fullImage, setFullImage] = useState<string>(styles.ImageSlider);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [splashMask, setSplashMask] = useState<string>('url(' + `${process.env.PUBLIC_URL}/images/splashMask2.png` + ')');
  const imageHint = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLImageElement>(null);
  const imgUrlArray : string[] = [
    "https://iili.io/6eIg8Q.jpg",
    "https://iili.io/6UUQpt.jpg",
    "https://iili.io/6UUpCG.jpg",
    "https://iili.io/6UU64R.jpg",
    "https://iili.io/6UgJ3l.jpg",
  ]

  useEffect(() => {
    console.log(imageIndex);
    
  })

  const setImage = (index : number) => {
      if(!!galleryRef.current) {
        galleryRef.current.style.filter = 'blur(20px)';
      }
      switch(imageIndex + index) {
        case -1 : setImageIndex(imgUrlArray.length - 1); break;
        case imgUrlArray.length : setImageIndex(0); break;
        default : setImageIndex(prevIndex => prevIndex + index); 
        }
  }

const setImageSize = () => {
  console.log('clicked');
  
  if(fullImage !== styles.fullImage) {
    setFullImage(styles.fullImage);
    setSplashMask('')
  }
  else {
    setFullImage('');
    setSplashMask('url(' + `${process.env.PUBLIC_URL}/images/splashMask2.png` + ')');
  }
}

const checkLoadState = () => {

}

const unBlur = () => {
  console.log('loading');
  if(!!galleryRef.current) {
    galleryRef.current.style.filter = 'blur(0)';
  }
}


  return (
  <div className={`${styles.ImageSlider}  ${fullImage}`}>
    <div id={styles.leftArrowCont} className={styles.ArrowCont} onClick={() => setImage(-1)}>
      <img id={styles.leftArrow} src={`${process.env.PUBLIC_URL}/images/nuoli.svg`} alt="Previous"/>
    </div>
    <div id={styles.mask} style={{WebkitMask: splashMask, maskImage: splashMask, maskComposite: 'add'}} onClick={setImageSize}>
      <img ref={galleryRef} className={styles.Gallery} src={imgUrlArray[imageIndex]} alt="Gallery" onLoad={unBlur}/>
      </div>
    <div id={styles.rightArrowCont} className={styles.ArrowCont} onClick={() => setImage(1)}>
      <img  id={styles.rightArrow}  src={`${process.env.PUBLIC_URL}/images/nuoli.svg`} alt="Next"/>
    </div>
  </div>
  )
};

export default ImageSlider;

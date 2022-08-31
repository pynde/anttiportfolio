import e from 'express';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Loading from '../Loading/Loading';
import PauseSVG from '../PauseSVG/PauseSVG';
import PlaySVG from '../PlaySVG/PlaySVG';
import SeekSVG from '../SeekSVG/SeekSVG';
import styles from './MusicPlayer.module.scss';


interface MusicPlayerProps {
  scSrc : string;
  imageSrc : string;
}
/** Soundcloud Widget API: https://developers.soundcloud.com/docs/api/html5-widget */
declare const SC: any;

const MusicPlayer: FC<MusicPlayerProps> = (props: MusicPlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playTimeRef = useRef<NodeJS.Timer>();
  /**State for custom audio player; play == true, pause == false */
  const [play, setPlay] = useState<{playing : boolean, playGUI : string}>({playing : false, playGUI: 'play'});
  const [playTime, setPlayTime] = useState<number>(0);
  const [timeInMinSec, setTimeInMinSec] = useState<string>('0:0');
  const firstRender = useRef(true);
  const widget = useRef<any>();
  const [widgetLoaded, setWidgetLoaded] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  
  useEffect(() => {
    const script_ = document.createElement('script');
    script_.src = 'https://w.soundcloud.com/player/api.js';
    script_.type = 'text/javascript';
    script_.async = true;
    document.body.appendChild(script_);
    firstRender.current = false;
    

    return () => {
      document.body.removeChild(script_)
      clearPlayTime();
    }

  }, []);

  const handleOnPlay = () => {

    let playTemp : boolean = play.playing ? false : true; 
    if(!!iframeRef.current){
      if(playTemp)
        widget.current.play();
      else
        widget.current.pause();
    }
    setPlay({playing: playTemp, playGUI: play.playing ? 'play' : 'pause'});
    let tempPlayTime : number = playTime;
    if(playTemp) {
       playTimeRef.current = setInterval(() => {
        if(tempPlayTime > 1000)  {
          tempPlayTime = tempPlayTime - 1000;
          setPlayTime(time => time - 1000)
        }
        else {     
          clearInterval(playTimeRef.current);
          console.log('esle');
          playTemp = false;
          widget.current.getDuration((ms : number) => setPlayTime(ms)); setPlay({playing: false, playGUI: 'play'});  playTimeRef.current = undefined;
        }
      }, 1000); 
    }
    else {
      clearInterval(playTimeRef.current);
    }
  }

  const _setSeekedTime = (_timeInMs: number) => {
    setPlayTime(time => time - _timeInMs);
  }

  const clearPlayTime = () => {
    clearInterval(playTimeRef.current);
    playTimeRef.current = undefined;
    widget.current = undefined;
  }

  const convertToMinutesSeconds = (ms : number) => {
    const totalLength : number = ms;
    const minutes = Math.floor(totalLength / 60000);
    const seconds = Math.floor(totalLength  / 1000) % 60;

    return((minutes < 10 ? 0 + '' + minutes : minutes) + ':' + (seconds < 10 ? 0 + '' + seconds : seconds));
    //const formattedTime : string =  minutes + ':' + seconds;
    //setTimeInMinSec(formattedTime);
  }

  const setWidget = () => {
    if(iframeRef.current)
    widget.current = SC.Widget(iframeRef.current.id);
    widget.current.bind(SC.Widget.Events.READY, () => {
      widget.current.getDuration((m: number) => setPlayTime(m));
      widget.current.getCurrentSound((api_object: any) => setTitle(api_object['title']));
      setWidgetLoaded(true);
    })
  }


  return(
  <div className={styles.MusicPlayer}>
    <iframe onLoad={setWidget} ref={iframeRef} id={styles.cstIframe} width="100%" height="0" scrolling="no" frameBorder="no" src={props.scSrc}/>
    { widgetLoaded ?
    <div id={styles.playerContainer}>
      <div className={styles.imageContainer}>
        <div id={styles.timer}>{convertToMinutesSeconds(playTime)}</div>
        <img src={props.imageSrc}/>
      </div>
      <div id={styles.navigateContainer}>
        <div id={styles.title}><span>{title}</span></div>
        <SeekSVG id='backward' setSeekedTime={(time) =>_setSeekedTime(time)}/>
        <div id={styles.playPause} onClick={handleOnPlay}>
            <PlaySVG className={play.playGUI} />
            <PauseSVG className={play.playGUI} />
        </div>
        <SeekSVG id='forward' setSeekedTime={(time) =>_setSeekedTime(time)}/>
      </div>
    </div>
    : <Loading/>
    }
  </div>
  )
};

export default MusicPlayer;

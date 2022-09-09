import React, { FC, ReactNode } from 'react';
import Nutshell from '../Nutshell/Nutshell';
import styles from './Texts.module.scss';

interface TextsProps {
  id : string
}

/** Contains text paragraphs for all components */
const Texts: FC<TextsProps> = (props : TextsProps) => {


const getText = () : ReactNode => {
  switch(props.id) {
    case 'sound' : return ([

      <p>
        I've gotten into recording and editing audio via my passion for music. 
        I started playing guitar when in my early teens, and ever since I've been 
        enjoying my time creating innovative soundscapes, harmonies and melodies.
        I also appreciate well recorded speech and spaces.
      </p>,
      <p>
        I mainly use <code>Logic Pro X</code> as my choice of digital audio workstation.
      </p>
    ]);

    case '3d' : return ([
      <p>
          I believe we are moving towards three dimensional design in information and communication technologies.
          That is why I have learned some basics of three dimensional modeling. 
          It comes handy when you have a product to present or an idea to concretize analogically. 
          As a music enthusiastic I would love to see more 3D modeling used to display instruments at web shops, for example.
      </p>,
      <p>
          I use <code>Blender</code> to create 3D objects and Blender and/or <code>Three.js</code> animate them.
      </p>
    ]); 

    case'image' : return ([
      <p>
        I have had an interest in design and image alteration since my early teens. 
        I consider my forte to be in the post production stage and vector design, 
        but I enjoy shooting still and video as well.
      </p>,
      <p>
        <code>Affinity Designer</code> is my go-to on vector design; <code>Affinity Photo</code> on editing image and <code>DaVinci Resolve</code> on video editing. 
        I know my way with <code>Adobe product family</code>, too.
      </p>
    ]);

    case 'education' : return([
      <p>My academical interests are in human interaction. 
        I am especially fascinated by the way groups form common meaning for phenomena 
        and how individuals use meaning in their daily lives. 
        Thus I started my university studies in 2016 and graduated with a master's degree in 2022.</p>,
      <p>During my university years I studied <code>media culture and communication</code> as my major subject.
        Media culture and communication as a study aims to understand how humans interact via and with media.
        In short it tries to find answers to questions like: <i>what meanings does a TV show convey; 
        what is the underlying message of a news broadcast; how is a children's storybook constructed</i>.
        I have found myself to be the most interested in the accessability of messages, i.e. scientific and
        organizational communication and informing.
      </p>,
      <p>
        <code>Psychology</code> and <code>sociology</code> support culture studies well as minor subjects. 
        They ponder many of the same questions but from a slightly different angle. 
        I also studied <code>filosophy</code> for the sake of understanding scientific approaces better.
        With <code>computer studies</code> I had more a of a practical approach: to learn programming.
      </p>
    ]);

    return <></>
  }
}
  return (
  <div className={styles.Texts}>
    <div>{ getText() }</div>
    {/* <Nutshell items={['Post-processing: i.e. equalization, compression, reverb, audio fixing', 'MIDI and audio recording', 'Acoustic treatment', 'Platform conventions (i.e. traditional ways to record and process podcasts or music)']}/> */}
    
  </div>
  )
};

export default Texts;

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
    ]); break;

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
    ])

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

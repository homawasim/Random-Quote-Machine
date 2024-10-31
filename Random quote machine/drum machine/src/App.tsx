import { useState } from 'react'
import React from 'react';

import { AudioClip } from './type.tsx'
// import { Drum } from './drum.tsx'
const audioClips: AudioClip[] = [{
  keyTrigger: "Q",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  description: "Heater 1"
}, {
  keyTrigger: "W",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  description: "Heater 2"
},
{
  keyTrigger: "E",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  description: "Heater 3"
},
{
  keyTrigger: "A",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  description: "Heater 4"
},
{
  keyTrigger: "S",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  description: "Clap"
},
{
  keyTrigger: "D",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  description: "Open-HH"
},
{
  keyTrigger: "Z",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp33",
  description: "Kick-n'-Hat"
},
{
  keyTrigger: "X",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  description: "Kick"
},
{
  keyTrigger: "C",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  description: "Closed-HH"
},


]

function App() {
  const playAudio = (e: React.keyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.eror);
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
  };

  return (

    <div className="container" id="drum-machine" onKeyDown={playAudio} >
      <h1>Fcc drum machine</h1>
      <div className='whole-drum'>{audioClips.map((clip) => {
        <drum audioClip={audioClip} key={udioClips.keyTrigger} />
      })}</div>
    </div>


  );
}

export default App;

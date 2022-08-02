import React, { useEffect } from 'react';
import './player.css'
import * as Tone from 'tone';

const keyFunction = () => {

  };

const Player = () => {

function playSynth(note) {

const poly = new Tone.PolySynth()
        poly.triggerAttackRelease(note, "8n", Tone.context.currentTime).toDestination()

}
    
useEffect(() => {
    const keyDownHandler = event => {
        
      console.log('User pressed: ', event.key);
      if (event.key === 'a') {
        playSynth('C4')
        
    }
    if (event.key === 's') {
        playSynth('D4')
    }
    if (event.key === 'd') {
        playSynth('E4')
    }
    if (event.key === 'f') {
        playSynth('F4')
    }
    if (event.key === 'g') {
        playSynth('G4')
    }
    if (event.key === 'h') {
        playSynth('A4')
    }
    if (event.key === 'j') {
        playSynth('B4')
    }
    if (event.key === 'k') {
        playSynth('C5')
    }
    if (event.key === 'l') {
        playSynth('D5')
    }
    if (event.key === ';') {
        playSynth('E5')
    }
   
    
    if (event.key === 'q') {
        playSynth('G4')
    }
    if (event.key === 'w') {
        playSynth('A4')
    }
    if (event.key === 'e') {
        playSynth('B4')
    }
    if (event.key === 'r') {
        playSynth('C5')
    }
    if (event.key === 't') {
        playSynth('D5')
    }
    if (event.key === 'y') {
        playSynth('E5')
    }
    if (event.key === 'u') {
        playSynth('F5')
    }
    if (event.key === 'i') {
        playSynth('G5')
    }
    if (event.key === 'o') {
        playSynth('A5')
    }
    if (event.key === 'p') {
        playSynth('B5')
    }
    if (event.key === '[') {
        playSynth('C6')
    }
    if (event.key === ']') {
        playSynth('D6')
    }
    if (event.key === 'z') {
        playSynth(' C3')
    }
    if (event.key === 'x') {
        playSynth(' D3')
    }
    if (event.key === 'c') {
        playSynth(' E3')
    }
    if (event.key === 'v') {
        playSynth(' F3')
    }
    if (event.key === 'b') {
        playSynth(' G3')
    }
    if (event.key === 'n') {
        playSynth(' A3')
    }
    if (event.key === 'm') {
        playSynth(' B3')
    }
    if (event.key === ',') {
        playSynth(' C4')
    }
    if (event.key === '.') {
        playSynth(' D4')
    }
    if (event.key === '1') {
        playSynth(['C4', 'E4', 'G4'])
    }
    if (event.key === '2') {
        playSynth(['D4', 'F4', 'A4'])
    }
    if (event.key === '3') {
        playSynth(['E4', 'G4', 'B4'])
    }
    if (event.key === '4') {
        playSynth(['F4', 'A4', 'C5'])
    }
    if (event.key === '5') {
        playSynth(['G4', 'B4', 'D5'])
    }
    if (event.key === '6') {
        playSynth(['A4', 'C4', 'E5'])
    }
    if (event.key === '7') {
        playSynth(['B4', 'D4', 'F5'])
    }
    if (event.key === '8') {
        playSynth(['C5', 'E4', 'G5'])
    }
      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ your logic here
        keyFunction();
      }
     
      
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
    return (
        <div id='wrapper'>
 

        </div>
    )
}

export default Player;

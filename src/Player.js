import React, { useEffect } from 'react';
import './player.css'
import * as Tone from 'tone';




const keyFunction = () => {

  };

const Player = (props) => {
var synth = ''
var delay = props.delay*0.01
var feedback = props.feedback*0.01
var attack = props.attack*0.01
var release = props.release*0.01
var decay = props.decay*0.01
var sustain = props.sustain*0.01
var detune = props.detune
var wave = props.wave
function playSynth(note) {

//effects



const feedbackDelay = new Tone.FeedbackDelay(delay, feedback).toDestination();



if (props.synth === 'poly') {
    synth = new Tone.PolySynth()  
    synth.set({ 
        oscillator: {
            type: wave
        },
        detune: detune,
        envelope: {
            attack: attack,
            decay: decay,
            release: release,

        }
       
    
    
    })
    synth.triggerAttackRelease(note, sustain, Tone.context.currentTime).toDestination().connect(feedbackDelay)
}

if (props.synth === 'sampler') {
 
    synth = new Tone.Sampler({
        urls: {       
            A2: "A2.mp3",
        },
        attack: attack,
        release: release, 
        decay: decay,
        detune: detune,
        baseUrl: "https://tonejs.github.io/audio/casio/",
        onload: () => {
            synth.triggerAttackRelease(note, sustain);
        },
      
        
    }).toDestination().connect(feedbackDelay)
   
}





}
    
useEffect(() => {
    const keyDownHandler = event => {
        
      console.log('User pressed: ', event.key);
      if (event.key === 'a') {
        playSynth('C3')
        
    }
    if (event.key === 's') {
        playSynth('D3')
    }
    if (event.key === 'd') {
        playSynth('E3')
    }
    if (event.key === 'f') {
        playSynth('F3')
    }
    if (event.key === 'g') {
        playSynth('G3')
    }
    if (event.key === 'h') {
        playSynth('A3')
    }
    if (event.key === 'j') {
        playSynth('B3')
    }
    if (event.key === 'k') {
        playSynth('C4')
    }
    if (event.key === 'l') {
        playSynth('D4')
    }
    if (event.key === ';') {
        playSynth('E4')
    }
   
    
    if (event.key === 'q') {
        playSynth('G3')
    }
    if (event.key === 'w') {
        playSynth('A3')
    }
    if (event.key === 'e') {
        playSynth('B3')
    }
    if (event.key === 'r') {
        playSynth('C4')
    }
    if (event.key === 't') {
        playSynth('D4')
    }
    if (event.key === 'y') {
        playSynth('E4')
    }
    if (event.key === 'u') {
        playSynth('F4')
    }
    if (event.key === 'i') {
        playSynth('G4')
    }
    if (event.key === 'o') {
        playSynth('A4')
    }
    if (event.key === 'p') {
        playSynth('B4')
    }
    if (event.key === '[') {
        playSynth('C4')
    }
    if (event.key === ']') {
        playSynth('D5')
    }
    if (event.key === 'z') {
        playSynth(' C2')
    }
    if (event.key === 'x') {
        playSynth(' D2')
    }
    if (event.key === 'c') {
        playSynth(' E2')
    }
    if (event.key === 'v') {
        playSynth(' F2')
    }
    if (event.key === 'b') {
        playSynth(' G2')
    }
    if (event.key === 'n') {
        playSynth(' A2')
    }
    if (event.key === 'm') {
        playSynth(' B2')
    }
    if (event.key === ',') {
        playSynth(' C3')
    }
    if (event.key === '.') {
        playSynth(' D3')
    }
    if (event.key === '1') {
        playSynth(['C3', 'E3', 'G3'])
    }
    if (event.key === '2') {
        playSynth(['D3', 'F3', 'A3'])
    }
    if (event.key === '3') {
        playSynth(['E3', 'G3', 'B3'])
    }
    if (event.key === '4') {
        playSynth(['F3', 'A3', 'C4'])
    }
    if (event.key === '5') {
        playSynth(['G3', 'B3', 'D4'])
    }
    if (event.key === '6') {
        playSynth(['A3', 'C3', 'E4'])
    }
    if (event.key === '7') {
        playSynth(['B3', 'D3', 'F4'])
    }
    if (event.key === '8') {
        playSynth(['C4', 'E3', 'G4'])
    }
    if (event.key === '9') {
        playSynth(['D4', 'F3', 'A4'])
    }
    if (event.key === '0') {
        playSynth(['E4', 'G4', 'B4'])
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
  },);
    return (
        <div id='wrapper'>
             

        </div>
    )

 
}

export default Player;

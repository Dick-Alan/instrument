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
var scale = props.scale



function playSynth(note) {

//effects



const feedbackDelay = new Tone.FeedbackDelay(delay, feedback).toDestination();



if (props.synth === 'poly') {
    synth = new Tone.PolySynth()  
    synth.set({ 
        oscillator: {
            type: wave,         
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
        
        
        baseUrl: "https://tonejs.github.io/audio/casio/",
        onload: () => {
            synth.triggerAttackRelease(note, sustain);
        },
      
    }).connect(feedbackDelay)
   
}
if (props.synth === 'salamander') {
 
    synth = new Tone.Sampler({
        urls: {       
            A2: "A2.mp3",
        },
        attack: attack,
        release: release, 
        decay: decay,
        
        
        baseUrl: "https://tonejs.github.io/audio/salamander/",
        onload: () => {
            synth.triggerAttackRelease(note, sustain);
        },
      
    }).toDestination().connect(feedbackDelay)
   
}





}

const r = 1.059463
var notes = []

if (props.major === 'major') {
    notes = [scale, scale*r**2, scale*r**4, scale*r**5, scale*r**7, scale*r**9, scale*r**11]
}
if (props.major === 'minor') {
    notes = [scale, scale*r**2, scale*r**3, scale*r**5, scale*r**7, scale*r**8, scale*r**10]
}
if (props.major === 'harmonic') {
    notes = [scale, scale*r**2, scale*r**3, scale*r**5, scale*r**7, scale*r**8, scale*r**11]
}
    
useEffect(() => {
    const keyDownHandler = event => {
        
      console.log('User pressed: ', event.key);
      if (event.repeat) {return}

    if (event.key === 'a') {
        //root
        playSynth(notes[0])    
        
    
          
    }
        //second
    if (event.key === 's') {
        playSynth(notes[1],)
            
    
    }
    
    if (event.key === 'd') {
        //third 
        playSynth(notes[2])     
    }
    if (event.key === 'f') {
        //fourth
        playSynth(notes[3])
    }
    if (event.key === 'g') {
        //fiftth
        playSynth(notes[4])
    }
    if (event.key === 'h') {
        //sixth
        playSynth(notes[5])
    }
    if (event.key === 'j') {
        //seventh
        playSynth(notes[6])
    }
    if (event.key === 'k') {
        //octave
        playSynth(scale*2)
    }
    if (event.key === 'l') {
        playSynth(notes[1]*2)
    }
    if (event.key === ';') {
        playSynth(notes[2]*2)
    } 
    if (event.key === 'q') {
        playSynth(notes[4])
    }
    if (event.key === 'w') {
        playSynth(notes[5])
    }
    if (event.key === 'e') {
        playSynth(notes[6])
    }
    if (event.key === 'r') {
        playSynth(scale*2)
    }
    if (event.key === 't') {
        playSynth(notes[1]*2)
    }
    if (event.key === 'y') {
        playSynth(notes[2]*2)
    }
    if (event.key === 'u') {
        playSynth(notes[3]*2)
    }
    if (event.key === 'i') {
        playSynth(notes[4]*2)
    }
    if (event.key === 'o') {
        playSynth(notes[5]*2)
    }
    if (event.key === 'p') {
        playSynth(notes[6]*2)
    }
    if (event.key === '[') {
        playSynth(scale*4)
    }
    if (event.key === ']') {
        playSynth(notes[1]*4)
    }
    if (event.key === 'z') {
        playSynth(scale/2)
    }
    if (event.key === 'x') {
        playSynth(notes[1]/2)
    }
    if (event.key === 'c') {
        playSynth(notes[2]/2)
    }
    if (event.key === 'v') {
        playSynth(notes[3]/2)
    }
    if (event.key === 'b') {
        playSynth(notes[4]/2)
    }
    if (event.key === 'n') {
        playSynth(notes[5]/2)
    }
    if (event.key === 'm') {
        playSynth(notes[6]/2)
    }
    if (event.key === ',') {
        playSynth(scale)
    }
    if (event.key === '.') {
        playSynth(notes[1])
    }
    if (event.key === '1') {
        playSynth([notes[0], notes[2], notes[4]])
    }
    if (event.key === '2') {
        playSynth([notes[1], notes[3], notes[5]])
    }
    if (event.key === '3') {
        playSynth([notes[2], notes[4], notes[6]])
    }
    if (event.key === '4') {
        playSynth([notes[3], notes[5], notes[0]*2])
    }
    if (event.key === '5') {
        playSynth([notes[4], notes[6], notes[1]*2])
    }
    if (event.key === '6') {
        playSynth([notes[5], notes[0]*2, notes[2]*2])
    }
    if (event.key === '7') {
        playSynth([notes[6], notes[1]*2, notes[3]*2])
    }
    if (event.key === '8') {
        playSynth([notes[0]*2, notes[2]*2, notes[4]*2])
    }
    if (event.key === '9') {
        playSynth([notes[1]*2, notes[3]*2, notes[5]*2])
    }
    if (event.key === '0') {
        playSynth([notes[2]*2, notes[4]*2, notes[6]*2])
        
    }
    if (event.key === ' ') {
        // sustain += 10
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

  useEffect(() => {
    const keyUpHandler = event => {
        
        if (event.key === ' ') {
            // sustain -= 10
            synth.releaseAll()
        }
      
     
      
    };

    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    };
  },);


    return (
        <div id='wrapper'>
             

        </div>
    )

 
}

export default Player;

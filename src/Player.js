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
    synth.triggerAttackRelease(note, Tone.context.currentTime).toDestination().connect(feedbackDelay)
    
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
        synth.triggerAttack(notes[0])

        
    
          
    }
        //second
    if (event.key === 's') {       
        synth.triggerAttack(notes[1])   
    }
    
    if (event.key === 'd') {
        //third 
        synth.triggerAttack(notes[2])     
    }
    if (event.key === 'f') {
        //fourth
        synth.triggerAttack(notes[3])
    }
    if (event.key === 'g') {
        //fiftth
        synth.triggerAttack(notes[4])
    }
    if (event.key === 'h') {
        //sixth
        synth.triggerAttack(notes[5])
    }
    if (event.key === 'j') {
        //seventh
        synth.triggerAttack(notes[6])
    }
    if (event.key === 'k') {
        //octave
        synth.triggerAttack(scale*2)
    }
    if (event.key === 'l') {
        synth.triggerAttack(notes[1]*2)
    }
    if (event.key === ';') {
        synth.triggerAttack(notes[2]*2)
    } 
    if (event.key === 'q') {
        synth.triggerAttack(notes[4])
    }
    if (event.key === 'w') {
        synth.triggerAttack(notes[5])
    }
    if (event.key === 'e') {
        synth.triggerAttack(notes[6])
    }
    if (event.key === 'r') {
        synth.triggerAttack(scale*2)
    }
    if (event.key === 't') {
        synth.triggerAttack(notes[1]*2)
    }
    if (event.key === 'y') {
        synth.triggerAttack(notes[2]*2)
    }
    if (event.key === 'u') {
        synth.triggerAttack(notes[3]*2)
    }
    if (event.key === 'i') {
        synth.triggerAttack(notes[4]*2)
    }
    if (event.key === 'o') {
        synth.triggerAttack(notes[5]*2)
    }
    if (event.key === 'p') {
        synth.triggerAttack(notes[6]*2)
    }
    if (event.key === '[') {
        synth.triggerAttack(scale*4)
    }
    if (event.key === ']') {
        synth.triggerAttack(notes[1]*4)
    }
    if (event.key === 'z') {
        synth.triggerAttack(scale/2)
    }
    if (event.key === 'x') {
        synth.triggerAttack(notes[1]/2)
    }
    if (event.key === 'c') {
        synth.triggerAttack(notes[2]/2)
    }
    if (event.key === 'v') {
        synth.triggerAttack(notes[3]/2)
    }
    if (event.key === 'b') {
        synth.triggerAttack(notes[4]/2)
    }
    if (event.key === 'n') {
        synth.triggerAttack(notes[5]/2)
    }
    if (event.key === 'm') {
        synth.triggerAttack(notes[6]/2)
    }
    if (event.key === ',') {
        synth.triggerAttack(scale)
    }
    if (event.key === '.') {
        synth.triggerAttack(notes[1])
    }
    if (event.key === '1') {
        synth.triggerAttack([notes[0], notes[2], notes[4]])
    }
    if (event.key === '2') {
        synth.triggerAttack([notes[1], notes[3], notes[5]])
    }
    if (event.key === '3') {
        synth.triggerAttack([notes[2], notes[4], notes[6]])
    }
    if (event.key === '4') {
        synth.triggerAttack([notes[3], notes[5], notes[0]*2])
    }
    if (event.key === '5') {
        synth.triggerAttack([notes[4], notes[6], notes[1]*2])
    }
    if (event.key === '6') {
        synth.triggerAttack([notes[5], notes[0]*2, notes[2]*2])
    }
    if (event.key === '7') {
        synth.triggerAttack([notes[6], notes[1]*2, notes[3]*2])
    }
    if (event.key === '8') {
        synth.triggerAttack([notes[0]*2, notes[2]*2, notes[4]*2])
    }
    if (event.key === '9') {
        synth.triggerAttack([notes[1]*2, notes[3]*2, notes[5]*2])
    }
    if (event.key === '0') {
        synth.triggerAttack([notes[2]*2, notes[4]*2, notes[6]*2])
        
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
        if (!synth) {
            playSynth()
        }
        if (event.key ==='a') {
            synth.triggerRelease(notes[0])
        }
        if (event.key === 's') {       
            synth.triggerRelease(notes[1])   
        }
        if (event.key === 'd') {
            //third 
            synth.triggerRelease(notes[2])     
        }
        if (event.key === 'f') {
            //fourth
            synth.triggerRelease(notes[3])
        }
        if (event.key === 'g') {
            //fiftth
            synth.triggerRelease(notes[4])
        }
        if (event.key === 'h') {
            //sixth
            synth.triggerRelease(notes[5])
        }
        if (event.key === 'j') {
            //seventh
            synth.triggerRelease(notes[6])
        }
        if (event.key === 'k') {
            //octave
            synth.triggerRelease(scale*2)
        }
        if (event.key === 'l') {
            synth.triggerRelease(notes[1]*2)
        }
        if (event.key === ';') {
            synth.triggerRelease(notes[2]*2)
        } 
        if (event.key === 'q') {
            synth.triggerRelease(notes[4])
        }
        if (event.key === 'w') {
            synth.triggerRelease(notes[5])
        }
        if (event.key === 'e') {
            synth.triggerRelease(notes[6])
        }
        if (event.key === 'r') {
            synth.triggerRelease(scale*2)
        }
        if (event.key === 't') {
            synth.triggerRelease(notes[1]*2)
        }
        if (event.key === 'y') {
            synth.triggerRelease(notes[2]*2)
        }
        if (event.key === 'u') {
            synth.triggerRelease(notes[3]*2)
        }
        if (event.key === 'i') {
            synth.triggerRelease(notes[4]*2)
        }
        if (event.key === 'o') {
            synth.triggerRelease(notes[5]*2)
        }
        if (event.key === 'p') {
            synth.triggerRelease(notes[6]*2)
        }
        if (event.key === '[') {
            synth.triggerRelease(scale*4)
        }
        if (event.key === ']') {
            synth.triggerRelease(notes[1]*4)
        }
        if (event.key === 'z') {
            synth.triggerRelease(scale/2)
        }
        if (event.key === 'x') {
            synth.triggerRelease(notes[1]/2)
        }
        if (event.key === 'c') {
            synth.triggerRelease(notes[2]/2)
        }
        if (event.key === 'v') {
            synth.triggerRelease(notes[3]/2)
        }
        if (event.key === 'b') {
            synth.triggerRelease(notes[4]/2)
        }
        if (event.key === 'n') {
            synth.triggerRelease(notes[5]/2)
        }
        if (event.key === 'm') {
            synth.triggerRelease(notes[6]/2)
        }
        if (event.key === ',') {
            synth.triggerRelease(scale)
        }
        if (event.key === '.') {
            synth.triggerRelease(notes[1])
        }
        if (event.key === '1') {
            synth.triggerRelease([notes[0], notes[2], notes[4]])
        }
        if (event.key === '2') {
            synth.triggerRelease([notes[1], notes[3], notes[5]])
        }
        if (event.key === '3') {
            synth.triggerRelease([notes[2], notes[4], notes[6]])
        }
        if (event.key === '4') {
            synth.triggerRelease([notes[3], notes[5], notes[0]*2])
        }
        if (event.key === '5') {
            synth.triggerRelease([notes[4], notes[6], notes[1]*2])
        }
        if (event.key === '6') {
            synth.triggerRelease([notes[5], notes[0]*2, notes[2]*2])
        }
        if (event.key === '7') {
            synth.triggerRelease([notes[6], notes[1]*2, notes[3]*2])
        }
        if (event.key === '8') {
            synth.triggerRelease([notes[0]*2, notes[2]*2, notes[4]*2])
        }
        if (event.key === '9') {
            synth.triggerRelease([notes[1]*2, notes[3]*2, notes[5]*2])
        }
        if (event.key === '0') {
            synth.triggerRelease([notes[2]*2, notes[4]*2, notes[6]*2])
            
        }
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

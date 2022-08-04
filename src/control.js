import React, { useState } from 'react';
import Player from './Player';
import Board from './board';
import './player.css'

const Control = () => {
const [synth, setSynth] = useState('poly')
const [detune, setDetune] = useState(0)
const [delay, setDelay] = useState(0)
const [feedback, setFeedback] = useState(0)
const [sustain, setSustain]  = useState(20)
const [attack, setAttack] = useState(1)
const [release, setRelease] = useState(3)
const [decay, setDecay] = useState(3)
const [wave, setWave] = useState('triangle')
const [major, setMajor] = useState('major')
const [scale, setScale] = useState(130.813)
const [pitch, setPitch] = useState(0)



const RenderPlayer = () => {
    return (<Player 
        synth={synth}
        detune={detune}
         delay={delay} 
         feedback={feedback}
         attack={attack}
         release={release}
         decay={decay}
         sustain={sustain}
         wave={wave}
         major={major}
         scale={scale}
         pitchshift={pitch}
        
         
         >
         </Player>)
}

 return (
        
     <div className='boardcontainer'>
        
        
        <Board></Board>
        <div className='controlboard'>
            <div className='keyselector'>
                Key:
                <select onKeyDown={(event) => {
                    event.preventDefault();
                        }}
                className='selector' onClick={(e) => setScale(e.target.value)}>
                    <option value={130.813}>C</option>
                    <option value={138.5912}>C#</option>
                    <option value={146.8323}>D</option>
                    <option value={155.5634}>D#</option>
                    <option value={164.8137}>E</option>
                    <option value={174.6140}>F</option>
                    <option value={184.9970}>F#</option>
                    <option value={195.9975}>G</option>
                    <option value={207.6521}>G#</option>
                    <option value={110}>A</option>
                    <option value={116.541}>A#</option>
                    <option value={123.871}>B</option>
                </select>
                <select onKeyDown={(event) => {
                    event.preventDefault();
                        }}
                className='selector' onClick={(e) => setMajor(e.target.value)}>
                    <option value={'major'}>Major</option> 
                    <option value={'minor'}>minor</option>
                    <option value={'harmonic'}>harmonic minor</option>
                </select>
               
                
            
                <div className='instrumentselector'>
                    Instrument:
                <select 
                onKeyDown={(event) => {
                    event.preventDefault();
                        }}
                className='selector' onClick={(e) => setSynth(e.target.value)}>
                    <option value={'poly'}>Poly Synth</option>
                    <option value={'sampler'}>Piano Sample</option>
                    <option value={'salamander'}>Salamander</option>
                    
        
                    
                </select>
                <br></br>
               
                </div>
                
                <div>
                Octave:
              
                <button className='octave' onKeyDown={(event) => {
                    event.preventDefault();
                        }}onClick={(e) => setScale(scale/2)}> - </button>
                <button className='octave' onKeyDown={(event) => {
                    event.preventDefault();
                        }}onClick={(e) => setScale(scale*2)}> + </button>
                        
                      
                {scale} Hz
                </div>
                </div>
           
            
            <div className='delay'>
                Delay:
            <div>  Time: <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            value={delay}
                                            className='distortion' 
                                            type="number"  
                                            max="100" min="0" 
                                            onChange={(e) => setDelay(e.target.value)}>
                                </input>
                            
                                <br></br>
                       Feedback: <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            value={feedback}
                                            className='distortion' 
                                            type="number"  
                                            max="100" min="0" 
                                            onChange={(e) => setFeedback(e.target.value)}>
                                </input>
            </div>
            </div>
            <div className='envelopecontainer'>
                Envelope:
                <div className='envelopeoptions'>
                    Sustain:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            value={sustain}
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setSustain(e.target.value)}>
                                </input>
                                <br></br>
                    Attack:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            value={attack}
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setAttack(e.target.value)}>
                                </input>
                                <br></br>
                    Release:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            value={release}
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setRelease(e.target.value)}>
                                </input>
                                <br></br>
                    Decay:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            value={decay}
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setDecay(e.target.value)}>
                                </input>
                   
                    
                    
                    </div> 
                    
                    
                </div>
                <div className='envelopecontainer'>
                pitchshift:  <input onKeyDown={(event) => {
                event.preventDefault();
                    }} 
                    value={pitch}
                    className='distortion' 
                    type="number"  
                    max="36" min="-36" 
                    onChange={(e) => setPitch(e.target.value)}>
                </input>
                </div>
                
            {synth === 'poly'?  
            <div className='synthsetter'>
            
            <div>
               
                Waveform: <select  onKeyDown={(event) => {
                    event.preventDefault();
                        }}
                className='selector' onClick={(e) => setWave(e.target.value)}>
                    <option value={'triangle'}>Triangle</option>
                    <option value={'square'}>Square</option>
                    <option value={'sawtooth'}>Sawtooth</option>
                    <option value={'sine'}>Sine</option>
                    
                    <option value={'pulse'}>Pulse</option>
                    <option value={'pwm'}>PWM</option>
                </select>
                <br></br>
                Detune:  <input onKeyDown={(event) => {
                event.preventDefault();
                    }} 
                    value={detune}
                    className='distortion' 
                    type="number"  
                    max="800" min="-800" 
                    onChange={(e) => setDetune(e.target.value)}>
                </input>

            </div>
            </div>
            
            
            : null}
            
               
       
        </div>
       <RenderPlayer></RenderPlayer>
       
     </div>
        
 )
}

export default Control
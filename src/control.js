import React, { useState } from 'react';
import Player from './Player';
import Board from './board';
import './player.css'

const Control = () => {
const [synth, setSynth] = useState('sampler')
const [detune, setDetune] = useState(0)
const [delay, setDelay] = useState(0)
const [feedback, setFeedback] = useState(0)
const [sustain, setSustain]  = useState(50)
const [attack, setAttack] = useState(1)
const [release, setRelease] = useState(1)
const [decay, setDecay] = useState(1)
const [wave, setWave] = useState('triangle')



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
        
         
         >
         </Player>)
}

 return (
        
     <div className='boardcontainer'>
        
        
        <Board></Board>
        <div className='controlboard'>
                <div className='instrumentselector'>
                    Instrument:
                <select 
                onKeyDown={(event) => {
                    event.preventDefault();
                        }}
                className='selector' onClick={(e) => setSynth(e.target.value)}>
                    <option value={'sampler'}>Piano Sample</option>
                  
                    <option value={'poly'}>Poly Synth</option>
        
                    
                </select>
                </div>
           
            
            <div className='delay'>
                Delay:
            <div>  Time: <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            className='distortion' 
                                            type="number"  
                                            max="100" min="0" 
                                            onChange={(e) => setDelay(e.target.value)}>
                                </input>
                       Feedback: <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
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
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setSustain(e.target.value)}>
                                </input>
                    Attack:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setAttack(e.target.value)}>
                                </input>
                    Release:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setRelease(e.target.value)}>
                                </input>
                    Decay:
                                <input onKeyDown={(event) => {
                                        event.preventDefault();
                                            }} 
                                            className='distortion' 
                                            type="number"  
                                            max="1000" min="0" 
                                            onChange={(e) => setDecay(e.target.value)}>
                                </input>
                   
                    
                    
                    </div> 
                    
                    
                </div>
                <div className='synthsetter'>
            {synth === 'poly'?  
            
            <div> Detune:  <input onKeyDown={(event) => {
                event.preventDefault();
                    }} 
                    className='distortion' 
                    type="number"  
                    max="800" min="-800" 
                    onChange={(e) => setDetune(e.target.value)}>
                </input>
               
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

            </div>
            
            
            : null}
            
            </div>
            
            
           


            
            
       
        </div>
       <RenderPlayer></RenderPlayer>
       
     </div>
        
 )
}

export default Control
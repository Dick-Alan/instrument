import React, { useEffect, useState } from 'react';
import './player.css'
const keyFunction = () => {
    return(
        <div></div>
    )


};

const Board = () => {
    const [key, setKey] = useState('')
    const [one , setOne ] = useState(false)
    const [two , setTwo ] = useState(false)
    const [three , setThree ] = useState(false)
    const [four , setFour ] = useState(false)
    const [five , setFive ] = useState(false)
    const [six , setSix ] = useState(false)
    const [seven , setSeven ] = useState(false)
    const [eight , setEight ] = useState(false)
    const [nine , setNine ] = useState(false)
    const [zero , setZero] = useState(false)
    const [q , setQ] = useState(false)
    const [w , setW] = useState(false)
    const [e , setE] = useState(false)
    const [r , setR] = useState(false)
    const [t , setT] = useState(false)
    const [y , setY] = useState(false)
    const [u, setU] = useState(false)
    const [i, setI] = useState(false)
    const [o, setO] = useState(false)
    const [p, setP] = useState(false)
    const [lb, setLb] = useState(false)
    const [rb, setRb] = useState(false)
    const [a, setA] = useState(false)
    const [s, setS] = useState(false)
    const [d, setD] = useState(false)
    const [f, setF] = useState(false)
    const [g, setG] = useState(false)
    const [h, setH] = useState(false)
    const [j, setJ] = useState(false)
    const [k, setK] = useState(false)
    const [l, setL] = useState(false)
    const [semi, setSemi] = useState(false)
    const [z, setZ] = useState(false)
    const [x, setX] = useState(false)
    const [c, setC] = useState(false)
    const [v, setV] = useState(false)
    const [b, setB] = useState(false)
    const [n, setN] = useState(false)
    const [m, setM] = useState(false)
    const [comma, setComma] = useState(false)
    const [period, setPeriod] = useState(false)
   



    
      
  useEffect(() => {
      const keyDownHandler = event => {
      
        setKey(event.key)
          
        console.log('User pressed: ', event.key);
       if (event.key === '1') {
        setOne(true)
       }
       if (event.key === '2') {
        setTwo(true)
       }
       if (event.key === '3') {
        setThree(true)
       }
       if (event.key === '4') {
        setFour(true)
       }
       if (event.key === '5') {
        setFive(true)
       }
       if (event.key === '6') {
        setSix(true)
       }
       if (event.key === '7') {
        setSeven(true)
       }
       if (event.key === '8') {
        setEight(true)
       }
       if (event.key === '9') {
        setNine(true)
       }
       if (event.key === '0') {
        setZero(true)
       }
       if (event.key === 'q') {
        setQ(true)
       }
       if (event.key === 'w') {
        setW(true)
       }
       if (event.key === 'e') {
        setE(true)
       }
       if (event.key === 'r') {
        setR(true)
       }
       if (event.key === 't') {
        setT(true)
       }
       if (event.key === 'y') {
        setY(true)
       }
       if (event.key === 'u') {
        setU(true)
       }
       if (event.key === 'i') {
        setI(true)
       }
       if (event.key === 'o') {
        setO(true)
       }
       if (event.key === 'p') {
        setP(true)
       }
       if (event.key === '[') {
        setLb(true)
       }
       if (event.key === ']') {
        setRb(true)
       }
       if (event.key === 'a') {
        setA(true)
       }
       if (event.key === 's') {
        setS(true)
       }
       if (event.key === 'd') {
        setD(true)
       }
       if (event.key === 'f') {
        setF(true)
       }
       if (event.key === 'g') {
        setG(true)
       }
       if (event.key === 'h') {
        setH(true)
       }
       if (event.key === 'j') {
        setJ(true)
       }
       if (event.key === 'k') {
        setK(true)
       }
       if (event.key === 'l') {
        setL(true)
       }
       if (event.key === ';') {
        setSemi(true)
       }
       if (event.key === 'z') {
        setZ(true)
       }
       if (event.key === 'x') {
        setX(true)
       }
       if (event.key === 'c') {
        setC(true)
       }
       if (event.key === 'v') {
        setV(true)
       }
       if (event.key === 'b') {
        setB(true)
       }
       if (event.key === 'n') {
        setN(true)
       }
       if (event.key === 'm') {
        setM(true)
       }
       if (event.key === ',') {
        setComma(true)
       }
       if (event.key === '.') {
        setPeriod(true)
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

    useEffect(() => {
        const keyUpHandler = event => {
        
        
            
          console.log('User pressed: ', event.key);
         if (event.key === '1') {
          setOne(false)
         }
         if (event.key === '2') {
            setTwo(false)
           }
           if (event.key === '3') {
            setThree(false)
           }
           if (event.key === '4') {
            setFour(false)
           }
           if (event.key === '5') {
            setFive(false)
           }
           if (event.key === '6') {
            setSix(false)
           }
           if (event.key === '7') {
            setSeven(false)
           }
           if (event.key === '8') {
            setEight(false)
           }
           if (event.key === '9') {
            setNine(false)
           }
           if (event.key === '0') {
            setZero(false)
           }
           if (event.key === 'q') {
            setQ(false)
           }
           if (event.key === 'w') {
            setW(false)
           }
           if (event.key === 'e') {
            setE(false)
           }
           if (event.key === 'r') {
            setR(false)
           }
           if (event.key === 't') {
            setT(false)
           }
           if (event.key === 'y') {
            setY(false)
           }
           if (event.key === 'u') {
            setU(false)
           }
           if (event.key === 'i') {
            setI(false)
           }
           if (event.key === 'o') {
            setO(false)
           }
           if (event.key === 'p') {
            setP(false)
           }
           if (event.key === '[') {
            setLb(false)
           }
           if (event.key === ']') {
            setRb(false)
           }
           if (event.key === 'a') {
            setA(false)
           }
           if (event.key === 's') {
            setS(false)
           }
           if (event.key === 'd') {
            setD(false)
           }
           if (event.key === 'f') {
            setF(false)
           }
           if (event.key === 'g') {
            setG(false)
           }
           if (event.key === 'h') {
            setH(false)
           }
           if (event.key === 'j') {
            setJ(false)
           }
           if (event.key === 'k') {
            setK(false)
           }
           if (event.key === 'l') {
            setL(false)
           }
           if (event.key === ';') {
            setSemi(false)
           }
           if (event.key === 'z') {
            setZ(false)
           }
           if (event.key === 'x') {
            setX(false)
           }
           if (event.key === 'c') {
            setC(false)
           }
           if (event.key === 'v') {
            setV(false)
           }
           if (event.key === 'b') {
            setB(false)
           }
           if (event.key === 'n') {
            setN(false)
           }
           if (event.key === 'm') {
            setM(false)
           }
           if (event.key === ',') {
            setComma(false)
           }
           if (event.key === '.') {
            setPeriod(false)
           }
    
        
          if (event.key === 'Enter') {
            event.preventDefault();
    
            // 👇️ your logic here
            keyFunction();
          }
         
          
        };
    
        document.addEventListener('keyup', keyUpHandler);
    
        return () => {
          document.removeEventListener('keyup', keyUpHandler);
        };
      }, []);
    
    return(
      <div className='board'>
            <div className="indicator">  </div>
            <div className='toprow'>
                <div className='number'>{one === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, violet, yellow)'}}></div>:null
                    } </div>
                <div className='number'>{two === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, indigo, orange)'}}></div>:null
                    }</div>
                <div className='number'>{three === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, blue, red)'}}></div>:null
                    }</div>
                <div className='number'>{four === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, greenyellow, violet)'}}></div>:null
                    }</div>
                <div className='number'>{five === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, yellow, indigo)'}}></div>:null
                    }</div>
                <div className='number'>{six === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, orange, blue)'}}></div>:null
                    }</div>
                <div className='number'>{seven === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, red, greenyellow)'}}></div>:null
                    }</div>
                <div className='number'>{eight === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, violet, yellow)'}}></div>:null
                    }</div>
                <div className='number'>{nine === true?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, indigo, orange)'}}></div>:null
                    }</div>
                    <div className='number'>{zero === true?
                <div className='popup' style={{backgroundImage: 'linear-gradient(to right, blue, red)'}}></div>:null
                    }</div>
            </div>
       
            <div className='qwerty'>
                <div className='qwert'>{q===true?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='qwert'>{w===true?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='qwert'>{e===true?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='qwert'>{r===true?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='qwert'>{t===true?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='qwert'>{y===true?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
                <div className='qwert'>{u===true?
                    <div className='popup' style={{backgroundColor: 'greenyellow'}}></div>:null
                    }</div>
                <div className='qwert'>{i===true?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='qwert'>{o===true?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='qwert'>{p===true?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='qwert'>{lb===true?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='qwert'>{rb===true?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
            </div>
         
            <div className='asdfg'>
                <div className='asdf'>{a===true?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='asdf'>{s===true?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='asdf'>{d===true?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
                <div className='asdf'>{f===true?
                    <div className='popup' style={{backgroundColor: 'greenyellow'}}></div>:null
                    }</div>
                <div className='asdf'>{g===true?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='asdf'>{h===true?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='asdf'>{j===true?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='asdf'>{k===true?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='asdf'>{l===true?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='asdf'>{semi===true?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
            </div>
           
            <div className='zxcvb'>
                <div className='zxcv'>{z===true?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='zxcv'>{x===true?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='zxcv'>{c===true?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
                <div className='zxcv'>{v===true?
                    <div className='popup' style={{backgroundColor: 'greenyellow'}}></div>:null
                    }</div>
                <div className='zxcv'>{b===true?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='zxcv'>{n===true?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='zxcv'>{m===true?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='zxcv'>{comma===true?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='zxcv'>{period===true?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div> 
            </div>
            <div className='space'>
            {key===' '?
                    <div className='popup' style={{backgroundColor: 'white'}}></div>:null
                    }
            </div>

                  
         <div className='keypop'>  
          [{key}]
          <br></br>
         {(one=== true || eight=== true)&&(<div style={{color: 'violet'}}>I</div>)}
         {(two===true || nine === true)&&(<div style={{color: 'indigo'}}>II</div>)}  
         {(three===true || zero === true)&&(<div style={{color: 'blue'}}>III</div>)}
         {four === true&&(<div style={{color: 'greenyellow'}}>IV</div>)}
         {five === true&&(<div style={{color: 'yellow'}}>V</div>)}
         {six === true&&(<div style={{color: 'orange'}}>VI</div>)}
         {seven === true&&(<div style={{color: 'red'}}>VII</div>)}
      
         {(a===true||z===true||r===true||comma===true||k===true||lb===true)&&(<div style={{color: 'violet'}}>root</div>)}
         
         {(x===true||s===true||t===true||period===true||l===true||rb===true)&&(<div style={{color: 'indigo'}}>2nd</div>)}
        
         {(c===true||d===true||y===true||semi===true)&&(<div style={{color: 'blue'}}>3rd</div>)}
        
         {(v===true||f===true||u===true)&&(<div style={{color: 'greenyellow'}}>4th</div>)}
        
         {(b===true||g===true||i===true||q===true)&&(<div style={{color: 'yellow'}}>5th</div>)}
       
         {(n===true||h===true||o===true||w===true)&&(<div style={{color: 'orange'}}>6th</div>)}
       
         {(m===true||j===true||p===true||e===true)&&(<div style={{color: 'red'}}>7th</div>)}
        
         
       
      
        
         
         </div>   
    
      </div>
    )

}

export default Board;
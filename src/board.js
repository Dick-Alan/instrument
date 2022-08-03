import React, { useEffect, useState } from 'react';
import './player.css'
const keyFunction = () => {
    return(
        <div></div>
    )


};

const Board = () => {
    const [key, setKey] = useState('')


    
      
  useEffect(() => {
      const keyDownHandler = event => {
      
        setKey(event.key)
          
        console.log('User pressed: ', event.key);
       
      
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
    
    return(
      <div className='board'>
            <div className='toprow'>
                <div className='number'>{key==='1'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, violet, yellow)'}}></div>:null
                    }</div>
                <div className='number'>{key==='2'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, indigo, orange)'}}></div>:null
                    }</div>
                <div className='number'>{key==='3'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, blue, red)'}}></div>:null
                    }</div>
                <div className='number'>{key==='4'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, greenyellow, violet)'}}></div>:null
                    }</div>
                <div className='number'>{key==='5'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, yellow, indigo)'}}></div>:null
                    }</div>
                <div className='number'>{key==='6'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, orange, blue)'}}></div>:null
                    }</div>
                <div className='number'>{key==='7'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, red, greenyellow)'}}></div>:null
                    }</div>
                <div className='number'>{key==='8'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, violet, yellow)'}}></div>:null
                    }</div>
                <div className='number'>{key==='9'?
                    <div className='popup' style={{backgroundImage: 'linear-gradient(to right, indigo, orange)'}}></div>:null
                    }</div>
                    <div className='number'>{key==='0'?
                <div className='popup' style={{backgroundImage: 'linear-gradient(to right, blue, red)'}}></div>:null
                    }</div>
            </div>
            <div className='qwerty'>
                <div className='qwert'>{key==='q'?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='w'?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='e'?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='r'?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='t'?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='y'?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='u'?
                    <div className='popup' style={{backgroundColor: 'greenyellow'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='i'?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='o'?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='p'?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='qwert'>{key==='['?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='qwert'>{key===']'?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
            </div>
            <div className='asdfg'>
                <div className='asdf'>{key==='a'?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='s'?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='d'?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='f'?
                    <div className='popup' style={{backgroundColor: 'greenyellow'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='g'?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='h'?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='j'?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='k'?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='asdf'>{key==='l'?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='asdf'>{key===';'?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
            </div>
            <div className='zxcvb'>
                <div className='zxcv'>{key==='z'?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='x'?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='c'?
                    <div className='popup' style={{backgroundColor: 'blue'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='v'?
                    <div className='popup' style={{backgroundColor: 'greenyellow'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='b'?
                    <div className='popup' style={{backgroundColor: 'yellow'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='n'?
                    <div className='popup' style={{backgroundColor: 'orange'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='m'?
                    <div className='popup' style={{backgroundColor: 'red'}}></div>:null
                    }</div>
                <div className='zxcv'>{key===','?
                    <div className='popup' style={{backgroundColor: 'violet'}}></div>:null
                    }</div>
                <div className='zxcv'>{key==='.'?
                    <div className='popup' style={{backgroundColor: 'indigo'}}></div>:null
                    }</div> 
            </div>


         <div className='keypop'>{key}
        
         
         </div>   
    
      </div>
    )

}

export default Board;
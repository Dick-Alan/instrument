import React from 'react';
import Player from './Player';
import Board from './board';

class App extends React.Component {
    render() {
        return (
            <div>
                <Player></Player>
                <Board></Board>

            </div>
        )
    }  
}

export default App;
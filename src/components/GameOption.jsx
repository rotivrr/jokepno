import React from 'react';

const GameOption = ({option, onSelect}) => {
    return(
        <button onClick={()=> onSelect(option)}>
            {option}
        </button>
    )
}

export default GameOption;
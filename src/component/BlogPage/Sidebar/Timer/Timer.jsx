import React from 'react';
import './Timer.css'

const Timer = (props) => {
    console.log('Timer total time : ', props.totalTime);

    return (
        <div className='timmer'>
            <h3>Spend time or read : {props.totalTime} min</h3>
        </div>
    );
};

export default Timer;
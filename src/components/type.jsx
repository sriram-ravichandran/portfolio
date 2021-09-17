import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

const Type = () => {
    return(
        <div style={{fontSize:40,color:'black'}}><Typewriter
        words={['Developer', 'Student !']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
            

        /></div>
    );
}

export default Type;
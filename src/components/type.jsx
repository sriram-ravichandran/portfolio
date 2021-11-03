import React from 'react';
import { Typewriter,} from 'react-simple-typewriter'

const Type = () => {
    return(
        <div style={{fontSize:40,color:'white'}}><Typewriter
        words={['Developer', 'Student']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={70}
            delaySpeed={1000}
            

        /></div>
    );
}

export default Type;
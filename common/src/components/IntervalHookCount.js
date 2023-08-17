import React, { useState, useEffect,useCallback } from 'react'

const IntervalHookCount = () => {

    const [ count, setCount ] = useState( 0 );
    
    const tick = useCallback( () => setCount( count + 1 ) )
    
    useEffect( () =>
    {
        const interval = setInterval( tick, 1000 );
        console.log("started use effect");
        

        return () =>
        {
            clearInterval( interval );  
            console.log("clear use effect");
        }

    },[tick])

    return (
        <div>Count: { count }</div>
    );
}

export default IntervalHookCount
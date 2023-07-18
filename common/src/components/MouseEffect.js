import React, {useEffect,useState } from 'react'


const MouseEffect = () =>
{
    
    const [ X, setX ] = useState( 0 );
    const [ Y, setY ] = useState( 0 );

    const logMouseMove = (e) =>
    {
        console.log( "Mouse Event" );
        setX( e.clientX );
        setY(e.clientY);
    }

    useEffect( () =>
    { 
        console.log( "inside useEffect" );
        window.addEventListener( 'mousemove', logMouseMove );
        
        return () =>
        {
            console.log("mousemove clearing....");
            window.removeEventListener( 'mousemove', logMouseMove );
        };
    },[] )

    return (
        <div>
            X: {X } Y: {Y}           
        </div>
    );
}

export default MouseEffect
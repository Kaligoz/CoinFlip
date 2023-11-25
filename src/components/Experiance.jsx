import {Coin} from './Coin'
import React, { useRef, useState } from 'react';
import {useFrame} from 'react-three-fiber';
import { useSpring, animated } from '@react-spring/three'

export const Experiance = () => {

    const myMesh = useRef();
    const [active, setActive] = useState(false);

    const springs = useSpring({ 
        scale: active ? 1.5 : 1 
    })

    useFrame(({ clock }) => {
        const x = clock.getElapsedTime();
        myMesh.current.rotation.x = x;

        const y = Math.sin(clock.getElapsedTime()); 
        myMesh.current.position.y = y;
      });
  
    return (
        <>
        <animated.mesh scale={springs.scale} onClick={() => setActive(!active)} ref={myMesh}>
            <Coin />
        </animated.mesh>
        </>
    )
}

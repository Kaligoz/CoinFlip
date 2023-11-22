import {Coin} from './Coin'
import React, { useRef } from 'react';
import {useFrame} from 'react-three-fiber';

export const Experiance = () => {

    const cameraRef = useRef();

    useFrame(() => {
        cameraRef.current.position.z += 0.01;
      });
  
    return (
        <>
        <perspectiveCamera ref={cameraRef} position={[0, 0, 0]} />
        <mesh position={[0, -1, 3]}>
            
                <Coin />
    
        </mesh>
        </>
    )
}

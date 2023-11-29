import {Coin} from './Coin'
import React, { useRef, useState } from 'react';
import {useFrame} from 'react-three-fiber';
import { useSpring, animated } from '@react-spring/three'
import { useCoinContext } from '../CoinContext'

export const Experiance = () => {
    const myMesh = useRef();
    const [active, setActive] = useState(true);
    const { coinResult } = useCoinContext();

    const springs = useSpring({ 
        from: { scale: 1 },
        to: { scale: active ? 1.5 : 1 },
        onRest: () => setActive(false)
    })

    useFrame(({ clock }) => {
        let rotationValue;

        if (coinResult === 1) {
            rotationValue = clock.getElapsedTime();
            myMesh.current.rotation.z = rotationValue;
        } else if (coinResult === 0) {
            rotationValue = clock.getElapsedTime();
            myMesh.current.rotation.y = rotationValue;
        } else {
            rotationValue = clock.getElapsedTime();
            myMesh.current.rotation.x = rotationValue;
        }
    });


    return (
        <>
        <animated.mesh scale={springs.scale} ref={myMesh}>
            <Coin />
        </animated.mesh>
        </>
    )
}

import {Coin} from './Coin'
import React, { useRef, useState, useEffect } from 'react';
import {useFrame} from 'react-three-fiber';
import { useSpring, animated } from '@react-spring/three'
import { useCoinContext } from '../CoinContext'

export const Experiance = () => {
    const myMesh = useRef();
    const [active, setActive] = useState(true);
    const [targetAngle, setTargetAngle] = useState(0);
    const { coinResult } = useCoinContext();
    const [lastCoinResult, setLastCoinResult] = useState(coinResult);

    const springs = useSpring({ 
        from: { scale: 1 },
        to: { scale: active ? 1.5 : 1 },
        onRest: () => setActive(false)
    })

    useEffect(() => {
        const currentAngle = myMesh.current.rotation.x;

        // reset angle
        myMesh.current.rotation.x = lastCoinResult === 1 ? 0 : Math.PI;

        if (coinResult === 1) { // heads
            setTargetAngle(Math.PI * 6 - currentAngle);
        } else if (coinResult === 0) { // tails
            setTargetAngle(Math.PI * 7 - currentAngle);
        }

        setLastCoinResult(coinResult);
    }, [coinResult, lastCoinResult]);

    useFrame(({ clock }) => {
        let deltaTime = clock.getElapsedTime();;
        
        if (targetAngle > myMesh.current.rotation.y) {
            myMesh.current.rotation.y = myMesh.current.rotation.y + deltaTime * 0.01;
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
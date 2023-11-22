import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Coin(props) {
  const { nodes, materials } = useGLTF('./models/euro.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
    </group>
  )
}

useGLTF.preload('./models/euro.glb')

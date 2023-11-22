/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/euro.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/euro.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
    </group>
  )
}

useGLTF.preload('/euro.glb')

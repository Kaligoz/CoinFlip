import './App.css';
import React, {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { Experiance } from './components/Experiance';
import { CoinProvider } from './CoinContext';
import FlipCoin from './components/FlipCoin';
import CoinResult from './components/CoinResult';

function App() {
  return (
    <>
      <CoinProvider defaultValue={null}>
        <div className='bg-slate-300 overflow-hidden h-screen'>
          <div className='flex justify-center items-center flex-col z-10 relative'>
            <h1 className='text-3xl font-bold flex justify-center text-center mb-40 font-mono'>
              Want to flip a coin? <br />
              Do it.
            </h1>

            <CoinResult />

            <FlipCoin />
          </div>

          <div className='translate-y-[-100%]'>
            <Canvas style={{ height: '350px' }}>
              <Experiance />
            </Canvas>
          </div>
        </div>
      </CoinProvider>
    </>
  );
}

export default App;

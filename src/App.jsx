import './App.css';
import React, { useState} from 'react';
//import Spline from '@splinetool/react-spline'; 
import { Canvas } from '@react-three/fiber'
import { Experiance } from './components/Experiance';


function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [result, setResult] = useState('');
  const [displayText, setDisplayText] = useState('The chance will decide');

  const handleClick = () => {
    const a = Math.floor(Math.random() * 2);
    setResult(a);
    setButtonClicked(true);
    setDisplayText(a === 1 ? 'heads' : 'tails');
  };

  return (
    <>
      <div className='bg-slate-300 overflow-hidden h-screen'>
        <div className='flex justify-center items-center flex-col z-10 relative'>
          <h1 className='text-3xl font-bold flex justify-center text-center mb-56 font-mono'>
            Want to flip a coin? <br />
            Do it.
          </h1>

          <Canvas>
            <Experiance />
          </Canvas>


          <div className='mb-4'>
            <p className='text-2xl font-mono'>
              {displayText}
            </p>
          </div>

          <button
            onClick={handleClick}
            className="text-2xl font-bold border border-solid border-black px-4 py-1 rounded-2xl font-mono"
          >
            {'Click me'}
          </button>
        </div>

        {/*

        {buttonClicked && (
          <div className='flex justify-center items-center translate-x-[36.5%] translate-y-[-100%]'>
            {result === 1 ? (
              <Spline scene="https://prod.spline.design/dT6Y6wytrLzIW303/scene.splinecode" />
            ) : (
              <Spline scene="https://prod.spline.design/tDvwfETj6tVjvuTt/scene.splinecode" />
            )}
          </div>
        )}

            */}

        <div className='left-0 bottom-0 opacity-50'>
          <h1>
            This work  is based on "1 Euro Coin" (https://sketchfab.com/3d-models/1-euro-coin-992424bd87714a29bcd4c58940e05ded) <br />
            by korkigames (https://sketchfab.com/korkigames) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;

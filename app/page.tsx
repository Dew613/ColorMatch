// app/page.tsx
"use client"; // Ensure this file uses client-side features

import React, { useState, useEffect } from 'react';
import ColorDisplay from '@/components/ColorDisplay';
import ColorPicker from '@/components/ColorPicker';

export default function Home() {
  const [randomColor, setRandomColor] = useState('#ffffff');
  const [userColor, setUserColor] = useState('#ffffff');
  const [isChecking, setIsChecking] = useState(false);
  const [startGlow, setStartGlow] = useState<boolean | null>(null);
  const [gameDone, setGameDone] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Initialize with random colors for both user and target
    const initializeColors = () => {
      const newRandomColor = generateRandomColor();
      const newUserColor = generateRandomColor();
      setRandomColor(newRandomColor);
      setUserColor(newUserColor);
    };

    initializeColors();
  }, []);

  const handleSubmit = () => {
    setIsChecking(true);
    const match = userColor === randomColor;
    setIsCorrect(match);
    setStartGlow(match);
    
    setTimeout(() => {
      setIsChecking(false);
      setGameDone(true);
      setStartGlow(null);
    }, 2000);
  };

  const handlePlayAgain = () => {
    const newRandomColor = generateRandomColor();
    const newUserColor = generateRandomColor();
    setRandomColor(newRandomColor);
    setUserColor(newUserColor);
    setIsCorrect(null);
    setStartGlow(null);
    setGameDone(false)
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white p-4 space-y-4">
      <div className="flex w-full max-w-4xl space-x-4">
        {/* User Color Box */}
        <div className={`flex flex-col items-center w-1/2 h-[50vh] ${isChecking ? (startGlow ? 'bg-green-100 ring-4 ring-green-500' : 'bg-red-100 ring-4 ring-red-500') : ''}`}>
          <h2 className="mb-2">Your Color</h2>
          <ColorDisplay color={userColor} />
          <div className='w-full px-20'>
            <ColorPicker color={userColor} onChange={setUserColor} />
          </div>
        </div>
        
        {/* Target Color Box */}
        <div className={`flex flex-col items-center w-1/2 h-[50vh] ${isChecking ? (isCorrect ? 'bg-green-100 ring-4 ring-green-500' : 'bg-red-100 ring-4 ring-red-500') : ''}`}>
          <h2 className="mb-2">Target Color</h2>
          <ColorDisplay color={randomColor} />
        </div>
      </div>

      <button
        onClick={gameDone ? handlePlayAgain : handleSubmit}
        className="mt-4 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {gameDone ? 'Play Again' : 'Submit'}
      </button>
    </div>
  );
}

// Utility function to generate a random color
function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

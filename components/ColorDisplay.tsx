// components/ColorDisplay.tsx
import React from 'react';

interface ColorDisplayProps {
  color: string;
}

function ColorDisplay({ color }: ColorDisplayProps) {
  return (
    <div
      className="w-full h-full rounded-lg"
      style={{ backgroundColor: color }}
    />
  );
}

export default ColorDisplay

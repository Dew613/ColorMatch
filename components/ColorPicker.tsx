// components/ColorPicker.tsx
import React from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className='mt-4'>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}

export default ColorPicker

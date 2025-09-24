import React, { useState } from 'react';

export default function FurnitureConfigurator() {
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(220);
  const [depth, setDepth] = useState(60);
  const [color, setColor] = useState('#d9c6a3');

  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>DIY 家具配置器</h1>

      <div className='space-y-4'>
        <div>
          <label className='block mb-1'>宽度 (cm)</label>
          <input type='range' min='60' max='300' value={width} onChange={(e) => setWidth(e.target.value)} />
          <span className='ml-2'>{width} cm</span>
        </div>

        <div>
          <label className='block mb-1'>高度 (cm)</label>
          <input type='range' min='60' max='300' value={height} onChange={(e) => setHeight(e.target.value)} />
          <span className='ml-2'>{height} cm</span>
        </div>

        <div>
          <label className='block mb-1'>深度 (cm)</label>
          <input type='range' min='30' max='100' value={depth} onChange={(e) => setDepth(e.target.value)} />
          <span className='ml-2'>{depth} cm</span>
        </div>

        <div>
          <label className='block mb-1'>颜色</label>
          <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
      </div>

      <div className='mt-6'>
        <h2 className='text-lg font-semibold mb-2'>预览</h2>
        <div
          className='border rounded-md'
          style={{
            width: width + 'px',
            height: height / 2 + 'px',
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}

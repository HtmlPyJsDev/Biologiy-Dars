import React, { useRef, useEffect, useState } from 'react';

interface DrawingCanvasProps {
  prompt: string;
}

type Shape = 'line' | 'rectangle' | 'circle';

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ prompt }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [shape, setShape] = useState<Shape>('line');
  const [lineWidth, setLineWidth] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      switch (shape) {
        case 'line':
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
          break;
        case 'rectangle':
          ctx.strokeRect(x, y, 50, 30);
          break;
        case 'circle':
          ctx.beginPath();
          ctx.arc(x, y, 25, 0, Math.PI * 2);
          ctx.stroke();
          break;
      }
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const startDrawingTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    drawTouch(e);
  };

  const stopDrawingTouch = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
    }
  };

  const drawTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';

      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      switch (shape) {
        case 'line':
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y);
          break;
        case 'rectangle':
          ctx.strokeRect(x, y, 50, 30);
          break;
        case 'circle':
          ctx.beginPath();
          ctx.arc(x, y, 25, 0, Math.PI * 2);
          ctx.stroke();
          break;
      }
    }
  };

  return (
    <div className="mt-4">
      <p className="mb-2 text-[#e94560]">{prompt}</p>
      <div className="mb-2">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mr-2"
        />
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value as Shape)}
          className="mr-2 bg-[#0f3460] text-white p-1 rounded"
        >
          <option value="line">Chiziq</option>
          <option value="rectangle">To'rtburchak</option>
          <option value="circle">Aylana</option>
        </select>
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={(e) => setLineWidth(Number(e.target.value))}
          className="mr-2"
        />
        <span>{lineWidth}px</span>
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawingTouch}
        onTouchEnd={stopDrawingTouch}
        onTouchMove={drawTouch}
        className="border border-gray-300 rounded touch-none"
      />
      <button
        onClick={clearCanvas}
        className="mt-2 px-4 py-2 bg-[#e94560] text-white rounded hover:bg-[#c1374d] transition-colors duration-300"
      >
        Tozalash
      </button>
    </div>
  );
};

export default DrawingCanvas;


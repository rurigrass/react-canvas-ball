import { useEffect, useRef } from "react";

type CanvasProps = {};

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    //Our draw come here
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    //Our first draw
    if (ctx) {
      draw(ctx);
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...props} width="500" height="500" />;
};

export default Canvas;

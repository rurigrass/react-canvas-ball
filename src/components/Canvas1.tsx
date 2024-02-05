import { useEffect, useRef } from "react";

type CanvasProps = {};

type DrawProps = {
  canvas: any;
  ctx: CanvasRenderingContext2D;
  ballRadius: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
};

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawBall = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  const draw = ({ canvas, ctx, ballRadius, x, y, dx, dy }: DrawProps) => {
    //Our draw come here
    drawBall(ctx);

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
      //   counter++;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
      //   counter++;
    }

    x += dx;
    y += dy;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      let ballRadius = 10;
      let x = canvas.width / 2;
      let y = canvas.height - 30;
      let dx = 2;
      let dy = -2;
      //Our first draw
      if (ctx) {
        draw({ canvas, ctx, ballRadius, x, y, dx, dy });
      }
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...props} width="500" height="500" />;
};

export default Canvas;

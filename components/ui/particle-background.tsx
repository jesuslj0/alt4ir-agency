"use client";

import React from "react";

const ParticleBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: -9999,
      y: -9999,
      radius: 150,
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(190, 130, 245, 0.75)";
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas!.width - this.size * 10) {
            this.x += 3;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 3;
          }
          if (mouse.y < this.y && this.y < canvas!.height - this.size * 10) {
            this.y += 3;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 3;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    let particleArray: Particle[] = [];

    function init() {
      particleArray = [];
      const numberOfParticles = (canvas!.height * canvas!.width) / 9300;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2.5) + 1.2;
        const x = Math.random() * (canvas!.width - size * 2) + size;
        const y = Math.random() * (canvas!.height - size * 2) + size;
        const directionX = (Math.random() * 0.6) - 0.3;
        const directionY = (Math.random() * 0.6) - 0.3;
        particleArray.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    function connect() {
      if (!ctx) return;
      const maxDist = (canvas!.width / 7) * (canvas!.height / 7);
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a + 1; b < particleArray.length; b++) {
          const dx = particleArray[a].x - particleArray[b].x;
          const dy = particleArray[a].y - particleArray[b].y;
          const distance = dx * dx + dy * dy;
          if (distance < maxDist) {
            const opacityValue = 1 - distance / maxDist;
            ctx.strokeStyle = `rgba(210, 160, 255, ${Math.min(opacityValue * 1.2, 1)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);
      for (const particle of particleArray) {
        particle.update();
      }
      connect();
      animationId = requestAnimationFrame(animate);
    }

    function handleResize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      mouse.x = -9999;
      mouse.y = -9999;
      init();
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseOut() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;

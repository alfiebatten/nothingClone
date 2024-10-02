import React, { useRef, useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const ball = document.querySelector(".ball");
  
    let mouseX = 0;
    let mouseY = 0;
  
    let ballX = 0;
    let ballY = 0;
  
    let speed = 0.17;
  
    function animate(){
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;
  
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);
  
      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";
  
      requestAnimationFrame(animate);
    }
  
    animate();
  
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    
  
    document.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Ensure this effect runs only once
  
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'width .2s ease, height .2s ease, transform .2s ease-in-out',
  };

  const dotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'width .2s ease, height .2s ease, transform .2s ease-in-out, opacity .2s ease-in-out',
  };
  
  return (
    <div style={{height: '4px'}}>
      <div className="cursor" style={dotStyle} >
      </div>
      <div className="ball" style={cursorStyle}>

      </div>
    </div>
  );
};

export default Cursor;

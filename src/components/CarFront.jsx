import React from 'react';

function CarFront(props) {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 32;
    const context = canvas.getContext("2d");
  
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 64, 32);
  
    context.fillStyle = "#666666";
    context.fillRect(8, 8, 48, 24);
  
    return  <></>
}

export default CarFront;
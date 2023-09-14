import React from 'react';

function NameCanvasTexture(props) {
    const canvasRef = React.useRef(document.createElement("canvas"));
    const textureRef = React.useRef();

    React.useLayoutEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = 128;
        canvas.height = 32;
        const context = canvas.getContext("2d");
        context.fillStyle = "#78b14b";
        context.fillRect(0, 0, 128, 32);
    
        context.fillStyle = "#0677AE";
        context.fillText("GV Technolab",30,20);
    }, []);
    return (
        <canvasTexture
              ref={textureRef}
              attach="map"
              image={canvasRef.current}
              {...props?.otherProps}
            />
    );
}

export default NameCanvasTexture;
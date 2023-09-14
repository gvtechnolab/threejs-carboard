import React from 'react';

function CabinCanvasTextureSide(props) {
    const canvasRef = React.useRef(document.createElement("canvas"));
    const textureRef = React.useRef();

    React.useLayoutEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = 128;
        canvas.height = 32;
        const context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, 128, 32);
    
        context.fillStyle = "#666666";
        context.fillRect(10, 8, 38, 24);
        context.fillRect(58, 8, 60, 24);
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

export default CabinCanvasTextureSide;
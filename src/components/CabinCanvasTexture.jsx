import React from 'react';

function CabinCanvasTexture(props) {
    const canvasRef = React.useRef(document.createElement("canvas"));
    const textureRef = React.useRef();

    
    React.useLayoutEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = 64;
        canvas.height = 32;

        const context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = "#ffffff";
            context.fillRect(0, 0, 64, 32);
          
            context.fillStyle = "#666666";
            context.fillRect(8, 8, 48, 24);
          
        }
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

export default CabinCanvasTexture;
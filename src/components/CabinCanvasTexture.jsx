import React from 'react';

function CabinCanvasTexture(props) {
    const canvasRef = React.useRef(document.createElement("canvas"));
    const textureRef = React.useRef();

    
    React.useLayoutEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = 70;
        canvas.height = 70;

        const context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = "#ffffff";
            context.fillRect(0, 0, 70, 70);
          
            context.fillStyle = "#666666";
            context.fillRect(4, 4, 60, 60);
          
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
import React from 'react';
import { arcCenterX, trackRadius } from './RenderMap';

function LineMarkings(props) {
    const canvasRef = React.useRef(document.createElement("canvas"));
    const textureRef = React.useRef();
    
    React.useLayoutEffect(() => {
        const canvas = canvasRef.current;

        canvas.width = props.mapWidth;
        canvas.height = props.mapHeight;

        const context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = "#546E90";
            context.fillRect(0, 0, props.mapWidth, props.mapHeight);
          
            context.lineWidth = 2;
            context.fillStyle = "#FF0000";
            context.setLineDash([10,14]);
            
            
            // left circle
            context.beginPath();
            context.fillStyle = "#FF0000";
            context.arc(props?.mapWidth / 2 - arcCenterX, props?.mapHeight / 2, trackRadius,0,Math.PI * 2)
            context.stroke();
            
            // // right circle
            context.beginPath();
            context.arc(props?.mapWidth / 2 + arcCenterX, props?.mapHeight / 2, trackRadius,0,Math.PI * 2)
            context.stroke();
        }
    }, []);
    return (
        <canvasTexture
              ref={textureRef}
              attach="map"
              image={canvasRef.current}
            />
    );
}

export default LineMarkings;
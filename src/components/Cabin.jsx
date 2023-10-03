import React from 'react';
import CabinCanvasTexture from './CabinCanvasTexture';
import CabinCanvasTextureSide from './CabinCanvasTextureSide';
import { Vector2 } from 'three';

function Cabin(props) {
    

    return (
        <mesh position={props?.position} >
            <boxGeometry attach="geometry" args={props?.args || [33, 30, 12]}/>
             {/* Front */}
             <meshLambertMaterial attach="material-0" >
                <CabinCanvasTexture />
            </meshLambertMaterial>
            {/* back */}
            <meshLambertMaterial attach="material-1">
                <CabinCanvasTexture />
            </meshLambertMaterial>
            {/* top */}
            <meshLambertMaterial attach="material-4" color="0xffffff" />
            {/* bottom */}
            <meshLambertMaterial attach="material-5" color="0xffffff" />
            {/* left */}
            <meshLambertMaterial attach="material-2" > 
                <CabinCanvasTextureSide otherProps={{
                    center: new Vector2(0.5, 0.5),
                    rotation: Math.PI,
                    flipY: false
                }}/>
            </meshLambertMaterial>
            {/* right */}
            <meshLambertMaterial attach="material-3" >
                <CabinCanvasTextureSide />
            </meshLambertMaterial>
        </mesh>
    );
}

export default Cabin;
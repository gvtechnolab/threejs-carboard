import React from 'react';
import CabinCanvasTextureSide from './CabinCanvasTextureSide';
import NameCanvasTexture from './NameCanvasTexture';

function MainBox(props) {
    return (
        <mesh position={props?.position} >
        <boxGeometry attach="geometry" args={props?.args || [60, 30, 15]}/>
        <meshLambertMaterial attach="material-1" color={0x78b14b} />
        <meshLambertMaterial attach="material-2" color={0x78b14b} />
        <meshLambertMaterial attach="material-3" color={0x78b14b} />
        <meshLambertMaterial attach="material-4" color={0x78b14b} />
        <meshLambertMaterial attach="material-5" color={0x78b14b} />
        <meshLambertMaterial attach="material-0" >
            <NameCanvasTexture />
        </meshLambertMaterial>
    </mesh>
    );
}

export default MainBox;
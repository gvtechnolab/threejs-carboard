import React from 'react';

function MainBox(props) {
    return (
        <mesh position={props?.position}>
        <boxGeometry attach="geometry" args={props?.args || [60, 15, 30]}/>
        <meshLambertMaterial attach="material" color={0x78b14b} />
    </mesh>
    );
}

export default MainBox;
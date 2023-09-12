import React from 'react';

function Cabin(props) {
    return (
        <mesh position={props?.position}>
        <boxGeometry attach="geometry" args={props?.args || [33, 12, 24]}/>
        <meshLambertMaterial attach="material" color={props?.color || 0xffffff} />
        
    </mesh>
    );
}

export default Cabin;
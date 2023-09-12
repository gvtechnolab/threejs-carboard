import React from 'react';

function Wheels(props) {
    return (
        <mesh position={props?.position}>
        <boxGeometry attach="geometry" args={props?.args || [12, 12, 33]}/>
        <meshLambertMaterial attach="material" color={0x333333} />
    </mesh>
    );
}

export default Wheels;
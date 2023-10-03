import React from 'react';

function Wheels(props) {
    return (
        <mesh position={props?.position} >
        <cylinderGeometry attach="geometry" args={props?.args || [7, 7, 35]}/>
        <meshLambertMaterial attach="material" color={0x333333}/>
    </mesh>
    );
}

export default Wheels;
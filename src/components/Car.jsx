import React from 'react';
import { useFrame } from '@react-three/fiber';
import Wheels from './Wheels';
import MainBox from './MainBox';
import Cabin from './Cabin';

function Car(props) {
    const myMesh = React.useRef()
    useFrame(({ clock }) => {
        // myMesh.current.rotation.z = clock.getElapsedTime()
        // console.log(myMesh.current.position.x );
        // if (myMesh.current.position.x >= 90)
        // myMesh.current.position.x -= 0.5;
        // else if(myMesh.current.position.x <= -170)
        // myMesh.current.position.x += 0.5;
      })
    return <group ref={myMesh} position={[-170,220,0]}>
    <Wheels position={[-18, 10, 7]} />
    <Wheels position={[18, 10, 7]} />
    <MainBox position={[0, 10, 15]} />
    <Cabin position={[-6, 10, 28]} />
 </group>;
}

export default Car;
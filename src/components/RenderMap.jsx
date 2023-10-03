import React from 'react';
import LineMarkings from './LineMarkings';
import { Shape } from '@react-three/drei';
import LeftIsland from './LeftIsland';

export const trackRadius = 225;
export const trackWidth = 45;
export const innerTrackRadius = trackRadius - trackWidth;
export const outerTrackRadius = trackRadius + trackWidth;

export const arcAngle1 = (1 /3) * Math.PI;
export const deltaY  = Math.sin(arcAngle1) * innerTrackRadius;

export const arcAngle2  = Math.asin(deltaY / outerTrackRadius);
export const arcCenterX  = (Math.cos(arcAngle1) * innerTrackRadius + Math.cos(arcAngle2) * outerTrackRadius)/2;

export const arcAngle3  = Math.acos(arcCenterX / innerTrackRadius);
export const arcAngle4  = Math.acos(arcCenterX / outerTrackRadius);



function RenderMap(props) {
    return (
        <mesh>
            <planeGeometry attach="geometry" args={[props?.mapWidth, props?.mapHeight]} />
            <meshLambertMaterial attach="material" >
                <LineMarkings mapWidth={props?.mapWidth} mapHeight={props?.mapHeight} />
            </meshLambertMaterial>
        </mesh>
    );
}

export default RenderMap;
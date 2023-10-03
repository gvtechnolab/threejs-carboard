import { Extrude } from "@react-three/drei";
import React from "react";
import * as THREE from "three"
import { arcAngle1, arcAngle2, arcAngle3, arcCenterX, innerTrackRadius, outerTrackRadius } from "./RenderMap";


const extrudeSettings = { depth: 6, bevelEnabled: false };
const SIDE = 10;
function MiddleIsland(props) {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();
    
    // _shape.moveTo( 10, 0 );
    _shape.absarc( -arcCenterX, 0, innerTrackRadius, arcAngle3, -arcAngle3, true );
    _shape.absarc( arcCenterX, 0, innerTrackRadius, Math.PI + arcAngle3, Math.PI - arcAngle3, true );
    // _shape.absarc( 0, 0, 30, 1, 2 * Math.PI, false );
    
    // _shape.lineTo(SIDE, 0);
    // _shape.lineTo(SIDE, SIDE * 2);
    // _shape.lineTo(0, SIDE * 2);
    // _shape.lineTo(0, SIDE * 3);
    // _shape.lineTo(-SIDE, SIDE * 3);
    // _shape.lineTo(-SIDE, SIDE);
    // _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} {...props}>
        {/* <meshBasicMaterial
          flatShading
          color="#3E64FF"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
          attenuationTint="#fff"
          attenuationDistance={0}
        /> */}
        <meshLambertMaterial attach="material" color={0x67c240}/>
      </Extrude>
    </>
  );
}

export default MiddleIsland;
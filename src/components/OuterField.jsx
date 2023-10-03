import { Extrude } from "@react-three/drei";
import React from "react";
import * as THREE from "three"
import { arcAngle1, arcAngle2, arcAngle4, arcCenterX, innerTrackRadius, outerTrackRadius } from "./RenderMap";


const extrudeSettings = { depth: 6, bevelEnabled: false };
const SIDE = 10;
function OuterField(props) {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();
    
    _shape.moveTo( -props?.mapWidth /2 , -props?.mapHeight /2 );
    _shape.lineTo( 0 , -props?.mapHeight /2 );
    
    _shape.absarc( -arcCenterX, 0, outerTrackRadius, -arcAngle4, arcAngle4, true );
    _shape.absarc( arcCenterX, 0, outerTrackRadius, Math.PI - arcAngle4, Math.PI + arcAngle4, true );
    
    _shape.lineTo( 0 , -props?.mapHeight / 2 );
    _shape.lineTo( props?.mapWidth / 2 , -props?.mapHeight / 2 );
    _shape.lineTo( props?.mapWidth / 2 , props?.mapHeight / 2 );
    _shape.lineTo( -props?.mapWidth / 2 , props?.mapHeight / 2 );
    
    return _shape;
  }, []);

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} {...props}>
    
        <meshLambertMaterial attach="material" color={0x67c240}/>
      </Extrude>
    </>
  );
}

export default OuterField;
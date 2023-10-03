import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, OrbitControls, OrthographicCamera } from "@react-three/drei";
import Wheels from './components/Wheels';
import MainBox from './components/MainBox';
import Cabin from './components/Cabin';
import { MathUtils, Vector2, Vector3 } from 'three';
import RenderMap from './components/RenderMap';
import Car from './components/Car';
import LeftIsland from './components/LeftIsland';
import MiddleIsland from './components/MiddleIsland';
import RightIsland from './components/RightIsland';
import OuterField from './components/OuterField';



function CameraDolly (){
  useFrame((state)=>{
    state.camera.position.lerp(new Vector3(10, 5, 150), 0)
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
    console.log('state cam', state.camera.position);
  })
  return null;
}
function App() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 968;
  const cameraHeight = cameraWidth / aspectRatio;

  return (
    <div className="App">
      <Canvas className="canvas">
          <Car />
         <RenderMap mapWidth={cameraWidth} mapHeight={cameraHeight * 2} />
         <Center>
         <LeftIsland mapWidth={cameraWidth} mapHeight={cameraHeight * 2} />
         <MiddleIsland mapWidth={cameraWidth} mapHeight={cameraHeight * 2} />
         <RightIsland mapWidth={cameraWidth} mapHeight={cameraHeight * 2} />
         <OuterField mapWidth={cameraWidth} mapHeight={cameraHeight * 2} />

         </Center>
        <OrbitControls />
        <ambientLight color={0xffffff} intensity={0.6} />
        <directionalLight color={0xffffff} intensity={0.8} position={[100, -300, 400]} />
        <OrthographicCamera makeDefault 
          left={cameraWidth / -2}
          right={cameraWidth / 2}
          top={cameraHeight / 2}
          bottom={cameraHeight / -2}
          near={0}
          far={1000}
          position={[0, -310, 300]}
          // lookAt={[0, 0, 0]} 
          // rotation={[0, 0, 0]}
          // up={[0,0,0]}
         />
         {/* <CameraDolly /> */}
         <gridHelper args={[10,100,'white', 'grey']} />
      </Canvas>
    </div>
  );
}

export default App;

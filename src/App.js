import './App.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Wheels from './components/Wheels';
import MainBox from './components/MainBox';
import Cabin from './components/Cabin';

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

function App() {
  return (
    <div className="App">
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight color={0xffffff} intensity={0.6} />
        <directionalLight color={0xffffff} intensity={0.8} position={[200, 500, 300]} />
        <OrthographicCamera makeDefault 
          left={cameraWidth / -2}
          right={cameraWidth / 2}
          top={cameraHeight / 2}
          bottom={cameraHeight / -2}
          near={0}
          far={1000}
          position={[200, 200, 200]} 
        //  lookAt={[0, 10, 0]} 
         />
         <group>
            <Wheels position={[-18, 6, 33]} />
            <Wheels position={[18, 6, 33]} />
            <MainBox position={[0, 12, 33]} />
            <Cabin position={[-6, 25.5, 33]} />
            <Cabin args={[12, 12, 33]} color={0x333333} position={[-26, 25.5, 33]} />
         </group>
      </Canvas>
    </div>
  );
}

export default App;

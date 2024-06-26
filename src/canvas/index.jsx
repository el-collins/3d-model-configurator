import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Center
} from "@react-three/drei";

const CanvasModel = () => {
  return (
    <Canvas className="" shadows camera={{ position: [0, 0, 4], fov: 45 }}>
    <ambientLight intensity={0.7} />
    <spotLight
      intensity={0.5}
      angle={0.1}
      penumbra={1}
      position={[10, 15, 10]}
      castShadow
    />
    <Center>
    <Shoe />
    </Center>
    <Environment preset="city" />
    <ContactShadows
      position={[0, -0.8, 0]}
      opacity={0.25}
      scale={10}
      blur={1.5}
      far={0.8}
    />
    <OrbitControls
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      enablePan={false}
    />
  </Canvas>
  )
}

export default CanvasModel
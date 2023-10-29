import { Canvas } from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";
import { Leva } from "leva";

function App() {

  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
      <Leva hidden />
    </Canvas>
  )
}

export default App

import { Canvas } from '@react-three/fiber'
import Box from './Box'

const App = () => {




  return (
      <Canvas onKeyDown={ () => console.log("KeyDown") }>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 4]} />
      </Canvas>
    )
}

export default App;

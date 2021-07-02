import { useState, useRef, useEffect } from "react";
import { useFrame } from '@react-three/fiber'
import { useKeysPressed } from './useKeysPressed'

const Box = (props) => {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Custom hooks for pressing arrow keys
    const keysPressed = useKeysPressed(["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"]);
    const rotate = () => {
      mesh.current.rotation.x += Math.PI/2 + .1;
    }
    useFrame((state, delta) => {
        if (keysPressed["ArrowUp"]) {
            (mesh.current.rotation.x -= .01)
        }
        if (keysPressed["ArrowDown"]) {
            (mesh.current.rotation.x += .01)
        }
        if (keysPressed["ArrowRight"]) {
            (mesh.current.rotation.y += .01)
        }
        if (keysPressed["ArrowLeft"]) {
            (mesh.current.rotation.y -= .01)
        }
    })

    // Every face of the cube is a different color

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : .2}
        onClick={(event) => rotate()}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial attachArray="material" color="red" />
        <meshStandardMaterial attachArray="material" color="green" />
        <meshStandardMaterial attachArray="material" color="blue" />
        <meshStandardMaterial attachArray="material" color="cyan" />
        <meshStandardMaterial attachArray="material" color="magenta" />
        <meshStandardMaterial attachArray="material" color="yellow" />
      </mesh>
    )
}

export default Box;


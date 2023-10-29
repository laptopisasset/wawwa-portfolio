import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./office";


export function Experience() {
    const { animation } = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Falling", "Standing"]
        }
    })

    return (
        <>
            <OrbitControls />
            <Office />
            <ambientLight intensity={1} />
            {/* <Sky />
            <Environment preset="sunset" />
            <group position-y={-1}>
                <Avatar animation={animation} />
                <ContactShadows
                    opacity={0.42}
                    scale={10}
                    blur={1}
                    far={10}
                    resolution={256}
                    color="#000000"
                />
                {animation === "Typing" && (
                    <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
                        <boxGeometry />
                        <meshStandardMaterial color="white" />
                    </mesh>
                )}
                <mesh
                    scale={5}
                    rotation-x={-Math.PI / 2}
                    position-y={-0.001}
                >
                    <planeGeometry />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group> */}
        </>
    )
}
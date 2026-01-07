import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FlickeringLamp() {
	const lightRef = useRef();

	useFrame((state) => {
		if (lightRef.current) {
			// Randomly change intensity within a range
			// Base intensity (100) + random burst (up to 20)
			// Occasional "dip" to simulate a failing bulb
			const time = state.clock.elapsedTime;
			lightRef.current.intensity = 70 + Math.random() * 20;

			// Optional: Add a periodic "big" flicker using Sine
			if (Math.sin(time * 7) > 0.9) {
				lightRef.current.intensity = 30; // Sharp drop
			}
		}
	});

	return (
		<spotLight
			ref={lightRef}
			position={[2, 5, 6]}
			angle={0.15}
			penumbra={0.2}
			intensity={100}
			color="white"
			castShadow
		/>
	);
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!globeRef.current) return;

    const targetX = state.pointer.y * 0.3;
    const targetY = state.pointer.x * 0.5;

    globeRef.current.rotation.x = THREE.MathUtils.lerp(
      globeRef.current.rotation.x,
      targetX,
      3 * delta
    );

    globeRef.current.rotation.y = THREE.MathUtils.lerp(
      globeRef.current.rotation.y,
      targetY,
      3 * delta
    );

    // Slow idle rotation
    globeRef.current.rotation.z += delta * 0.025;
  });

  return (
    <group ref={globeRef}>

      {/* Main holographic wireframe */}
      <mesh>
        <sphereGeometry args={[1.75, 26, 18]} />

        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.30}
          depthWrite={false}
        />
      </mesh>

      {/* Secondary subtle layer */}
      <mesh scale={0.97}>
        <sphereGeometry args={[1.75, 18, 12]} />

        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.10}
          depthWrite={false}
        />
      </mesh>

    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <Canvas
        className="pointer-events-auto"
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Globe />
      </Canvas>

      {/* Very subtle holographic glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[100px]" />

    </div>
  );
}
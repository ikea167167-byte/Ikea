import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingBookProps {
  position: [number, number, number];
  color: string;
  rotation?: [number, number, number];
  scale?: number;
  delay?: number;
}

const FloatingBook: React.FC<FloatingBookProps> = ({ position, color, rotation = [0, 0, 0], scale = 1, delay = 0 }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle bobbing interaction based on hover
    const t = state.clock.getElapsedTime();
    if (hovered) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={1} 
      floatIntensity={2} 
      floatingRange={[-0.2, 0.2]}
    >
      <group 
        ref={meshRef} 
        position={position} 
        rotation={rotation as any}
        scale={hovered ? scale * 1.1 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Book Cover */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.7, 1, 0.15]} />
          <meshStandardMaterial 
            color={color} 
            roughness={0.4} 
            metalness={0.1}
          />
        </mesh>
        {/* Book Pages */}
        <mesh position={[0.02, 0, 0.08]} castShadow>
          <boxGeometry args={[0.66, 0.96, 0.05]} />
          <meshStandardMaterial color="#fdfbf7" />
        </mesh>
        {/* Spine Detail */}
        <mesh position={[-0.34, 0, 0]}>
          <boxGeometry args={[0.05, 0.98, 0.14]} />
          <meshStandardMaterial color={new THREE.Color(color).multiplyScalar(0.8)} />
        </mesh>
      </group>
    </Float>
  );
};

export default FloatingBook;
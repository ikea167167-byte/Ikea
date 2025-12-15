import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import FloatingBook from './FloatingBook';

// Augment JSX namespace to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      fog: any;
      ambientLight: any;
      hemisphereLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const MagicScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={['#1a237e', 5, 20]} />
        
        <Suspense fallback={null}>
          {/* Replaced Environment preset with manual lighting to avoid fetch errors */}
          <ambientLight intensity={0.6} />
          <hemisphereLight intensity={0.5} color="#fdfbf7" groundColor="#1a237e" />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#D4AF37" />

          {/* Background Atmosphere */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#D4AF37" />

          {/* Floating Books Clusters */}
          {/* Left Cluster */}
          <FloatingBook position={[-4, 2, -2]} color="#8B4513" rotation={[0, 0.5, 0.2]} />
          <FloatingBook position={[-5, 0, -3]} color="#1a237e" rotation={[0.2, 0.2, -0.1]} />
          <FloatingBook position={[-3.5, -2, -1]} color="#4CAF50" rotation={[-0.1, 0.8, 0.1]} />

          {/* Right Cluster */}
          <FloatingBook position={[4, 1.5, -2]} color="#E91E63" rotation={[0, -0.5, -0.2]} />
          <FloatingBook position={[5, -1, -3]} color="#D4AF37" rotation={[0.1, -0.3, 0.1]} />
          <FloatingBook position={[3.5, -2.5, -1]} color="#673AB7" rotation={[-0.2, -0.6, 0]} />
          
          {/* Distant Mystery */}
          <FloatingBook position={[0, 3, -8]} color="#2c2c2c" scale={2} rotation={[0, 0, 0.1]} />

        </Suspense>
      </Canvas>
      {/* Vignette Overlay for atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-official-blue/10 via-transparent to-official-blue/20 pointer-events-none" />
    </div>
  );
};

export default MagicScene;
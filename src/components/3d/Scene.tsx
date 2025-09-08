import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingShapes } from './FloatingShapes';
import { Suspense } from 'react';

export function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.3 }}
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          
          {/* Environment */}
          <Environment preset="city" />
          
          {/* 3D Elements */}
          <FloatingShapes />
          
          {/* Controls - simplified for mobile */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            enabled={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
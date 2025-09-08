import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Reduce shapes on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shapesToRender = isMobile ? 3 : 5;

  return (
    <group ref={groupRef}>
      {/* Floating Sphere */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <sphereGeometry args={[0.8, isMobile ? 16 : 32, isMobile ? 16 : 32]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
      </Float>

      {/* Floating Box */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -1, -3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#A855F7" />
        </mesh>
      </Float>

      {/* Floating Octahedron */}
      <Float speed={1.8} rotationIntensity={2} floatIntensity={2.5}>
        <mesh position={[0, -3, -4]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#C084FC" />
        </mesh>
      </Float>

      {/* Additional smaller shapes - only on desktop */}
      {shapesToRender > 3 && (
        <>
          <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
            <mesh position={[-2, -2, -1]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color="#DDD6FE" />
            </mesh>
          </Float>

          <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.8}>
            <mesh position={[3, 3, -2]}>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#F3E8FF" />
            </mesh>
          </Float>
        </>
      )}
    </group>
  );
}
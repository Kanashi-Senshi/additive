import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { Model } from './Model';
import { LoadingSpinner } from './LoadingSpinner';

export function Scene3D() {
  return (
    <div className="w-full h-[600px]">
      <Canvas shadows>
        <Suspense fallback={<LoadingSpinner />}>
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
          <OrbitControls enableDamping />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
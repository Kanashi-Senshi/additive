import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Model() {
  const gltf = useLoader(
    GLTFLoader,
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dental-prosthesis/model.gltf'
  );

  return <primitive object={gltf.scene} scale={0.4} position={[0, 0, 0]} />;
}

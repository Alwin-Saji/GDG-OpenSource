/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const FloatingShapesInner = () => {
  const groupRef = useRef(null);
  
  // Google's brand colors
  const colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
  
  // Create floating shapes with different geometries
  const shapes = useMemo(() => {
    const temp = [];
    const shapeTypes = ['box', 'sphere', 'octahedron', 'tetrahedron', 'torus'];
    
    for (let i = 0; i < 25; i++) {
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      temp.push({
        type: shapeType,
        color: color,
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: 0.3 + Math.random() * 0.8,
        speed: 0.1 + Math.random() * 0.3,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ],
        floatOffset: Math.random() * Math.PI * 2,
        floatAmplitude: 1 + Math.random() * 2,
        floatSpeed: 0.3 + Math.random() * 0.5,
        opacity: 0.15 + Math.random() * 0.25
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    groupRef.current.children.forEach((mesh, i) => {
      const shape = shapes[i];
      
      // Smooth floating motion (vertical)
      mesh.position.y = shape.position[1] + 
        Math.sin(time * shape.floatSpeed + shape.floatOffset) * shape.floatAmplitude;
      
      // Gentle horizontal drift
      mesh.position.x = shape.position[0] + 
        Math.sin(time * shape.floatSpeed * 0.5 + shape.floatOffset * 0.7) * (shape.floatAmplitude * 0.5);
      
      // Depth oscillation for 3D effect
      mesh.position.z = shape.position[2] + 
        Math.cos(time * shape.floatSpeed * 0.3 + shape.floatOffset * 1.3) * (shape.floatAmplitude * 0.7);
      
      // Continuous slow rotation
      mesh.rotation.x += shape.rotationSpeed[0];
      mesh.rotation.y += shape.rotationSpeed[1];
      mesh.rotation.z += shape.rotationSpeed[2];
    });
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => {
        let geometry;
        
        switch (shape.type) {
          case 'box':
            geometry = <boxGeometry args={[1, 1, 1]} />;
            break;
          case 'sphere':
            geometry = <sphereGeometry args={[0.6, 16, 16]} />;
            break;
          case 'octahedron':
            geometry = <octahedronGeometry args={[0.7]} />;
            break;
          case 'tetrahedron':
            geometry = <tetrahedronGeometry args={[0.8]} />;
            break;
          case 'torus':
            geometry = <torusGeometry args={[0.5, 0.2, 8, 16]} />;
            break;
          default:
            geometry = <boxGeometry args={[1, 1, 1]} />;
        }
        
        return (
          <mesh
            key={i}
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {geometry}
            <meshStandardMaterial
              color={shape.color}
              transparent
              opacity={shape.opacity}
              roughness={0.3}
              metalness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const FloatingShapes = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} />
      <FloatingShapesInner />
    </Canvas>
  );
};

export default FloatingShapes;

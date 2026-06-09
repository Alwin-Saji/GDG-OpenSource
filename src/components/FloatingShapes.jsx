/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const FloatingShapesInner = () => {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Google's brand colors
  const colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
  
  // Mouse tracking
  const mousePos = useRef({ x: 0, y: 0 });
  const targetMousePos = useRef({ x: 0, y: 0 });
  
  // Create particles with physics properties
  const particles = useMemo(() => {
    const temp = [];
    const width = viewport.width || 100;
    const height = viewport.height || 100;
    
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * width * 1.2;
      const y = (Math.random() - 0.5) * height * 1.2;
      const z = (Math.random() - 0.5) * 15;
      
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      temp.push({
        // Original position (where particle wants to return)
        homeX: x,
        homeY: y,
        homeZ: z,
        // Current position
        x: x,
        y: y,
        z: z,
        // Velocity
        vx: 0,
        vy: 0,
        vz: 0,
        // Properties
        color: new THREE.Color(colors[colorIndex]),
        size: 0.15 + Math.random() * 0.25,
        mass: 0.5 + Math.random() * 1,
        // Animation
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.5 + Math.random() * 0.5,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        rotation: Math.random() * Math.PI * 2
      });
    }
    return temp;
  }, [viewport.width, viewport.height]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    
    const { pointer, viewport: v } = state;
    const time = state.clock.getElapsedTime();
    
    // Smooth mouse following
    targetMousePos.current.x = (pointer.x * v.width) / 2;
    targetMousePos.current.y = (pointer.y * v.height) / 2;
    
    mousePos.current.x += (targetMousePos.current.x - mousePos.current.x) * 0.05;
    mousePos.current.y += (targetMousePos.current.y - mousePos.current.y) * 0.05;
    
    particles.forEach((particle, i) => {
      // Calculate distance to mouse
      const dx = particle.x - mousePos.current.x;
      const dy = particle.y - mousePos.current.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);
      
      // Repulsion force from mouse
      const repulsionRadius = 8;
      const repulsionStrength = 0.8;
      
      if (distToMouse < repulsionRadius) {
        const force = (1 - distToMouse / repulsionRadius) * repulsionStrength;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force;
        particle.vy += Math.sin(angle) * force;
      }
      
      // Attraction force to home position (elastic return)
      const homeForce = 0.02;
      const homeDx = particle.homeX - particle.x;
      const homeDy = particle.homeY - particle.y;
      const homeDz = particle.homeZ - particle.z;
      
      particle.vx += homeDx * homeForce;
      particle.vy += homeDy * homeForce;
      particle.vz += homeDz * homeForce * 0.5;
      
      // Add subtle floating motion
      const floatAmplitude = 0.3;
      particle.vy += Math.sin(time * particle.floatSpeed + particle.floatOffset) * floatAmplitude * 0.01;
      
      // Apply damping (friction)
      const damping = 0.92;
      particle.vx *= damping;
      particle.vy *= damping;
      particle.vz *= damping;
      
      // Update positions
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      
      // Update rotation
      particle.rotation += particle.rotationSpeed;
      
      // Set instance matrix
      dummy.position.set(particle.x, particle.y, particle.z);
      
      // Scale based on distance to mouse (particles grow near mouse)
      const scaleEffect = distToMouse < repulsionRadius 
        ? 1 + (1 - distToMouse / repulsionRadius) * 0.5
        : 1;
      
      const finalScale = particle.size * scaleEffect;
      dummy.scale.set(finalScale, finalScale, finalScale);
      
      // Rotation
      dummy.rotation.z = particle.rotation;
      
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      
      // Update color attribute if needed
      if (mesh.geometry.attributes.color) {
        mesh.geometry.attributes.color.setXYZ(i, particle.color.r, particle.color.g, particle.color.b);
      }
    });
    
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.geometry.attributes.color) {
      mesh.geometry.attributes.color.needsUpdate = true;
    }
  });
  
  // Create color attribute for instanced mesh
  const colorArray = useMemo(() => {
    const colors = new Float32Array(particles.length * 3);
    particles.forEach((particle, i) => {
      colors[i * 3] = particle.color.r;
      colors[i * 3 + 1] = particle.color.g;
      colors[i * 3 + 2] = particle.color.b;
    });
    return colors;
  }, [particles]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particles.length]}>
      <circleGeometry args={[0.5, 6]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </circleGeometry>
      <meshBasicMaterial 
        vertexColors 
        transparent 
        opacity={0.6}
      />
    </instancedMesh>
  );
};

const FloatingShapes = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <FloatingShapesInner />
    </Canvas>
  );
};

export default FloatingShapes;

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const generateCurlyPoints = (count, side = 'left', width, height) => {
  const points = [];
  const midY = 0;
  const bottomY = -height / 2;
  const offsetX = side === 'left' ? -width / 2 : width / 2;
  const direction = side === 'left' ? 1 : -1;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const y = bottomY + t * height;

    let xOffset = 0;
    const normalizedY = (y - midY) / (height / 2); // -1 to 1

    if (Math.abs(normalizedY) < 0.2) {
      xOffset = -direction * (1 - Math.abs(normalizedY) * 5) * 15;
    } else {
      xOffset = direction * Math.pow(Math.abs(normalizedY) - 0.2, 2) * 20;
    }

    points.push(new THREE.Vector3(offsetX + xOffset, y, 0));
  }
  return points;
};

const generateAnglePoints = (count, side = 'left', width, height) => {
  const points = [];
  const midY = 0;
  const bottomY = -height / 2;
  const offsetX = side === 'left' ? -width / 2 : width / 2;
  const direction = side === 'left' ? 1 : -1;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const y = bottomY + t * height;

    // Create a < or > shape
    // Linear from top to mid, and mid to bottom
    const normalizedY = Math.abs((y - midY) / (height / 2)); // 0 at mid, 1 at ends
    const xOffset = direction * normalizedY * 20 - (direction * 10);

    points.push(new THREE.Vector3(offsetX + xOffset, y, 0));
  }
  return points;
};

const ShapeParticlesInner = ({
  count = 1000,
  shapeCount = 300,
  color = '#4285F4',
  isHovered = false,
  shape = 'curly', // 'curly' or 'angle'
  width = 100,
  height = 100
}) => {
  const meshRef = useRef(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const targetPoints = useMemo(() => {
    const generateFn = shape === 'angle' ? generateAnglePoints : generateCurlyPoints;
    const leftPoints = generateFn(shapeCount / 2, 'left', width, height);
    const rightPoints = generateFn(shapeCount / 2, 'right', width, height);
    return [...leftPoints, ...rightPoints];
  }, [shapeCount, width, height, shape]);

  const particles = useMemo(() => {
    const temp = [];
    const vWidth = 400;
    const vHeight = 400;

    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * vWidth,
        y: (Math.random() - 0.5) * vHeight,
        z: (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        targetIndex: i < shapeCount ? i : -1,
        randomFactor: Math.random(),
        scale: 1
      });
    }
    return temp;
  }, [count, shapeCount]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      let targetScale = isHovered ? 0.8 : 1.0;

      if (isHovered && particle.targetIndex !== -1) {
        // Move towards shape target
        const target = targetPoints[particle.targetIndex];
        const waveX = Math.sin(time * 2 + particle.randomFactor * 10) * 1.5;
        const waveY = Math.cos(time * 2 + particle.randomFactor * 10) * 1.5;

        particle.x += (target.x + waveX - particle.x) * 0.05;
        particle.y += (target.y + waveY - particle.y) * 0.05;
        particle.z += (target.z - particle.z) * 0.05;
      } else if (isHovered && particle.targetIndex === -1) {
        // Extra background particles fade out on hover
        targetScale = 0;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
      } else {
        // Float randomly
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Bounce off bounds loosely to maintain density
        if (Math.abs(particle.x) > 200) particle.vx *= -1;
        if (Math.abs(particle.y) > 200) particle.vy *= -1;
        if (Math.abs(particle.z) > 15) particle.vz *= -1;
      }

      // Smoothly interpolate scale
      particle.scale += (targetScale - particle.scale) * 0.1;

      dummy.position.set(particle.x, particle.y, particle.z);

      // Rotate particles slightly
      dummy.rotation.x = time * 0.5 + particle.randomFactor;
      dummy.rotation.y = time * 0.5 + particle.randomFactor;

      dummy.scale.set(particle.scale, particle.scale, particle.scale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
};

const ShapeParticles = ({ isHovered, color, shape = 'curly' }) => {
  return (
    <Canvas camera={{ position: [0, 0, 80], fov: 35 }} style={{ pointerEvents: 'none' }}>
      <ShapeParticlesInner isHovered={isHovered} color={color} shape={shape} width={40} height={40} count={1000} shapeCount={300} />
    </Canvas>
  );
};

export default ShapeParticles;

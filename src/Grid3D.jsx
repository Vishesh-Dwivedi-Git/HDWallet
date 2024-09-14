import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { LineSegments, BufferGeometry, LineBasicMaterial, Float32BufferAttribute } from 'three';

function RotatingGrid() {
  const ref = React.useRef();

  // Increase the grid size
  const size = 150; // Increased size of the grid
  const divisions = 30; // Increased number of divisions
  const step = size / divisions;
  const vertices = [];

  // Generate vertices for grid lines
  for (let i = -size / 2; i <= size / 2; i += step) {
    vertices.push(i, 0, -size / 2, i, 0, size / 2); // Vertical lines
    vertices.push(-size / 2, 0, i, size / 2, 0, i); // Horizontal lines
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

  const material = new LineBasicMaterial({
    color: 'lightblue',
    transparent: true,
    opacity: 0.5,
    linewidth: 2,
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Slow down rotation around the y-axis
      ref.current.rotation.x += 0.005; // Slow down rotation around the x-axis
    }
  });

  return <lineSegments ref={ref} args={[geometry, material]} />;
}

function Grid3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 200], up: [0, 1, 0], fov: 75 }} // Adjust camera position to view larger grid
      style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', background: 'black', zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingGrid />
    </Canvas>
  );
}

export default Grid3D;

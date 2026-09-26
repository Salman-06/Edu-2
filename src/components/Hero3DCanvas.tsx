import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central "Core of Knowledge" - Wireframe Icosahedron & Inner Glowing Sphere
    const icoGeometry = new THREE.IcosahedronGeometry(5.2, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Cyan-400
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    mainGroup.add(icoMesh);

    // Inner glowing sphere
    const innerGeometry = new THREE.SphereGeometry(2.4, 24, 24);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Sky-600
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 2. Orbital Wisdom Rings
    const ring1Geo = new THREE.TorusGeometry(8, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(10, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, // Amber-400 subtle accent
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 3. Floating Knowledge Particles & Connected Nodes
    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 6 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.8 + 0.3;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    // Shader or simple point material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.18,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // 4. Subtle ambient floating book/graduation abstract shapes (little octahedrons)
    const nodeCount = 8;
    const nodes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.OctahedronGeometry(0.45, 0);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const distance = 8.5;
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        Math.cos(angle) * distance,
        (Math.sin(i * 1.5) * 2),
        Math.sin(angle) * distance
      );
      mainGroup.add(node);
      nodes.push(node);
    }

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / width - 0.5) * 1.5;
      mouseY = (clientY / height - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth target interpolation
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Rotate main group based on mouse and time
        mainGroup.rotation.y = targetX * 0.8 + elapsedTime * 0.08;
        mainGroup.rotation.x = -targetY * 0.6 + Math.sin(elapsedTime * 0.1) * 0.05;

        // Self rotation of central meshes
        icoMesh.rotation.x = elapsedTime * 0.15;
        icoMesh.rotation.y = elapsedTime * 0.2;
        innerMesh.rotation.z = -elapsedTime * 0.12;

        // Orbit rings rotation
        ring1.rotation.z = elapsedTime * 0.1;
        ring2.rotation.z = -elapsedTime * 0.08;

        // Pulse particle opacity subtly
        particleMaterial.opacity = 0.5 + Math.sin(elapsedTime * 1.2) * 0.2;

        // Nodes bobbing
        nodes.forEach((n, idx) => {
          n.rotation.x += 0.01;
          n.rotation.y += 0.02;
          n.position.y += Math.sin(elapsedTime * 2 + idx) * 0.006;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    />
  );
};

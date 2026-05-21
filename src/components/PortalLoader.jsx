import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Sparkles } from '@react-three/drei';

function AbstractShape({ phase }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (phase === 'loading') {
        // Slow idle rotation
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
      } else if (phase === 'transition') {
        // Spin very fast and scale up massively to transition
        meshRef.current.rotation.x += delta * 3;
        meshRef.current.rotation.y += delta * 4;
        
        // Scale up towards camera to engulf screen
        meshRef.current.scale.x += delta * 15;
        meshRef.current.scale.y += delta * 15;
        meshRef.current.scale.z += delta * 15;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <Icosahedron args={[1, 0]}>
          <MeshDistortMaterial 
            color="#ec4899" 
            emissive="#be185d"
            distort={0.4} 
            speed={2} 
            roughness={0.2}
            metalness={0.8}
            wireframe={phase === 'transition'}
          />
        </Icosahedron>
      </mesh>
    </Float>
  );
}

function Scene({ phase }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <pointLight position={[-2, -2, -2]} color="#ec4899" intensity={2} />
      <AbstractShape phase={phase} />
      <AnimatePresence>
        {phase === 'loading' && <Sparkles count={100} scale={5} size={2} speed={0.4} color="#fbcfe8" />}
      </AnimatePresence>
    </>
  );
}

export default function PortalLoader({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // 'loading' -> 'transition' -> 'done'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === 'loading') {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase('transition'), 300);
            return 100;
          }
          return p + Math.floor(Math.random() * 20) + 5;
        });
      }, 150);
      return () => clearInterval(interval);
    } else if (phase === 'transition') {
      const timer = setTimeout(() => {
        setPhase('done');
      }, 1200); // Wait for zoom effect to complete
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'done' && (
        <motion.div
          key="loader-container"
          className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center transition-colors duration-300"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
              <Scene phase={phase} />
            </Canvas>
          </div>

          <AnimatePresence>
            {phase === 'loading' && (
              <motion.div 
                key="loading-ui"
                className="absolute bottom-24 flex flex-col items-center z-10 w-64"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400 font-mono text-sm mb-3 tracking-widest uppercase">
                  Discovering
                </div>
                <div className="w-full h-px bg-gray-800 relative">
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-pink-500 shadow-[0_0_8px_#ec4899]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                  />
                </div>
                <div className="text-pink-500 font-mono text-xs mt-2 text-right w-full">
                  {Math.min(progress, 100)}%
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

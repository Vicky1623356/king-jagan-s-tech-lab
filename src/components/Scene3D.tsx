import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function PhoneModel({ position, rotation: initRotation, scale = 1 }: { position: [number, number, number]; rotation?: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={initRotation} scale={scale}>
      <boxGeometry args={[0.6, 1.2, 0.08]} />
      <meshStandardMaterial
        color="#00ff00"
        emissive="#00ff00"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.7}
      />
      {/* Screen */}
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[0.5, 1.0]} />
        <meshStandardMaterial
          color="#001a00"
          emissive="#003300"
          emissiveIntensity={0.5}
        />
      </mesh>
    </mesh>
  );
}

function AndroidBot() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.7, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <MeshDistortMaterial
            color="#00cc00"
            emissive="#00ff00"
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.3}
            distort={0.1}
            speed={2}
          />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.25, 2.0, 0.55]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.25, 2.0, 0.55]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
        {/* Antennas */}
        <mesh position={[-0.3, 2.5, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
          <meshStandardMaterial color="#00cc00" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.3, 2.5, 0]} rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
          <meshStandardMaterial color="#00cc00" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>
        {/* Body */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 1.4, 32]} />
          <MeshDistortMaterial
            color="#00cc00"
            emissive="#00ff00"
            emissiveIntensity={0.3}
            metalness={0.6}
            roughness={0.3}
            distort={0.05}
            speed={1}
          />
        </mesh>
        {/* Arms */}
        <mesh position={[-1.0, 0.8, 0]}>
          <capsuleGeometry args={[0.15, 0.8, 8, 16]} />
          <meshStandardMaterial color="#00cc00" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[1.0, 0.8, 0]}>
          <capsuleGeometry args={[0.15, 0.8, 8, 16]} />
          <meshStandardMaterial color="#00cc00" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>
        {/* Legs */}
        <mesh position={[-0.3, -0.3, 0]}>
          <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
          <meshStandardMaterial color="#00cc00" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.3, -0.3, 0]}>
          <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
          <meshStandardMaterial color="#00cc00" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  const count = 500;
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00ff00"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00ff00" />
        <pointLight position={[-5, 3, 3]} intensity={0.5} color="#0088ff" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#00ff00" angle={0.3} />
        
        <AndroidBot />
        <PhoneModel position={[-3, 0.5, -1]} rotation={[0.2, 0.5, 0.1]} scale={1.2} />
        <PhoneModel position={[3, 1, -2]} rotation={[-0.1, -0.3, 0.2]} scale={1} />
        <PhoneModel position={[2.5, -0.5, 0]} rotation={[0.3, 1.2, -0.1]} scale={0.8} />
        <Particles />
      </Canvas>
    </div>
  );
}

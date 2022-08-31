import { OrbitControls } from '@react-three/drei';
import { ObjectMap, useFrame, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer, SelectiveBloom, SelectiveBloomProps } from '@react-three/postprocessing';
import React, { FC, useRef, useState, useTransition } from 'react';
import { Group, Mesh, MeshStandardMaterial, PointLight, TextureLoader, TorusBufferGeometry } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface CustomMeshProps {}

const CustomMesh: FC<CustomMeshProps> = (props) => {

  type GLTFObj = GLTF & ObjectMap & {
    nodes: {
      sydanCylinder : Mesh
      alustaCylinder : Mesh
      liekkiCube : Mesh
      pikkuLiekkiCube : Mesh
      kynttilaCylinder : Mesh
    }
  }

  const liekkiRef = useRef<Mesh>(null);
  const pointRef = useRef<PointLight>(null);
  const msmRef = useRef<MeshStandardMaterial>(null);
  const [startTransition, isPending] = useTransition();
  const [isLightOn, setLightOn] = useState<boolean>(false);
  const gltf = useLoader(GLTFLoader ,`${process.env.PUBLIC_URL}/gltf/kynttila4.gltf`) as GLTFObj;
  const liekkiMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/gltf/liekkiColorMap256.png`);
  const kynttilaMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/gltf/kynttilaColorMap256.png`);
  const liekkiAlpha = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/gltf/liekkiAlpha64.png`);
  liekkiMap.flipY = false;
  kynttilaMap.flipY = false;
  liekkiAlpha.flipY = false;
  let prevTime : number = 0, currentTime;
  const groupRef = useRef<Group>(null);

  useFrame((frame) => {
    if(isLightOn && !!liekkiRef.current && pointRef.current) {
      liekkiRef.current.visible = true;
      pointRef.current.visible = true;
      currentTime = frame.clock.elapsedTime;
    if(currentTime > prevTime + 0.1)
      if(!!pointRef.current && !!msmRef.current && !!liekkiRef.current){
        let intensity = Math.random();
        msmRef.current.emissiveIntensity = 0.4 + (intensity * 1);
        pointRef.current.intensity = 0.4 + intensity * 0.05;
        liekkiRef.current.scale.setY(1.34 + intensity * 0.5)
        prevTime = currentTime;
      }
    }
    else if (!!liekkiRef.current && pointRef.current) {
      liekkiRef.current.visible = false;
      pointRef.current.visible = false;
    }
  });



    return (
    
      <group {...props} dispose={null} ref={groupRef} scale={1.5}>
        <ambientLight intensity={0.2} />
        <OrbitControls></OrbitControls>
        <group {...props} dispose={null} onClick={() => setLightOn(!isLightOn) }>
        <group position={[0, 1.4, 0]} scale={0.17}>
        <pointLight
          intensity={0.02}
          decay={2}
          color="#ff6600"
          rotation={[-Math.PI / 2, 0, 0]}
          ref={pointRef}
        />
        </group>
        <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.sydanCylinder.geometry}
        material={gltf.materials['sydanMaterial']}
        position={[0, 1.53, 0]}
        scale={[0.27, 0.81, 0.27]}
        />
        <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.alustaCylinder.geometry}
        material={gltf.materials['alustaMaterial']}
        position={[0, 0.16, 0]}
        scale={[0.77, 0.67, 0.77]}
        />
        
        <mesh
        ref={liekkiRef}
        geometry={gltf.nodes.liekkiCube.geometry}
        material={gltf.materials['liekkiMaterial']}
        position={[0, 1.64, 0]}
        scale={[0.33, 1.34, 0.33]}
        >
        <meshStandardMaterial ref={msmRef} attach={'material'} map={liekkiMap} transparent={true} emissive={'#ffdba1'}  emissiveMap={liekkiMap} emissiveIntensity={0.2} alphaMap={liekkiAlpha} />
        </mesh>
       
        <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.kynttilaCylinder.geometry}
        material={gltf.materials.kynttilaMaterial}
        position={[0, 0.68, 0]}
        >
        <meshStandardMaterial attach={'material'} map={kynttilaMap} />
        </mesh>
    
        <mesh
        castShadow
        receiveShadow
        geometry={gltf.nodes.pikkuLiekkiCube.geometry}
        material={gltf.materials['pikkuLiekkiMaterial']}
        position={[0, 1.6, 0]}
        scale={[0.11, 0.43, 0.11]}
        />
        </group>
      </group>
    
    )
  
};

export default CustomMesh;

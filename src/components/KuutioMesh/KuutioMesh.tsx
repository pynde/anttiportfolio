import { OrbitControls, TransformControls, useAnimations, useGLTF } from '@react-three/drei';
import { GroupProps, ObjectMap, ThreeEvent, useFrame, useLoader } from '@react-three/fiber';
import React, { FC, useRef } from 'react';
import { DirectionalLight, Mesh, MeshStandardMaterial, Object3D, TextureLoader, Vector3 } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


interface KuutioMeshProps {}

const KuutioMesh: FC<KuutioMeshProps> = (props : KuutioMeshProps) => {

  type GLTFObj = GLTF & ObjectMap & {
    nodes: {
      kubiikkeli : Mesh
    }
  }

  const group = useRef(null);
  const meshRef = useRef<Mesh>(null);
  const { nodes, materials, animations } = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/gltf/kuutio.gltf`) as GLTFObj;
  const colorMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/gltf/kuutioColorMap.png`);
  const emitMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/gltf/kuutioEmitMap.png`);
  const roughnessMap = useLoader(TextureLoader, `${process.env.PUBLIC_URL}/gltf/kuutioRoughnessMap.png`);
  colorMap.flipY = false;
  emitMap.flipY = false;
  roughnessMap.flipY = false;

  const { actions } = useAnimations(animations, group); 

  useFrame(() => {
    meshRef.current?.rotateX(0.003);
    meshRef.current?.rotateY(0.003);
  })

  return (

      <group ref={group} {...props} dispose={null}>
      <group name="kubiikkeliGroup">
        <OrbitControls/>
        <ambientLight intensity={1} />
        <directionalLight intensity={2} position={[0,10,5]}/>
        <mesh 
          position={[0,0,0]}
          name="kubiikkeli"
          castShadow
          receiveShadow
          geometry={nodes.kubiikkeli.geometry}
          material={materials["Material.001"]}
          morphTargetDictionary={nodes.kubiikkeli.morphTargetDictionary}
          morphTargetInfluences={nodes.kubiikkeli.morphTargetInfluences}
          ref={meshRef}
        >
          
          <meshStandardMaterial
          map={colorMap}
          emissive={'#ffffff'}
          emissiveMap={emitMap}
          roughnessMap={roughnessMap}
          roughness={1}
          attach={'material'}
          emissiveIntensity={2}
          />
        </mesh>
      </group>
    </group>
  )
};

export default KuutioMesh;

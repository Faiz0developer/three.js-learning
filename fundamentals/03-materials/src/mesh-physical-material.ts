import * as THREE from "three";

export function createPhysicalMaterialScene(scene: THREE.Scene) {
  const geometry = new THREE.SphereGeometry(1.5, 64, 64);

  const standardMaterial = new THREE.MeshStandardMaterial({
    color: "orange",
    roughness: 0.3,
    metalness: 0,
  });

  //   const material = new THREE.MeshPhysicalMaterial({
  //     color: "orange",
  //     roughness: 0.3,
  //     metalness: 0,
  //     clearcoat: 1,
  //     clearcoatRoughness: 0.5,
  //   });

  const physicalMaterial = new THREE.MeshPhysicalMaterial({
    color: "0xff0000",
    roughness: 0.3,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  const standardSphere = new THREE.Mesh(geometry, standardMaterial);

  standardSphere.position.x = -2;

  const physicalSphere = new THREE.Mesh(geometry, physicalMaterial);

  physicalSphere.position.x = 2;

  scene.add(standardSphere, physicalSphere);

  //   const sphere = new THREE.Mesh(geometry, material);

  //   scene.add(sphere);
}

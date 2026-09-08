import * as THREE from "three";

export function createStandardMaterialScene(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  //   const material = new THREE.MeshStandardMaterial({
  //     color: "orange",
  //     roughness: 0.1,
  //     metalness: 0.5,
  //   });

  const plasticMaterial = new THREE.MeshStandardMaterial({
    color: "orange",
    roughness: 0.4,
    metalness: 0,
  });

  const metalMaterial = new THREE.MeshStandardMaterial({
    color: "orange",
    roughness: 0.25,
    metalness: 1,
  });

  const plasticCube = new THREE.Mesh(geometry, plasticMaterial);

  plasticCube.position.x = -2;

  const metalCube = new THREE.Mesh(geometry, metalMaterial);

  metalCube.position.x = 2;

  scene.add(plasticCube, metalCube);

  //   const cube = new THREE.Mesh(geometry, material);

  //   scene.add(cube);
}

import * as THREE from "three";

export function createBasicMaterialScene(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  const material = new THREE.MeshBasicMaterial({
    color: "orange",
    wireframe: true,
  });

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
}

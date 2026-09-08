import * as THREE from "three";

export function createStandardMaterialSceneOpacity(scene: THREE.Scene) {
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  const material1 = new THREE.MeshStandardMaterial({
    color: "red",
    transparent: true,
    opacity: 0.5,
  });

  const material2 = new THREE.MeshStandardMaterial({
    color: "blue",
    transparent: true,
    opacity: 0.5,
  });

  const cube1 = new THREE.Mesh(geometry, material1);

  cube1.position.x = -0.5;

  const cube2 = new THREE.Mesh(geometry, material2);

  cube2.position.x = 0.5;

  //   cube1.renderOrder = 1;
  //   cube2.renderOrder = 2;
  //   cube1.renderOrder = 2;
  //   cube2.renderOrder = 1;

  scene.add(cube1, cube2);
}

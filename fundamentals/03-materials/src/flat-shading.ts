import * as THREE from "three";

export function createFlatShadingScene(scene: THREE.Scene) {
  const geometry1 = new THREE.SphereGeometry(1.2, 6, 6);
  const geometry2 = new THREE.SphereGeometry(1.2, 12, 12);
  const geometry3 = new THREE.SphereGeometry(1.2, 32, 32);

  const material = new THREE.MeshStandardMaterial({
    color: "orange",
    flatShading: true,
    wireframe: true,
  });

  const sphere1 = new THREE.Mesh(geometry1, material);
  const sphere2 = new THREE.Mesh(geometry2, material);
  const sphere3 = new THREE.Mesh(geometry3, material);
  sphere1.position.x = -5.5;
  sphere2.position.x = 0;
  sphere3.position.x = 3.5;

  scene.add(sphere1, sphere2, sphere3);
}

import * as THREE from "three";

export function createLambertMaterialScene(scene: THREE.Scene) {
  const geometry = new THREE.SphereGeometry(1.5, 64, 64);

  const basicMate = new THREE.MeshBasicMaterial({
    color: "orange",
  });
  const material = new THREE.MeshLambertMaterial({
    color: "orange",
    emissive: "red",
    emissiveIntensity: 1,
  });

  const lamberSphere = new THREE.Mesh(geometry, material);
  const basicSphere = new THREE.Mesh(geometry, basicMate);
  lamberSphere.position.x = -4;

  scene.add(lamberSphere, basicSphere);
}

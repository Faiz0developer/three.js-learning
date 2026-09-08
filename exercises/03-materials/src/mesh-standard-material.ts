import * as THREE from "three";

export function createStandardMaterialScene(scene: THREE.Scene) {
  const geometry = new THREE.SphereGeometry();

  const plasticMaterial = new THREE.MeshStandardMaterial({
    color: "orange",
    roughness: 0.4,
    metalness: 0,
  });
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: "orange",
    roughness: 0.2,
    metalness: 1,
  });
  const matteMaterial = new THREE.MeshStandardMaterial({
    color: "orange",
    roughness: 0.9,
    metalness: 0,
  });
  const plasticSphere = new THREE.Mesh(geometry, plasticMaterial);
  const metalSphere = new THREE.Mesh(geometry, metalMaterial);
  const matteSphere = new THREE.Mesh(geometry, matteMaterial);

  plasticSphere.position.x = -4;
  metalSphere.position.x = -2;

  scene.add(plasticSphere, metalSphere, matteSphere);
}

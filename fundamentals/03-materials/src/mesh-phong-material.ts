import * as THREE from "three";

export function createPhongMaterialScene(scene: THREE.Scene) {
  const geometry = new THREE.SphereGeometry(1.5, 64, 64);

  const material = new THREE.MeshPhongMaterial({
    color: "orange",
    shininess: 100,
    specular: "blue",
    emissive: "red",
    emissiveIntensity: 0.1,
  });

  const sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);
}

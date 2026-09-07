import * as THREE from "three";

export const camera = new THREE.PerspectiveCamera(
  // 60,
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
// camera.position.set(5, 4, 8);
camera.position.set(5, 3.5, 7);
camera.lookAt(0, 0, 0);

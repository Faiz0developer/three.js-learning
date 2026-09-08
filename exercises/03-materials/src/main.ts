import * as THREE from "three";

import { createStandardMaterialScene } from "./mesh-standard-material";

const scene = new THREE.Scene();

scene.background = new THREE.Color("#111111");

createStandardMaterialScene(scene);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.set(4, 3, 6);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight("white", 5);

light.position.set(3, 5, 4);
// light.position.set(-3, 2, 4);

scene.add(light);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

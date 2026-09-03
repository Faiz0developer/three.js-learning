// FOV, FAR,NEAR,lookAT()

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 6;
camera.position.set(5, 2, 8);
camera.lookAt(0, 0, 0);
// (0, 3, 10)
// (5, 3, 10)
// (10, 5, 10)
// (-5, 2, 8)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const boxGeo = new THREE.BoxGeometry();
const sphereGeo = new THREE.SphereGeometry();
const cylinderGeo = new THREE.CylinderGeometry();
const torusGeo = new THREE.TorusGeometry();

const boxMate = new THREE.MeshStandardMaterial({
  color: "Red",
});
const sphereMate = new THREE.MeshStandardMaterial({
  color: "Blue",
});
const cylinderMate = new THREE.MeshStandardMaterial({
  color: "Green",
});
const torusMate = new THREE.MeshStandardMaterial({
  color: "Yellow",
});

const cube = new THREE.Mesh(boxGeo, boxMate);
const sphere = new THREE.Mesh(sphereGeo, sphereMate);
const cylinder = new THREE.Mesh(cylinderGeo, cylinderMate);
const torus = new THREE.Mesh(torusGeo, torusMate);
cube.position.x = -6;
sphere.position.x = -2;
cylinder.position.x = 2;
torus.position.x = 6;
// cube.position.z = 2;

cube.rotation.x = 0.4;
sphere.scale.y = 2;
cylinder.rotation.z = 0.5;
torus.rotation.x = 0.5;
scene.add(cube, sphere, cylinder, torus);
renderer.render(scene, camera);

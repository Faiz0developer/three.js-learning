import * as THREE from "three";

const scene = new THREE.Scene();
// scene.background = new THREE.Color("skyblue");

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 6;

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

cube.rotation.x = 0.4;
sphere.scale.y = 2;
cylinder.rotation.z = 0.5;
torus.rotation.x = 0.5;

//  ***********DirectionalLight************
// const light = new THREE.DirectionalLight("white", 2);
// const light = new THREE.DirectionalLight("white", 0.5);
// const light = new THREE.DirectionalLight("white", 1);
// const light = new THREE.DirectionalLight("white", 3);
// const light = new THREE.DirectionalLight("yellow", 2);
// const light = new THREE.DirectionalLight("red", 2);
// const directionalLight = new THREE.DirectionalLight("white", 2);
// directionalLight.position.set(5, 5, 5);
// light.position.set(5, 5, -5);
// light.position.set(0, 10, 0);
// scene.add(directionalLight);

//  ***********AmbientLight************
// const ambientLight = new THREE.AmbientLight("white", 1);
// const ambientLight = new THREE.AmbientLight("white", 0.2);
// const ambientLight = new THREE.AmbientLight("white", 0.5);
// const ambientLight = new THREE.AmbientLight("white", 0.3);
// scene.add(ambientLight);

// ******* AmbientLight + DirectionalLight *******

// const directionalLight = new THREE.DirectionalLight("white", 2);
// directionalLight.position.set(5, 5, 5);
// const ambientLight = new THREE.AmbientLight("white", 0.3);
// scene.add(ambientLight, directionalLight);

// ******* PointLight *******
// const pointLight = new THREE.PointLight("white", 10);
// pointLight.position.set(0, 3, 5);
// pointLight.position.set(5, 3, 5);
// pointLight.position.set(-5, 3, 5);
// scene.add(pointLight);

// ******* SpotLight *******
const spotLight = new THREE.SpotLight("white", 20);
spotLight.position.set(0, 5, 5);
scene.add(spotLight);

scene.add(cube, sphere, cylinder, torus);
renderer.render(scene, camera);

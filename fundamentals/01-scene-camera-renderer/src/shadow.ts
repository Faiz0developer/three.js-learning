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

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

const boxGeo = new THREE.BoxGeometry();

const boxMate = new THREE.MeshStandardMaterial({
  color: "Red",
});

const cube = new THREE.Mesh(boxGeo, boxMate);
cube.position.set(-3, -1, 0);
cube.rotation.x = 0.4;
scene.add(cube);

const light = new THREE.DirectionalLight("white", 2);
light.position.set(5, 5, 5);
// light.position.set(-5, 5, 5);
// light.position.set(0, 5, 5);
light.castShadow = true;
scene.add(light);
// const light = new THREE.PointLight("white", 2);
// light.position.set(5, 5, 5);
// light.position.set(-5, 5, 5);
// light.position.set(0, 5, 5);
// light.castShadow = true;
// scene.add(light);
// const light = new THREE.SpotLight("white", 2);
// // light.position.set(5, 5, 5);
// // light.position.set(-5, 5, 5);
// light.position.set(0, 5, 5);
// light.castShadow = true;
// scene.add(light);

// light.shadow.mapSize.width = 256;
// light.shadow.mapSize.height = 256;
// light.shadow.mapSize.width = 512;
// light.shadow.mapSize.height = 512;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

// light.shadow.bias = 0;
light.shadow.bias = -0.001;
// light.shadow.bias = -0.01;

// light.shadow.normalBias = 0;
light.shadow.normalBias = 0.01;
// light.shadow.normalBias = 0.05;

// cube.castShadow = false;
cube.castShadow = true;

const sphereGeo = new THREE.SphereGeometry();

const sphere = new THREE.Mesh(
  sphereGeo,
  new THREE.MeshStandardMaterial({
    color: "blue",
  }),
);

sphere.position.set(0, -1, 0);
sphere.castShadow = true;

scene.add(sphere);

const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMat = new THREE.MeshStandardMaterial({ color: "white" });
const ground = new THREE.Mesh(groundGeo, groundMat);

ground.rotation.x = -Math.PI / 2;
ground.position.y = -3;
ground.receiveShadow = true;
// ground.receiveShadow = false;
scene.add(ground);
renderer.render(scene, camera);

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.01,
  1000,
);

camera.position.z = 5;

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const geo = new THREE.SphereGeometry(2, 4, 2);
// const geo = new THREE.SphereGeometry(2, 8, 4);
// const geo = new THREE.SphereGeometry(2, 16, 8);
// const geo = new THREE.SphereGeometry(2, 32, 16);
// const geo = new THREE.SphereGeometry(2, 64, 32);
const mate = new THREE.MeshStandardMaterial({ color: "white" });
const sphere = new THREE.Mesh(geo, mate);
scene.add(sphere);

const light = new THREE.DirectionalLight("white", 3);
light.position.set(5, 5, 5);
scene.add(light);

renderer.render(scene, camera);

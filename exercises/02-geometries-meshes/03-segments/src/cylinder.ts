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

const geo = new THREE.CylinderGeometry(1, 1, 2, 4);
const geo1 = new THREE.CylinderGeometry(1, 1, 2, 8);
const geo2 = new THREE.CylinderGeometry(1, 1, 2, 32);
const mate = new THREE.MeshStandardMaterial({ color: "white" });
const cylinder = new THREE.Mesh(geo, mate);
cylinder.position.x = -5;
const cylinder1 = new THREE.Mesh(geo1, mate);
cylinder1.position.x = -2;
const cylinder2 = new THREE.Mesh(geo2, mate);
cylinder2.position.x = 1;
scene.add(cylinder, cylinder1, cylinder2);

const light = new THREE.DirectionalLight("white", 3);
light.position.set(-4, 5, 5);
scene.add(light);

renderer.render(scene, camera);

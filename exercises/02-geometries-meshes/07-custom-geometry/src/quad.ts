import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();

const positions = new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0]);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const index = [0, 1, 2, 0, 2, 3];
geometry.setIndex(index);

const material = new THREE.MeshBasicMaterial({
  color: "green",
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

renderer.render(scene, camera);

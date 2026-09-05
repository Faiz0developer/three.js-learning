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
// const position = new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0]);
// const position = new Float32Array([0, 2, 0, -2, -1, 0, 2, -1, 0]);
const position = new Float32Array([0, 2, 0, -2, -1, 0, 1, -1, 0]);
geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
const material = new THREE.MeshBasicMaterial({
  color: "red",
  side: THREE.DoubleSide,
});

const triangle = new THREE.Mesh(geometry, material);

scene.add(triangle);

renderer.render(scene, camera);

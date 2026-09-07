import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

// camera.position.z = 7;
camera.position.set(4, 3, 12);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();

const positions = new Float32Array([
  -3, 0, 0, -3, -6, 0, 3, -6, 0, 3, 0, 0, -3, 0, 4, -3, -6, 4, 3, -6, 4, 3, 0,
  4, 0, 4, 0, 0, 4, 4,
]);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const index = [
  0, 1, 2, 0, 2, 3, 2, 6, 7, 2, 3, 7, 4, 6, 7, 4, 5, 6, 0, 1, 5, 0, 4, 5, 0, 3,
  4, 3, 4, 7, 1, 2, 5, 2, 5, 6, 0, 3, 8, 3, 8, 9, 4, 8, 9, 4, 7, 9, 3, 7, 9, 0,
  4, 8,
];

geometry.setIndex(index);

const material = new THREE.MeshBasicMaterial({
  color: "brown",
  side: THREE.DoubleSide,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 1;
// mesh.rotation.y = 0.3;
scene.add(mesh);

renderer.render(scene, camera);

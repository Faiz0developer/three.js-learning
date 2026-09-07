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
camera.position.set(4, 3, 6);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();

const positions = new Float32Array([
  0, 0, 1, -1, 0, 0, 0, 0, -1, 1, 0, 0, 0, 1, 0,
]);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const index = [0, 1, 2, 0, 2, 3, 1, 2, 4, 2, 3, 4, 0, 3, 4, 0, 1, 4];
geometry.setIndex(index);

const material = new THREE.MeshBasicMaterial({
  color: "green",
  side: THREE.DoubleSide,
  wireframe: false,
});

const mesh = new THREE.Mesh(geometry, material);
// mesh.rotation.y = 0.6;
// mesh.rotation.x = 0.2;
// mesh.rotation.x = 0.5;
mesh.rotation.y = 0.8;

scene.add(mesh);

renderer.render(scene, camera);

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

// const positions = new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 1]);
const positions = new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0]);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

// const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]);
// const normals = new Float32Array([0, 0, -1, 0, 0, -1, 0, 0, -1]);
// const normals = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0]);
// geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
// geometry.setIndex([0, 1, 2]);
geometry.setIndex([0, 2, 1]);

geometry.computeVertexNormals();

console.log(geometry.attributes.normal);
console.log(geometry.attributes.normal.array);

const material = new THREE.MeshStandardMaterial({
  color: "red",
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const light = new THREE.DirectionalLight("white", 3);

light.position.set(2, 2, 5);

scene.add(light);

renderer.render(scene, camera);

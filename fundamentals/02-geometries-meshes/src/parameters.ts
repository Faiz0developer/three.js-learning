import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

// camera.position.z = 8;
camera.position.set(5, 3, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// new THREE.BoxGeometry(2, 3, 1);
// new THREE.BoxGeometry(5, 3, 1);
// new THREE.BoxGeometry(1, 3, 1);
// new THREE.BoxGeometry(2, 5, 1);
// const geometry = new THREE.BoxGeometry(2, 3, 9);

// const geometry = new THREE.SphereGeometry(2);
// const geometry = new THREE.SphereGeometry(0.5);

// const geometry = new THREE.CylinderGeometry(1, 2, 4);
// const geometry = new THREE.CylinderGeometry(2, 1, 4);

// const geometry = new THREE.TorusGeometry(2, 0.3);
const geometry = new THREE.TorusGeometry(2, 0.8);

const material = new THREE.MeshStandardMaterial({
  color: "red",
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const light = new THREE.DirectionalLight("white", 2);

light.position.set(5, 5, 5);

scene.add(light);

renderer.render(scene, camera);

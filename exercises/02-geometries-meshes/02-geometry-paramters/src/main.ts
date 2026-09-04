import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
);

camera.position.set(5, 3, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// const boxGeo = new THREE.BoxGeometry(2, 3, 1);
const boxGeo = new THREE.BoxGeometry(5, 1, 2);
// const sphereGeo = new THREE.SphereGeometry(1.5);
// const sphereGeo = new THREE.SphereGeometry(1);
const sphereGeo = new THREE.SphereGeometry(2);
// const cylinderGeo = new THREE.CylinderGeometry(1, 2, 3);
// const cylinderGeo = new THREE.CylinderGeometry(0.5, 2, 4);
const cylinderGeo = new THREE.CylinderGeometry(2, 0.5, 4);
// const torusGeo = new THREE.TorusGeometry(2, 0.5);
const torusGeo = new THREE.TorusGeometry(2, 0.1);

const material = new THREE.MeshStandardMaterial({
  color: "red",
});

const cube = new THREE.Mesh(boxGeo, material);
cube.position.x = -20;
const sphere = new THREE.Mesh(sphereGeo, material);
sphere.position.x = -10;
const cylinder = new THREE.Mesh(cylinderGeo, material);
cylinder.position.x = 0;
const torus = new THREE.Mesh(torusGeo, material);
torus.position.x = 6;

scene.add(cube, sphere, cylinder, torus);

const light = new THREE.DirectionalLight("white", 2);

light.position.set(5, 5, 5);

scene.add(light);

renderer.render(scene, camera);

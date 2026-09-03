import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
);

camera.position.z = 5;
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const boxGeo = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: "red" });
const cube = new THREE.Mesh(boxGeo, material);
cube.position.x = -6;

const sphereGeo = new THREE.SphereGeometry();
const sphere = new THREE.Mesh(sphereGeo, material);
sphere.position.x = -3;
sphere.scale.y = 2;

const cylinderGeo = new THREE.CylinderGeometry();
const cylinder = new THREE.Mesh(cylinderGeo, material);
cylinder.position.x = 0.5;
cylinder.scale.x = 2;

const coneGeo = new THREE.ConeGeometry();
const cone = new THREE.Mesh(coneGeo, material);
cone.position.x = 4;
cone.scale.z = 2;

const torusGeo = new THREE.TorusGeometry();
const torus = new THREE.Mesh(torusGeo, material);
torus.position.x = 4;
torus.scale.x = 1.5;

scene.add(cube, sphere, cylinder, cone, torus);

const light = new THREE.DirectionalLight("white", 2);
light.position.set(5, 5, 5);
scene.add(light);

renderer.render(scene, camera);

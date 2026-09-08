import * as THREE from "three";
// import "./style.css";

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const texture = textureLoader.load("/textures/test.jpg");
const cubeTexture = textureLoader.load("/textures/brick.jpg");

const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);

const material = new THREE.MeshBasicMaterial({
  map: texture,
});
const cubeMaterial = new THREE.MeshBasicMaterial({
  map: texture,
});

const sphere = new THREE.Mesh(sphereGeometry, material);
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.x = 2;
sphere.position.x = -2;
scene.add(sphere, cube);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

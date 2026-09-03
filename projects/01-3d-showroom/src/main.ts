import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 6;

camera.lookAt(0, 0, 0);

const boxGeo = new THREE.BoxGeometry();
const boxMate = new THREE.MeshStandardMaterial({ color: "red" });
const cube = new THREE.Mesh(boxGeo, boxMate);
cube.position.x = -6;
cube.rotation.y = 3;
cube.rotation.x = -3;
cube.castShadow = true;

const sphereGeo = new THREE.SphereGeometry();
const sphereMate = new THREE.MeshStandardMaterial({ color: "blue" });
const sphere = new THREE.Mesh(sphereGeo, sphereMate);
sphere.position.x = 0;
sphere.position.y = 2;
sphere.castShadow = true;

const cylinderGeo = new THREE.CylinderGeometry();
const cylinderMate = new THREE.MeshStandardMaterial({ color: "Green" });
const cylinder = new THREE.Mesh(cylinderGeo, cylinderMate);
cylinder.position.x = 6;
cylinder.scale.y = 2;
cylinder.castShadow = true;

const torusGeo = new THREE.TorusGeometry();
const torusMate = new THREE.MeshStandardMaterial({ color: "Yellow" });
const torus = new THREE.Mesh(torusGeo, torusMate);
torus.position.y = -2;
torus.castShadow = true;

scene.add(cube, sphere, cylinder, torus);

const dirLight = new THREE.DirectionalLight("white", 2);
dirLight.position.set(5, 5, 5);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
const pointLight = new THREE.PointLight("white", 10);
pointLight.position.set(-5, 5, 5);
// pointLight.castShadow = true;
scene.add(dirLight, pointLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMate = new THREE.MeshStandardMaterial({ color: "white" });
const ground = new THREE.Mesh(groundGeo, groundMate);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2;
ground.receiveShadow = true;
scene.add(ground);

const timer = new THREE.Timer();
function animate() {
  requestAnimationFrame(animate);
  const delta = timer.getDelta();
  const elapsedTime = timer.getElapsed();

  cube.rotation.y += 1 * delta;
  cube.rotation.x += 1 * delta;
  timer.update();

  sphere.position.x = Math.sin(elapsedTime) * 3;
  sphere.position.y = Math.cos(elapsedTime) * 2;

  cylinder.scale.x = Math.sin(elapsedTime) * 2;

  torus.position.y = Math.sin(elapsedTime);

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
});

animate();

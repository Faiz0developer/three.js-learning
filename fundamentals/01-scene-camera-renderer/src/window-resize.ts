import * as THREE from "three";

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

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const boxGeo = new THREE.BoxGeometry();
const boxMat = new THREE.MeshStandardMaterial({ color: "red" });
const cube = new THREE.Mesh(boxGeo, boxMat);
cube.castShadow = true;
cube.rotation.x = 2;

const timer = new THREE.Timer();

function animate() {
  requestAnimationFrame(animate);

  timer.update();

  const delta = timer.getDelta();

  cube.rotation.y += 1 * delta;

  renderer.render(scene, camera);
}

scene.add(cube);

const light = new THREE.DirectionalLight("white", 2);
light.position.set(-5, 5, 5);
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
scene.add(light);

const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMate = new THREE.MeshStandardMaterial({ color: "white" });
const ground = new THREE.Mesh(groundGeo, groundMate);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -3;
ground.receiveShadow = true;
scene.add(ground);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();

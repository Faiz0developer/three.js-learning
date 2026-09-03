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
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const boxGeo = new THREE.BoxGeometry();
const boxMat = new THREE.MeshStandardMaterial({ color: "red" });
const cube = new THREE.Mesh(boxGeo, boxMat);
cube.castShadow = true;
cube.rotation.x = 2;

const sphereGeo = new THREE.SphereGeometry();
const sphereMat = new THREE.MeshStandardMaterial({ color: "blue" });
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.castShadow = true;
sphere.position.x = 3;

const timer = new THREE.Timer();

function animate() {
  requestAnimationFrame(animate);

  timer.update();
  //   cube.rotation.y += 0.01;
  //   cube.rotation.y += -0.01;
  //   cube.rotation.x += 0.01;
  //   cube.rotation.x += -0.01;
  // cube.rotation.z += 0.01;
  //   cube.rotation.z += -0.01;
  //   cube.position.x += 0.01;
  //   cube.position.x += -0.01;
  //   cube.position.y += -0.01;
  //   cube.position.y += 0.01;
  //   cube.position.z += 0.01;
  //   cube.position.z += -0.01;
  //   cube.scale.x += 0.01;
  //   cube.scale.x += -0.01;
  //   cube.scale.y += 0.01;
  //   cube.scale.y += -0.01;
  //   cube.scale.z += 0.01;
  //   cube.scale.z += -0.01;

  //   cube.rotation.y += 0.01;
  //   sphere.rotation.x += 0.05;

  //   const delta = timer.getDelta();
  //   cube.rotation.y += 1 * delta;
  //   cube.rotation.y += 0.5 * delta;
  //   cube.rotation.y += 2 * delta;
  //   sphere.rotation.x += 5 * delta;
  //   cube.position.x += -2 * delta;

  //   const elapsedTime = timer.getElapsed();
  //   cube.position.x = Math.sin(elapsedTime);
  //   cube.position.x = Math.sin(elapsedTime) * 3;
  //   cube.position.y = Math.sin(elapsedTime);
  //   cube.position.y = Math.sin(elapsedTime) * 2;
  //   cube.rotation.x = Math.sin(elapsedTime);
  //   cube.rotation.x = Math.sin(elapsedTime) * 2;
  //   cube.rotation.y = Math.sin(elapsedTime);
  //   cube.rotation.y = Math.sin(elapsedTime) * 2;
  //   cube.position.x = Math.cos(elapsedTime);
  //     cube.position.x = Math.cos(elapsedTime) * 3;
  //   cube.position.y = Math.cos(elapsedTime);
  //   cube.position.y = Math.cos(elapsedTime * 8) * 2;
  //     cube.rotation.x = Math.cos(elapsedTime);
  //   cube.rotation.x = Math.cos(elapsedTime) * 2;
  //     cube.rotation.y = Math.cos(elapsedTime);
  //     cube.rotation.y = Math.cos(elapsedTime) * 2;

  //   cube.position.z = Math.sin(elapsedTime * 0.5) * 2;
  //   cube.rotation.x += 1 * delta;
  //   cube.rotation.y += 1.5 * delta;

  //   sphere.position.x = Math.sin(elapsedTime) * 3;
  //   sphere.position.y = Math.cos(elapsedTime) * 2;
  //   sphere.position.z = Math.sin(elapsedTime * 0.5) * 2;
  //   sphere.rotation.x += 1 * delta;
  //   sphere.rotation.y += 1.5 * delta;

  renderer.render(scene, camera);
}

scene.add(cube, sphere);
// scene.add(cube);

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

animate();

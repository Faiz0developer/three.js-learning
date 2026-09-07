// import * as THREE from "three";
// import "./style.css";

// const scene = new THREE.Scene();
// scene.background = new THREE.Color("#111111");

// const camera = new THREE.PerspectiveCamera(
//   // 60,
//   65,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );
// // camera.position.set(5, 4, 8);
// camera.position.set(5, 3.5, 7);
// camera.lookAt(0, 0, 0);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.shadowMap.enabled = true;

// document.body.appendChild(renderer.domElement);

// const productGroup = new THREE.Group();
// scene.add(productGroup);

// const geometry = new THREE.BoxGeometry(1.8, 3, 1.8);
// const material = new THREE.MeshStandardMaterial({
//   color: "orange",
//   roughness: 0.35,
//   metalness: 0.1,
// });

// const product = new THREE.Mesh(geometry, material);
// product.castShadow = true;
// // scene.add(product);
// productGroup.add(product);

// const lidGeometry = new THREE.BoxGeometry(1.9, 0.25, 1.9);
// const lid = new THREE.Mesh(lidGeometry, material);
// lid.position.y = 1.625;
// // scene.add(lid);
// productGroup.add(lid);

// const labelGeometry = new THREE.BoxGeometry(1.1, 0.8, 0.05);
// const labelMaterial = new THREE.MeshStandardMaterial({
//   color: "white",
//   roughness: 0.7,
// });
// const label = new THREE.Mesh(labelGeometry, labelMaterial);
// label.position.set(0, 0, 0.925);
// // scene.add(label);
// productGroup.add(label);

// const topSectionGeometry = new THREE.BoxGeometry(1.75, 0.25, 1.75);

// const topSection = new THREE.Mesh(topSectionGeometry, material);

// topSection.position.y = 1.5;

// productGroup.add(topSection);

// const platformGeometry = new THREE.CylinderGeometry(3, 3, 0.35, 32);
// const platformMaterial = new THREE.MeshStandardMaterial({
//   color: "#222222",
//   roughness: 0.4,
//   metalness: 0.15,
// });
// const platform = new THREE.Mesh(platformGeometry, platformMaterial);
// platform.position.y = -1.675;
// platform.receiveShadow = true;
// scene.add(platform);

// const light = new THREE.DirectionalLight("white", 2.5);
// light.position.set(-8, 7, 4);
// light.castShadow = true;
// light.shadow.mapSize.width = 2048;
// light.shadow.mapSize.height = 2048;
// scene.add(light);

// const ambientLight = new THREE.AmbientLight("white", 0.6);
// ambientLight.intensity = 0.25;
// scene.add(ambientLight);

// const timer = new THREE.Timer();

// function animate() {
//   requestAnimationFrame(animate);
//   timer.update();

//   const elapsed = timer.getElapsed();
//   // product.rotation.y = elapsed * 0.5;
//   productGroup.rotation.y = 0.35 + elapsed * 0.3;
//   // productGroup.position.y = Math.sin(elapsed) * 0.1;
//   renderer.render(scene, camera);
// }

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// animate();

// // geometry.dispose();
// // material.dispose();

// // platformGeometry.dispose();
// // platformMaterial.dispose();
// // scene.remove(product);
// // scene.remove(platform);
// // scene.remove(light);
// // scene.remove(ambientLight);

import "./style.css";

import { renderer } from "./renderer";
import { camera } from "./camera";
import { animate } from "./animation";

// Product and lights are imported so their modules
// execute and add objects to the scene.
import "./product";
import "./light";

// =========================
// Renderer
// =========================

document.body.appendChild(renderer.domElement);

// =========================
// Resize
// =========================

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// =========================
// Start Animation
// =========================

animate();

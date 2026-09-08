import * as THREE from "three";

// import "./style.css";

// import { createBasicMaterialScene } from "./mesh-basic-material";
// import { createStandardMaterialScene } from "./mesh-standard-material";
import { createPhysicalMaterialScene } from "./mesh-physical-material";
// import { createLambertMaterialScene } from "./mesh-lambert-material";
// import { createPhongMaterialScene } from "./mesh-phong-material";
// import "./color";
// import { createStandardMaterialSceneOpacity } from "./opacity-transparent";
// import { createFlatShadingScene } from "./flat-shading";

const scene = new THREE.Scene();

scene.background = new THREE.Color("#111111");

// createBasicMaterialScene(scene);
// createStandardMaterialScene(scene);
createPhysicalMaterialScene(scene);
// createLambertMaterialScene(scene);
// createPhongMaterialScene(scene);
// createStandardMaterialSceneOpacity(scene);
// createFlatShadingScene(scene);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.set(6, 3, 6);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight("white", 5);

light.position.set(5, 5, 5);
// light.position.set(-5, 5, 5);
// light.position.set(0, 2, 5);
// light.position.set(-3, 2, 4);

scene.add(light);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// console.log(renderer.info.render.calls);

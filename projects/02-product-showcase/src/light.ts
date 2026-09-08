// import * as THREE from "three";
// import { scene } from "./scene";

// export const light = new THREE.DirectionalLight("white", 2.5);
// light.position.set(-8, 7, 4);
// light.castShadow = true;
// light.shadow.mapSize.width = 2048;
// light.shadow.mapSize.height = 2048;
// scene.add(light);

// export const ambientLight = new THREE.AmbientLight("white", 0.6);
// ambientLight.intensity = 0.25;
// scene.add(ambientLight);

import * as THREE from "three";
import { scene } from "./scene";

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(-5, 8, 6);

directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(2048, 2048);

scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);

scene.add(ambientLight);

import * as THREE from "three";
import { scene } from "./scene";

export const light = new THREE.DirectionalLight("white", 2.5);
light.position.set(-8, 7, 4);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
scene.add(light);

export const ambientLight = new THREE.AmbientLight("white", 0.6);
ambientLight.intensity = 0.25;
scene.add(ambientLight);

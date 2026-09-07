import * as THREE from "three";
import { scene } from "./scene";

export const productGroup = new THREE.Group();
scene.add(productGroup);

const geometry = new THREE.BoxGeometry(1.8, 3, 1.8);
const material = new THREE.MeshStandardMaterial({
  color: "orange",
  roughness: 0.35,
  metalness: 0.1,
});

const product = new THREE.Mesh(geometry, material);
product.castShadow = true;
// scene.add(product);
productGroup.add(product);

const lidGeometry = new THREE.BoxGeometry(1.9, 0.25, 1.9);
const lid = new THREE.Mesh(lidGeometry, material);
lid.position.y = 1.625;
// scene.add(lid);
productGroup.add(lid);

const labelGeometry = new THREE.BoxGeometry(1.1, 0.8, 0.05);
const labelMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0.7,
});
const label = new THREE.Mesh(labelGeometry, labelMaterial);
label.position.set(0, 0, 0.925);
// scene.add(label);
productGroup.add(label);

const topSectionGeometry = new THREE.BoxGeometry(1.75, 0.25, 1.75);

const topSection = new THREE.Mesh(topSectionGeometry, material);

topSection.position.y = 1.5;

productGroup.add(topSection);

const platformGeometry = new THREE.CylinderGeometry(3, 3, 0.35, 32);
const platformMaterial = new THREE.MeshStandardMaterial({
  color: "#222222",
  roughness: 0.4,
  metalness: 0.15,
});
const platform = new THREE.Mesh(platformGeometry, platformMaterial);
platform.position.y = -1.675;
platform.receiveShadow = true;
scene.add(platform);

export function disposeProduct() {
  geometry.dispose();
  lidGeometry.dispose();
  labelGeometry.dispose();
  topSectionGeometry.dispose();
  platformGeometry.dispose();

  material.dispose();
  labelMaterial.dispose();
  platformMaterial.dispose();
}

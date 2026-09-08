import * as THREE from "three";

import { scene } from "./scene";

import {
  productMaterial,
  productCoatedMaterial,
  labelMaterial,
  platformMaterial,
} from "./materials";

export const productGroup = new THREE.Group();

scene.add(productGroup);

// Product body
const geometry = new THREE.BoxGeometry(1.8, 3, 1.8);

export const product = new THREE.Mesh(geometry, productMaterial);

product.castShadow = true;

productGroup.add(product);

// Lid
const lidGeometry = new THREE.BoxGeometry(1.9, 0.25, 1.9);

const lid = new THREE.Mesh(lidGeometry, productCoatedMaterial);

lid.position.y = 1.625;
lid.castShadow = true;

productGroup.add(lid);

// Label
const labelGeometry = new THREE.BoxGeometry(1.1, 0.8, 0.05);

const label = new THREE.Mesh(labelGeometry, labelMaterial);

label.position.set(0, 0, 0.925);

productGroup.add(label);

// Top section
const topSectionGeometry = new THREE.BoxGeometry(1.75, 0.25, 1.75);

const topSection = new THREE.Mesh(topSectionGeometry, productCoatedMaterial);

topSection.position.y = 1.5;
topSection.castShadow = true;

productGroup.add(topSection);

// Platform
const platformGeometry = new THREE.CylinderGeometry(3, 3, 0.35, 32);

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
}

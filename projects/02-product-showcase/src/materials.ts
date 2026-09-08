import * as THREE from "three";

export const productMaterial = new THREE.MeshStandardMaterial({
  color: 0xff5500,
  roughness: 0.35,
  metalness: 0.1,
});

export const productCoatedMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff5500,
  roughness: 0.25,
  metalness: 0.1,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
});

export const labelMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.7,
  metalness: 0,
});

export const platformMaterial = new THREE.MeshStandardMaterial({
  color: 0x222222,
  roughness: 0.4,
  metalness: 0.15,
});

export function disposeMaterials() {
  productMaterial.dispose();
  productCoatedMaterial.dispose();
  labelMaterial.dispose();
  platformMaterial.dispose();
}

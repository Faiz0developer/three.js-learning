import "./style.css";

import { renderer } from "./renderer";
import { camera } from "./camera";
import { animate } from "./animation";

import "./light";

import { productMaterial, productCoatedMaterial } from "./materials";

import { product } from "./product";

const controls = document.createElement("div");

controls.className = "material-controls";

// Color
const colorLabel = document.createElement("label");
colorLabel.textContent = "Color";

const colorPicker = document.createElement("input");

colorPicker.type = "color";

colorPicker.value = `#${productMaterial.color.getHexString()}`;

// Roughness
const roughnessLabel = document.createElement("label");
roughnessLabel.textContent = "Roughness";

const roughnessSlider = document.createElement("input");

roughnessSlider.type = "range";
roughnessSlider.min = "0";
roughnessSlider.max = "1";
roughnessSlider.step = "0.01";
roughnessSlider.value = String(productMaterial.roughness);

const roughnessValue = document.createElement("span");

roughnessValue.textContent = productMaterial.roughness.toFixed(2);

// Metalness
const metalnessLabel = document.createElement("label");
metalnessLabel.textContent = "Metalness";

const metalnessSlider = document.createElement("input");

metalnessSlider.type = "range";
metalnessSlider.min = "0";
metalnessSlider.max = "1";
metalnessSlider.step = "0.01";
metalnessSlider.value = String(productMaterial.metalness);

const metalnessValue = document.createElement("span");

metalnessValue.textContent = productMaterial.metalness.toFixed(2);

// Clearcoat
const clearcoatLabel = document.createElement("label");
clearcoatLabel.textContent = "Clearcoat";

const clearcoatSlider = document.createElement("input");

clearcoatSlider.type = "range";
clearcoatSlider.min = "0";
clearcoatSlider.max = "1";
clearcoatSlider.step = "0.01";
clearcoatSlider.value = String(productCoatedMaterial.clearcoat);

const clearcoatValue = document.createElement("span");

clearcoatValue.textContent = productCoatedMaterial.clearcoat.toFixed(2);

// Clearcoat Roughness
const clearcoatRoughnessLabel = document.createElement("label");

clearcoatRoughnessLabel.textContent = "Clearcoat Roughness";

const clearcoatRoughnessSlider = document.createElement("input");

clearcoatRoughnessSlider.type = "range";
clearcoatRoughnessSlider.min = "0";
clearcoatRoughnessSlider.max = "1";
clearcoatRoughnessSlider.step = "0.01";
clearcoatRoughnessSlider.value = String(
  productCoatedMaterial.clearcoatRoughness,
);

const clearcoatRoughnessValue = document.createElement("span");

clearcoatRoughnessValue.textContent =
  productCoatedMaterial.clearcoatRoughness.toFixed(2);

// Add controls
controls.append(
  colorLabel,
  colorPicker,

  roughnessLabel,
  roughnessSlider,
  roughnessValue,

  metalnessLabel,
  metalnessSlider,
  metalnessValue,

  clearcoatLabel,
  clearcoatSlider,
  clearcoatValue,

  clearcoatRoughnessLabel,
  clearcoatRoughnessSlider,
  clearcoatRoughnessValue,
);

document.body.appendChild(controls);

// Color update
colorPicker.addEventListener("input", () => {
  const value = colorPicker.value;

  productMaterial.color.set(value);
});

// Roughness update
roughnessSlider.addEventListener("input", () => {
  const value = Number(roughnessSlider.value);

  productMaterial.roughness = value;

  roughnessValue.textContent = value.toFixed(2);
});

// Metalness update
metalnessSlider.addEventListener("input", () => {
  const value = Number(metalnessSlider.value);

  productMaterial.metalness = value;

  metalnessValue.textContent = value.toFixed(2);
});

// Clearcoat update
clearcoatSlider.addEventListener("input", () => {
  const value = Number(clearcoatSlider.value);

  productCoatedMaterial.clearcoat = value;

  clearcoatValue.textContent = value.toFixed(2);
});

// Clearcoat roughness update
clearcoatRoughnessSlider.addEventListener("input", () => {
  const value = Number(clearcoatRoughnessSlider.value);

  productCoatedMaterial.clearcoatRoughness = value;

  clearcoatRoughnessValue.textContent = value.toFixed(2);
});

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

animate();

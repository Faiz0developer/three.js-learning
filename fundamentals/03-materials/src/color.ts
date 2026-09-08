import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.set(4, 3, 6);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
  color: "orange",
  roughness: 0.1,
  metalness: 0.5,
  //   transparent: true,
  transparent: false,
  opacity: 0,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.DirectionalLight("white", 5);

light.position.set(5, 5, 5);
// light.position.set(-5, 5, 5);
// light.position.set(0, 2, 5);
// light.position.set(-3, 2, 4);

scene.add(light);

let elapsed = 0;

// geomtery ka color runtime me change kiya ja skta h
function animate() {
  elapsed += 0.01;

  if (elapsed > 0.5) {
    material.color.set("blue");
  }
  if (elapsed > 1) {
    material.color.set("green");
  }
  if (elapsed > 1.5) {
    material.color.set("red");
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

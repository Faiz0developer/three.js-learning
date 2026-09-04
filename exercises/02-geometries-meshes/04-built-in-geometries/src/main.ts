import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.01,
  1000,
);

camera.position.z = 12;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const boxGeo = new THREE.BoxGeometry(2, 2, 2);

const sphereGeo = new THREE.SphereGeometry(1.5, 32, 16);

const cylinderGeo = new THREE.CylinderGeometry(1, 1, 2, 32);

const coneGeo = new THREE.ConeGeometry(1, 2, 32);

const planeGeo = new THREE.PlaneGeometry(3, 3);

const circleGeo = new THREE.CircleGeometry(1.5, 32);

const torusGeo = new THREE.TorusGeometry(1.5, 0.3, 16, 32);

const ringGeo = new THREE.RingGeometry(0.8, 1.5, 32);

const capsuleGeo = new THREE.CapsuleGeometry(0.7, 1.5);

const mate = new THREE.MeshStandardMaterial({
  color: "white",
  //   flatShading: true,
});

const cube = new THREE.Mesh(boxGeo, mate);
const sphere = new THREE.Mesh(sphereGeo, mate);
const cylinder = new THREE.Mesh(cylinderGeo, mate);
const cone = new THREE.Mesh(coneGeo, mate);
const plane = new THREE.Mesh(planeGeo, mate);
const circle = new THREE.Mesh(circleGeo, mate);
const torus = new THREE.Mesh(torusGeo, mate);
const ring = new THREE.Mesh(ringGeo, mate);
const capsule = new THREE.Mesh(capsuleGeo, mate);

cube.position.x = -11;
cube.position.y = 4.5;
sphere.position.x = -1;
sphere.position.y = 4.5;
cylinder.position.x = 10;
cylinder.position.y = 4.5;
cone.position.x = -11;
cone.position.y = 1;
plane.position.x = -1;
plane.position.y = 1;
circle.position.x = 10;
circle.position.y = 1;
torus.position.x = -11;
torus.position.y = -3.5;
ring.position.x = -1;
ring.position.y = -3.5;
capsule.position.x = 10;
capsule.position.y = -3.5;

scene.add(cube, sphere, cylinder, cone, plane, circle, torus, ring, capsule);

const light = new THREE.DirectionalLight("white", 3);
light.position.set(-4, 2, 5);
scene.add(light);

renderer.render(scene, camera);

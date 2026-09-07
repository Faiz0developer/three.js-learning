// import "./triangle";
// import "./quad";
// import "./4-side-pyramid";
// import "./cube";
import "./house";
// import "./normal";
// import "./custom-normal";
// import "./uv-coords";
// import "./geometry-dispose";

// import * as THREE from "three";

// const scene = new THREE.Scene();
// scene.background = new THREE.Color("skyblue");

// const camera = new THREE.PerspectiveCamera(
//   65,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000,
// );

// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// document.body.appendChild(renderer.domElement);

// // const positions = new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0,1,0,0]);

// // console.log(positions);
// // console.log(positions.length);
// // console.log(positions.BYTES_PER_ELEMENT);
// // console.log(positions.byteLength);
// // console.log(positions instanceof Float32Array);

// // const positions = new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0, 2, 2, 0]);

// // // const positionAttribute = new THREE.BufferAttribute(positions, 3);
// // const positionAttribute = new THREE.BufferAttribute(positions, 2);

// // console.log("Array:", positionAttribute.array);
// // console.log("Item Size:", positionAttribute.itemSize);
// // console.log("Count:", positionAttribute.count);

// const geometry = new THREE.BufferGeometry();

// const positions = new Float32Array([
//   0,
//   2,
//   0, // 0
//   -1,
//   1,
//   0, // 1
//   -1,
//   -1,
//   0, // 2
//   0,
//   -2,
//   0, // 3
//   1,
//   -1,
//   0, //4
//   1,
//   1,
//   0, //5
// ]);

// geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
// geometry.setIndex([1, 2, 4, 1, 4, 5, 0, 1, 5, 2, 3, 4]);

// // geometry.setIndex([0, 1, 2, 0, 2, 3]);
// // geometry.setIndex([0, 1, 3, 1, 2, 3]);
// // geometry.setIndex([0, 1, 2]);

// console.log("Vertices:", geometry.attributes.position.count);
// console.log("Indices:", geometry.index?.count);
// console.log(geometry.index);
// console.log(geometry.index?.array);

// const material = new THREE.MeshBasicMaterial({
//   color: "red",
//   side: THREE.DoubleSide,
//   //   wireframe: true,
// });

// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// renderer.render(scene, camera);

import * as THREE from "three";

import { renderer } from "./renderer";
import { camera } from "./camera";
import { productGroup } from "./product";
import { scene } from "./scene";

const timer = new THREE.Timer();
export function animate() {
  requestAnimationFrame(animate);
  timer.update();

  const elapsed = timer.getElapsed();
  // product.rotation.y = elapsed * 0.5;
  productGroup.rotation.y = 0.35 + elapsed * 0.3;
  // productGroup.position.y = Math.sin(elapsed) * 0.1;
  renderer.render(scene, camera);
}

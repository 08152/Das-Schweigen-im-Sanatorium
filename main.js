import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { initPlayer } from "./player.js";
import { initTerrain } from "./terrain.js";
import { initChunks, updateChunks } from "./chunks.js";
import { initTrees } from "./trees.js";
import { setupInput } from "./input.js";
import { camera, scene, renderer } from "./world.js";

/* Licht */
scene.add(new THREE.HemisphereLight(0xffffff,0x444444,1.5));

const sun = new THREE.DirectionalLight(0xffffff,1.5);
sun.position.set(50,100,50);
scene.add(sun);

/* Systeme */
initPlayer();
initTerrain();
initChunks();
initTrees();
setupInput();

/* GLB Loader */
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

export let treeModel = null;

const loader = new GLTFLoader();

loader.load("./baum.glb",(gltf)=>{
treeModel = gltf.scene;
console.log("baum.glb geladen");
});

/* LOOP */
function animate(){

requestAnimationFrame(animate);

updateChunks();

renderer.render(scene,camera);
}

animate();

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x4aa3ff);

export const camera = new THREE.PerspectiveCamera(
75, innerWidth/innerHeight, 0.1, 3000
);

camera.position.set(0,10,0);

export const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize",()=>{
camera.aspect = innerWidth/innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(innerWidth,innerHeight);
});

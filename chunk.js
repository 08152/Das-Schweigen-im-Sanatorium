import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { scene, camera } from "./world.js";
import { height, SIZE } from "./terrain.js";
import { updateTrees } from "./trees.js";

const chunks = {};

export function initChunks(){}

export function createChunk(cx,cz){

const key = cx+","+cz;
if(chunks[key]) return;

const geo = new THREE.PlaneGeometry(SIZE,SIZE,20,20);
geo.rotateX(-Math.PI/2);

const pos = geo.attributes.position;

for(let i=0;i<pos.count;i++){
const x = pos.getX(i)+cx*SIZE;
const z = pos.getZ(i)+cz*SIZE;
pos.setY(i,height(x,z));
}

geo.computeVertexNormals();

const mat = new THREE.MeshStandardMaterial({color:0x2ecc71});
const mesh = new THREE.Mesh(geo,mat);

mesh.position.set(cx*SIZE,0,cz*SIZE);

scene.add(mesh);

chunks[key]=mesh;
}

export function updateChunks(){

const cx = Math.floor(camera.position.x/SIZE);
const cz = Math.floor(camera.position.z/SIZE);

for(let x=cx-2;x<=cx+2;x++){
for(let z=cz-2;z<=cz+2;z++){
createChunk(x,z);
}
}

updateTrees();
}

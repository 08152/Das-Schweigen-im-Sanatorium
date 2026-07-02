import { scene } from "./world.js";
import { height, SIZE } from "./terrain.js";
import { treeModel } from "./main.js";

const treeChunks = {};

export function initTrees(){}

export function updateTrees(){

if(!treeModel) return;

const cx = Math.floor(scene.userData.cameraX / SIZE || 0);

for(let x=cx-2;x<=cx+2;x++){
for(let z=-2;z<=2;z++){

const key = x+","+z;
if(treeChunks[key]) continue;

treeChunks[key]=true;

for(let i=0;i<5;i++){

const tree = treeModel.clone();

const px = x*SIZE + (Math.random()-0.5)*SIZE;
const pz = z*SIZE + (Math.random()-0.5)*SIZE;
const py = height(px,pz);

tree.position.set(px,py,pz);
tree.scale.set(2,2,2);

scene.add(tree);
}

}
}

}

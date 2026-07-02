import { camera } from "./world.js";

export const move = {w:false,a:false,s:false,d:false};

export function setupInput(){

document.addEventListener("keydown",(e)=>{
if(e.code==="KeyW") move.w=true;
if(e.code==="KeyS") move.s=true;
if(e.code==="KeyA") move.a=true;
if(e.code==="KeyD") move.d=true;
});

document.addEventListener("keyup",(e)=>{
if(e.code==="KeyW") move.w=false;
if(e.code==="KeyS") move.s=false;
if(e.code==="KeyA") move.a=false;
if(e.code==="KeyD") move.d=false;
});

document.addEventListener("mousemove",(e)=>{
if(!document.pointerLockElement) return;

camera.rotation.y -= e.movementX*0.002;
camera.rotation.x -= e.movementY*0.002;
});
}

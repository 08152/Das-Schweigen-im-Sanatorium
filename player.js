import { camera } from "./world.js";

export const player = {
velocityY:0,
canJump:false
};

export function initPlayer(){

document.addEventListener("keydown",(e)=>{
if(e.code==="Space" && player.canJump){
player.velocityY = 0.35;
player.canJump = false;
}
});

}

export function updatePlayer(){

player.velocityY -= 0.015;
camera.position.y += player.velocityY;

}

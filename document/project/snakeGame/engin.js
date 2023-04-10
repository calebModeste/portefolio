const gameZone= document.querySelector(".game-zone");
const scorevalue= document.querySelector(".score");
const topscoreValue= document.querySelector(".top-score");

let foodX, foodY, playerX=13, playerY=10, bodyplayer=[];

let veloceX=0, veloceY=0;

let gameover=false, launcher, scorer=0;

let topscorer= localStorage.getItem("top-score")||0;
topscoreValue.innerText= `top score:${topscorer}`;

const moveOn =(e)=>{
    // permet de chagé de direction a chaque keydown
    if (e.key ==='ArrowUp' && veloceY != 1 ) {
        veloceX=0;
        veloceY=-1;
        
    }else if (e.key ==='ArrowDown' && veloceY != -1) {
        veloceX=0;
        veloceY=1;
    }
    else if (e.key ==='ArrowRight'&& veloceX != 1) {
        veloceX=1;
        veloceY=0;
    }
    else if (e.key ==='ArrowLeft' && veloceX != -1) {
        veloceX=-1;
        veloceY=0;
    }
    starter();

}
const ResponseGameover = ()=>{
    clearInterval(launcher);
    alert("game over");
    location.reload();
}
const radomFood=()=>{
    //rendre l'apparition de Food aléatoire sur gamezone
    foodX=Math.floor(Math.random()*60)+1;
    foodY=Math.floor(Math.random()*60)+1;
}


const starter=()=>{
    if (gameover) return ResponseGameover();
    let blockHtml=`<div class="food" style="grid-area: ${foodY} / ${foodX} ;"></div>`;
    
    //evenement de croisement player food
    if(playerX==foodX && playerY==foodY){
        radomFood();
        bodyplayer.push([foodX,foodY]);
        scorer++;

        topscorer=scorer>=topscorer ? scorer: topscorer;
        localStorage.setItem("top-score", topscorer);
        scorevalue.innerText= `score:${scorer}`;
        topscoreValue.innerText= `top score:${topscorer}`;
    }

    for (let i = bodyplayer.length -1; i > 0; i--) {
        //
        bodyplayer[i]=bodyplayer[i-1];
        
    }
    
    bodyplayer[0]=[playerX,playerY];//ajout du premier element head dans bodyplayer
    
    //modification de la position de player avec veloce
    playerX+=veloceX;
    playerY+=veloceY;

    if (playerX <=0 || playerX > 60 ||playerY <=0 || playerY > 60) {
        gameover=true;
    }
    for (let a = 0; a < bodyplayer.length; a++) {
        blockHtml += `<div class="head" style="grid-area: ${bodyplayer[a][1]} / ${bodyplayer[a][0]} ;"></div>`;   
    }
    gameZone.innerHTML=blockHtml;
}

radomFood();
launcher=setInterval(starter,125);//mise a jou du moteur de jeu a interval regulier et aussi instabce de deplacement continue avec velocity
document.addEventListener('keydown', moveOn);
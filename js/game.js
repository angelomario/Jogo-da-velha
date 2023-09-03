let song = document.querySelectorAll(".music");

document.addEventListener("DOMContentLoaded", ()=>{
           //Som/música
    let source=document.querySelectorAll(".source");
    let media=[".mp3",".ogg",".WAV"];
    let sound=["Gustavo_Santaolalla_-_The_Last_of_Us__Main_Theme____The_Last_of_Us__Video_Game_Soundtrack_(128k)","A_Thousand_Miles(128k)","Labrinth_-_Forever_(Lyrics)(128k)"];
    let atual= Math.round((Math.random()*sound.length) - 1);
    if(atual < 0){
        atual =0;
    }
    for (let i = 0; i < song.length; i++) {
            song[i].setAttribute("src","music/"+sound[atual]+media[i]);
            song[i].volume=0.4;
    }
    });
//Trocar imagens
let url=["img/IMG-20230720-WA0013.jpg","img/IMG-20230720-WA0014.jpg","img/IMG-20230720-WA0017.jpg","img/IMG-20230720-WA0018.jpg","img/IMG-20230720-WA0019.jpg","img/IMG-20230720-WA0020.jpg"];
let n =0;
setInterval(()=>{
    if(n >=6){
        n = 0;
     }
 document.getElementById("imagemDefault").setAttribute("src",url[n]);
 n++;

},150000);
//Alternando a vez
let vez = 1;

function setVez(pos){
    let joga= document.querySelectorAll(".jogada");
    let proprie=["jogada fa fa-times text-primary","jogada fa fa-o green"];
    
    if(pos == 1){
        vez= 0;
    }else{
        vez= 1;
    }
    joga[pos].setAttribute("class",proprie[pos] + " vez-false");
    joga[vez].setAttribute("class",proprie[vez] + " vez-true");
}
//Validar o formulário
    let form =document.querySelectorAll(".form");
    let nome=document.getElementById("saveName");
    let newGame=document.getElementById("newGame");
    let propriedade = form[0].getAttribute("class");
    let propriedade1 = form[1].getAttribute("class");
    let Players;
    let vitorias=document.querySelectorAll(".vitorias");
    let empates=document.querySelectorAll(".empates");
    let derrotas=document.querySelectorAll(".derrotas");
    let nomes=document.querySelectorAll(".nome");
    let Evalue=0;
    let Dvalue=[0,0];
    let Vvalue=[0,0];
    
    setTimeout(()=>{
        console.log();
        form[0].setAttribute("class",propriedade+" wow");
    },100);


    //Secção novo jogo
    newGame.addEventListener("click",function novoJogo(){
        form[1].setAttribute("class", propriedade1+" corta");
        setTimeout(()=>{
            document.querySelectorAll(".sobre")[1].style="display:none;";
            setTimeout(()=>{
                board=['','','','','','','','',''];
            let squares= document.querySelectorAll(".square");
            for (let i = 0; i < squares.length; i++) {
                squares[i].innerHTML="";
                squares[i].setAttribute("class","square");
            }
            squares.forEach((square)=>{
            square.innerHTML = "";
            });            
            },700);
        },600);
        
        
    });
    //Fim novo jogo


    //Secção formulario e pla card
    nome.addEventListener("click",function gamers(){
       let players=[document.getElementById("player1").value, document.getElementById("player2").value];   
       for (let i = 0; i < players.length; i++) {
        if(players[i]==""){
            players[i]= "Jogador "+(i+1);
           }

           Players = players;
           vitorias[i].innerHTML=Vvalue[i];
            empates[i].innerHTML=Evalue;
            derrotas[i].innerHTML=Dvalue[i];
            nomes[i].innerHTML +=Players[i];
            setTimeout(()=>{
                let propriedade = document.querySelector(".game");
                let pro= propriedade.getAttribute("class");
                propriedade.setAttribute("class",pro +" opacity");
            },500);
        setVez(vez);
       }
       for (let a = 0; a < song.length; a++) {
        song[a].play();
    }
//Fim Secção formulario
        form[0].setAttribute("class", propriedade+" corta");
        setTimeout(()=>{
            document.querySelectorAll(".sobre")[0].style="display:none;";
        },700);
        
    });
    //Fim validar formulario
    
let board=['','','','','','','','',''];
let v=[];
let playeTime= 0;
let symbols = [" o fa fa-o"," x fa fa-times "];
let state=[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
let gameOver = false;

function handlemove(position){
    
    
    if(gameOver == false){
        if(board[position]== ""){
            board[position]= symbols[playeTime];
            playeTime = (playeTime== 0)?1:0;
        }   
    }
    gameOver = isWin();
    
    return gameOver;
}
function isWin(){
    
    for(let i = 0; i < state.length; i++){
        let seq = state[i];
        let pos1=seq[0];
        let pos2=seq[1];
        let pos3=seq[2];
        let pos4=seq[3];
        let pos5=seq[4];
        let pos6=seq[5];
        let pos7=seq[6];
        let pos8=seq[7];
        let pos9=seq[8];
        
        if(board[pos1]==board[pos2] && board[pos1]==board[pos3] && board[pos1]!= ""){
            position=[pos1,pos2,pos3];
            winner(position);
            return true;
        }
        
    }
    if((board[0] != "")&&(board[1] != "")&&(board[2] != "")&&(board[3] != "")&&(board[4] != "")&&(board[5] != "")&&(board[6] != "")&&(board[7] != "")&&(board[8] != "")){
        empate();
    }
    return false;
}
function empate(){
    setTimeout(()=>{
        setEmpates();
    },500);

}
function setVitorias(){
    document.querySelector(".vencedor").innerHTML= Players[playeTime]+" venceu!";
    document.querySelectorAll(".sobre")[1].style="display:block;";
    setTimeout(()=>{  
        form[1].setAttribute("class", propriedade1+" wow");
    },500);
    
    let vence=playeTime;
    if(vence == 1){
        Vvalue[0] +=1;
        vez= 1;
        Dvalue[1] +=1;
        vitorias[1].innerHTML = Vvalue[0];
        derrotas[0].innerHTML = Dvalue[1];
    }else{
        vez= 0;
        Vvalue[1] +=1;
        Dvalue[0] +=1;
        vitorias[0].innerHTML = Vvalue[1];
        derrotas[1].innerHTML = Dvalue[0];
    }
    setVez(vez);
}   
function setEmpates(){
    Evalue +=1;
    for (let i = 0; i < empates.length; i++) {
        empates[i].innerHTML = Evalue; 
    }
    document.querySelector(".vencedor").innerHTML= "Houve um empate!";
    document.querySelectorAll(".sobre")[1].style="display:block;";
    setTimeout(()=>{  
        form[1].setAttribute("class", propriedade1+" wow");
    },500);
    setVez(vez);
}

//By: Ângelo Mário 
//Contact: angeloquissanga55@gmail.com
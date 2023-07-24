document.addEventListener("DOMContentLoaded", ()=>{

var squares= document.querySelectorAll(".square");
 squares.forEach((square)=>{
    square.addEventListener("click", handleclick);
 });
});

function handleclick(event) {
    let square= event.target;
    let position= square.id;
    if(handlemove(position)){
        setTimeout(()=>{
            setVitorias();
        },500);
    }
    
    updateSquare(position);
    
}
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol= board[position];
    square.innerHTML = `<div class=' ${symbol} '></div>`; 
    
}
function winner(player){
    let squares= document.querySelectorAll(".square");
    for (let i = 0; i <= 2; i++) {
        let position = player[i];
        squares[position].setAttribute("class","square win");
    }    
}
/*function updateSquares(square){
    let squares= document.querySelectorAll(".square");
    squares.forEach((square)=>{
        let position = square.id; 
        let symbol= board[position];
    
        if(symbol != ""){
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    });
    
}*/
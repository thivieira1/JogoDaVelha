var contadorJogadas = 0;
var turno = 1;
var O_val = "O";
var X_val = "X";
var EMPTY_val = " ";
var cont = 0;
var cont2 = 0;
var placarJogador = 0;
var placarComputador = 0; 

function rodada(sqr){
		if(sqr.value == EMPTY_val){
				if(turno==1){
					sqr.value = X_val;
					sqr.style.backgroundImage = "url('image/adriano.png')";
					sqr.style.color = "#ffffff";
				}else{
					sqr.value = O_val;
					sqr.style.backgroundImage = "url('image/bg.png')";
					sqr.style.color = "#ffffff";
				}
				turno = turno*(-1);
				validaJogada();
		}
}

function validaJogada(){
	contadorJogadas = 0;
	var sqr1 = document.gameLoop.sqr1.value;
	var sqr2 = document.gameLoop.sqr2.value;
	var sqr3 = document.gameLoop.sqr3.value;
	var sqr4 = document.gameLoop.sqr4.value;
	var sqr5 = document.gameLoop.sqr5.value;
	var sqr6 = document.gameLoop.sqr6.value;
	var sqr7 = document.gameLoop.sqr7.value;
	var sqr8 = document.gameLoop.sqr8.value;
	var sqr9 = document.gameLoop.sqr9.value;
	
	var valorTurno;
	if(turno == -1){
		valorTurno = X_val;
	}else if(turno == 1){
		valorTurno = O_val;
	}
	
	if(
	(sqr1 == valorTurno && sqr2 == valorTurno && sqr3 == valorTurno) ||
	(sqr4 == valorTurno && sqr5 == valorTurno && sqr6 == valorTurno) ||
	(sqr7 == valorTurno && sqr8 == valorTurno && sqr9 == valorTurno) ||
	(sqr1 == valorTurno && sqr4 == valorTurno && sqr7 == valorTurno) ||
	(sqr2 == valorTurno && sqr5 == valorTurno && sqr8 == valorTurno) ||
	(sqr3 == valorTurno && sqr6 == valorTurno && sqr9 == valorTurno) ||
	(sqr1 == valorTurno && sqr5 == valorTurno && sqr9 == valorTurno) ||
	(sqr7 == valorTurno && sqr5 == valorTurno && sqr3 == valorTurno) 
	){
		if (valorTurno == O_val){
			alert("O Ronaldinho Ganhou");
			placarJogador = placarJogador+1;
			reset();
		}
		
		else if (valorTurno == X_val){
			alert("Didico Ganhou");
			placarComputador = placarComputador+1;
			reset();
		}
	}else{
		if(sqr1 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr2 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr3 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr4 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr5 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr6 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr7 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr8 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(sqr9 != EMPTY_val){
			contadorJogadas = contadorJogadas+1;
		}
		if(contadorJogadas >= 9){
			alert("Empate");
			reset();
		}
	}	
}

function reset(){
	document.gameLoop.sqr1.value = EMPTY_val;
	document.gameLoop.sqr2.value = EMPTY_val;
	document.gameLoop.sqr3.value = EMPTY_val;
	document.gameLoop.sqr4.value = EMPTY_val;
	document.gameLoop.sqr5.value = EMPTY_val;
	document.gameLoop.sqr6.value = EMPTY_val;
	document.gameLoop.sqr7.value = EMPTY_val;
	document.gameLoop.sqr8.value = EMPTY_val;
	document.gameLoop.sqr9.value = EMPTY_val;
	
	document.gameLoop.sqr1.style.backgroundColor = "green";
	document.gameLoop.sqr2.style.backgroundColor = "green";
	document.gameLoop.sqr3.style.backgroundColor = "green";
	document.gameLoop.sqr4.style.backgroundColor = "green";
	document.gameLoop.sqr5.style.backgroundColor = "green";
	document.gameLoop.sqr6.style.backgroundColor = "green";
	document.gameLoop.sqr7.style.backgroundColor = "green";
	document.gameLoop.sqr8.style.backgroundColor = "green";
	document.gameLoop.sqr9.style.backgroundColor = "green";
	
	document.gameLoop.sqr1.style.backgroundImage = "url('')";
	document.gameLoop.sqr2.style.backgroundImage = "url('')";
	document.gameLoop.sqr3.style.backgroundImage = "url('')";
	document.gameLoop.sqr4.style.backgroundImage = "url('')";
	document.gameLoop.sqr5.style.backgroundImage = "url('')";
	document.gameLoop.sqr6.style.backgroundImage = "url('')";
	document.gameLoop.sqr7.style.backgroundImage = "url('')";
	document.gameLoop.sqr8.style.backgroundImage = "url('')";
	document.gameLoop.sqr9.style.backgroundImage = "url('')";
	
	document.getElementById("pJogador").innerHTML = placarJogador;
	document.getElementById("pComputador").innerHTML = placarComputador;

	turno = 1;
	contadorJogadas = 0;
}
//código carros

let xCarros = [600, 700, 600, 800, 650];
let yCarros = [30, 95, 160, 230, 295];
let velocidadeCarros = [5, 3.5, 5.5, 2, 4];
let comprimentoCarro = 80
let alturaCarro = 60


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosiçãoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
    xCarros[i] = windowWidth
    }
  }
}


function passouTodaTela(xCarro){
  return xCarro < -80
}








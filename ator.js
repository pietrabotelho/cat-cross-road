let yAtor 
let xAtor 
let colisao = false
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor - 20, yAtor - 20, 40, 40);
}

function iniciarAtor(){
  yAtor = 380
  xAtor = windowWidth / 2
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMoverY()){
      yAtor += 3
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3
    }  
  if(keyIsDown(RIGHT_ARROW)){
      xAtor += 3
  }
}  

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 27)
    if(colisao){
      somDaColisao.play()
      iniciarAtor();
      if(pontosMaiorQueZero()){
        meusPontos -= 1
      }
    }
  }
}


function incluiPontos(){
  textSize(25)
  textFont(fontePixelada)
  text(meusPontos, width / 2, 23)
}

function marcaPontos(){
  if(yAtor - 20 < 4){
    meusPontos += 1
    somDoPonto.play()
    iniciarAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMoverY(){
  return yAtor<380
} 
//imagens e sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

let imagemDaEstrada;
let imagemDoCarro1; 
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoAtor;
let fontePixelada;

function preload(){
  imagemDaEstrada = loadImage("imagens/estradajs.png");
  imagemDoCarro1 = loadImage("imagens/carro1projetojs.png");
  imagemDoCarro2 = loadImage("imagens/carro2projetojs.png");
  imagemDoCarro3 = loadImage("imagens/carro3projetojs.png");
  imagemDoAtor= loadImage("imagens/ator1.png");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2]
  fontePixelada = loadFont("fontes/Minecraft.ttf")
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");  
}
function setup() {
  createCanvas(windowWidth,400);
  iniciarAtor();
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}










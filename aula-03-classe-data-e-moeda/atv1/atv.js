class Heroi{
constructor(Nome, Vida, Velocidade, Forca){
    this.Nome = Nome;
    this.Vida = Vida;
    this.Velocidade = Velocidade;
    this.Forca = Forca;
}

correr(){
    return ` ${this.Nome} está correndo!`
}

andar(){
    return `${this.Nome} está andando!`
}
atacar(){
    return `${this.Nome} está atacando!`
}
defender(){
    return `${this.Nome} está defendendo!`
}


}

const HomemAranha = new Heroi
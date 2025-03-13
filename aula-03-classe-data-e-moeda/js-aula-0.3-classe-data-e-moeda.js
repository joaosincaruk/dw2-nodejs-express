//constructor: fabrica da classe - dizer quais os atributos que os objetos que partem dessa classe vão ter

// CLASSE - Molde
//Objetos - herdam características dessa classe

//
// nome de classe iniciar com letra maiuscula (boa pratica)
class Carro {
  //atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //metodos
  buzinar() {
    return "Beep! Beep!";
  }
}


// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012")
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`)

// Instância carroEsportivo
const carroEsportivo = new Carro()
carroEsportivo.marca = "Volkswagen"
carroEsportivo.modelo = "Voyage 1.0"
carroEsportivo.ano = "2010"
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`)

//adicionando um novo atributo
carroEsportivo.corNeon = "Azul"

//adicionando um novo método
carroEsportivo.turbo = function(){
    return "Vruuuuuuuuuuuuuuuuummmmmm - queimou a junta do cabeçote"
}

console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)
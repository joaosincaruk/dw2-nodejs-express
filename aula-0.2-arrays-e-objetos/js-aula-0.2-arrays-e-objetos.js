// ARRAY (Vetor ou Lista)
let produtos = []
console.log(typeof(produtos))

// Arrays possuem metodos, por isso ele é entendido no JS como objeto

let Produtos = ['Computador', 'Notebook', 'Celular', 'Tablet']
console.log(Produtos)

console.log("Exibindo a lista pelos indices \n")

console.log(Produtos[0])
console.log(Produtos[1])
console.log(Produtos[2])
console.log(Produtos[3])


console.log("Exibindo a lista atraves do FOR") // quando temos listas muito grandes, exibir um item cada é inviável

for(let c in Produtos){
    console.log(`${Number(c)+1} - ${Produtos[c]}`) // c representa os indices, ele começa no 0 e percorre até o ultimo item da lista
} // Deixar o Number para converter o c em numero e o +1 pra começar a lista com 1

console.log("Exibindo a lista atraves do forEach")

Produtos.forEach(function(produto)){
    console.log(produto) // pra cada item da lista ele vai printar o produto
}


console.log("Exibindo a lista atraves do forEach Com os indices")

Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`) // pra cada item da lista ele vai printar o produto
})
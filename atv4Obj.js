let apartamento = {
    quartos: 2,
    tipo: "apartamento",
    endereco: "avenida principal, 456 - centro",
    andar: 7
}

console.log(apartamento);
console.log( `${apartamento.tipo} com ${apartamento.quartos} quartos, localizados no ${apartamento.andar}° andar da ${apartamento.endereco}`
);

//2

let produtoEmbalado = {
    nome: 'laptop HP',
    categoria: 'elet',
    peso: 1.5,
    preco: 3.500,

}

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria} tem o seguinte peso, ${produtoEmbalado.peso} e esta custando ${produtoEmbalado.preco}.`);

//3
class Imovel {
    quartos = "6"
    tipo = "sofa"
    endereco = "rua 2024"
}


let casa = new Imovel();
console.log(casa);
console.log(`Tipo do imvel: ${casa.tipo}\nQuartos: ${casa.quartos} \neEndereco: ${casa.endereco}`);



import entradaDados from 'readline-sync';
console.log();
let nome = entradaDados.question('informe seu nome: ');
console.log(`Olá ${nome}, Seja bem-vindo(a)!`);
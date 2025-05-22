import rl from "readline-sync"

let dia = rl.questionInt("Informe o valor entre 1 e 7: ")

switch (dia) {
    case 1:
        console.log("domingo");
        break;

    default:
        break;
}
switch (dia) {
    case 2:
        console.log("segunda");
        break;


        break;

    case 3:
        console.log("terca");
        break;

    case 4:
        console.log("quarta");
        break;


    case 5:
        console.log("quinta");
        break;


    case 6:
        console.log("sexta");
        break;


    case 7:
        console.log("sábado");

    default:
        console.log("Valor inválido");
        break;
}

//3
let x = rl.questionFloat("informe o primeiro valor: ");
let y = rl.questionFloat("informe o segundo valor: ")
let op = rl.questionFloat("Escolha uma opçao: \n [1] soma \n [2] subtraçao \n [3] Multiplicaçao \n [4] divisao");
switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;

    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;

    case 3:
        console.log(`${x} x ${y} = ${x * y}`);
        break;

    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log("Opçao inválida!!")
        break;
}


//4
let salario = rl.questionFloat('Informe seu salario: \n')
let cat = rl.question("Informe a categoria de bonificaçao:")
let bonus = 0;

switch (cat) {
    case bonus: salario * 0.05;
    console.log(`Novo salario: $(salario+bobus).tolocalString("pt-br")`)
        break;

    default:
        break;
}


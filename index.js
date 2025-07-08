let wins = +prompt("quantas wins? ");
let loses = +prompt("quantas Loses? ");
let balance = getBalance(wins, loses);


function getBalance(wins, loses) {
    return (wins - loses)
     
}
 
if (wins < 10) {
    console.log(`O Herói com o saldo de ${balance} está no nível Ferro`);
} else if (wins >= 10 && wins <= 20) {
    console.log(`O Herói com o saldo de ${balance} está no nível Bronze`);
} else if (wins >= 21 && wins <= 50) {
    console.log(`O Herói com o saldo de ${balance} está no nível Prata`);
} else if (wins >= 51 && wins <= 80) {
    console.log(`O Herói com o saldo de ${balance} está no nível Ouro`);
} else if (wins >= 81 && wins <= 90) {
    console.log(`O Herói com o saldo de ${balance} está no nível Diamante`);
} else if (wins >= 91 && wins <= 100) {
    console.log(`O Herói com o saldo de ${balance} está no nível Lendário`);
} else if (wins >= 101) {
    console.log(`O Herói com o saldo de ${balance} está no nível Imortal`);
}
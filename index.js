let heroi = "Ceanna";
let xpHeroi = 10.000;
const patenteHeroi = [
    {nivelHeroi: 'Ferro', xpMin: 0, xpMax: 1.000},
    {nivelHeroi: 'Bronze', xpMin: 1.001, xpMax: 2.000},
    {nivelHeroi: 'Prata', xpMin: 2.001, xpMax: 5.000},
    {nivelHeroi: 'Ouro', xpMin: 5.001, xpMax: 7.000},
    {nivelHeroi: 'Platina', xpMin: 7.001, xpMax: 8.000},
    {nivelHeroi: 'Ascendente', xpMin: 8.001, xpMax: 9.000},
    {nivelHeroi: 'Imortal', xpMin: 9.001, xpMax: 10.000},
    {nivelHeroi: 'Radiante', xpMin: 10.001, xpMax: Infinity}
];

// usando um loop for para percorrer o array de objetos
for(let i =0; i < patenteHeroi.length; i++) {
    if(xpHeroi >= patenteHeroi[i].xpMin && xpHeroi <= patenteHeroi[i].xpMax) {
        console.log(`O Herói de nome ${heroi} está no nível de ${patenteHeroi[i].nivelHeroi}`);
        break;
    }
};
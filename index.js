let heroi = "Ceanna";
let xpHeroi = 7.000;
let nivelHeroi

if (xpHeroi <= 1.000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1.001 && xpHeroi <= 2.000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2.001 && xpHeroi <= 5.000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5.001 && xpHeroi <= 7.000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7.001 && xpHeroi <= 8.000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8.001 && xpHeroi <= 9.000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9.001 && xpHeroi <= 10.000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log(`O Herói de nome ${heroi} está no nível de ${nivelHeroi}`);
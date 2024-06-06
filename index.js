let nomeHeroi = "Vine"
let experienciaHeroi = 10001
let rankHeroi = ""

if (experienciaHeroi <= 1000){
    rankHeroi = "Ferro"
} else if (experienciaHeroi <= 2000){
    rankHeroi = "Broze"
} else if (experienciaHeroi <= 5000){
    rankHeroi = "Prata"
} else if (experienciaHeroi <= 7000){
    rankHeroi = "Ouro"
} else if (experienciaHeroi <= 8000){
    rankHeroi = "Platina"
} else if (experienciaHeroi <= 9000){
    rankHeroi = "Ascendente"
} else if (experienciaHeroi <= 10000){
    rankHeroi = "Imortal"
} else if (experienciaHeroi > 10000){
    rankHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)
let nheroi = "homem aranha"
let xp = 8500

switch (xp) {
    case xp <= 1000:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Ferro)
        break;
    case xp >=1001 || xp <= 2000:
         console.log("O Heroi de nome," +nheroi + "esta no nivel " +Bronze)
         break;
    case xp >=2001 || xp <= 5000:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Prata)
        break;
    case xp >=5001 || xp <=6000:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Ouro) 
        break;
    case xp >= 6001 || xp <=7001:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Platina)
        break;
    case xp >=7001 || xp <= 8000: 
    console.log("O Heroi de nome," +nheroi + "esta no nivel " +Diamante)
    break;
    case xp >=8001 || xp <= 9000:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Acendente)
        break;
    case xp >=9001 || xp <= 10000:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Imortal)
        break;
    case xp > 10001:
        console.log("O Heroi de nome," +nheroi + "esta no nivel " +Radiante)
        break;
        default:
        break;
}
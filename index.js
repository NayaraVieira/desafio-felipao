let nomeHeroi = 'Batman';
let xpHeroi = 10500;
let nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante'];
let i = 0;

while(i < nivel.length){

    if (xpHeroi <= 1000) {
        console.log('O seu herói está nível ' + nivel[i]) //0
        break;
    } 
    i++
    
    if (xpHeroi > 1000 && xpHeroi <= 2000) {
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    }
    i++
    
    if (xpHeroi > 2000 && xpHeroi <= 5000) {
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    }
    i++
    
    if (xpHeroi > 5000 && xpHeroi <= 7000) {
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    } 
    i++
    
    if (xpHeroi > 7000 && xpHeroi <= 8000) {
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    } 
    i++
    
    if (xpHeroi > 8000 && xpHeroi <= 9000) {
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    } 
    i++
    
    if (xpHeroi > 9000 && xpHeroi <= 10000) {
    
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    } else {
        i++
        console.log('O seu herói está no nível ' + nivel[i])
        break;
    }

}
console.log('O herói de nome ' + nomeHeroi + ' está no nível ' + nivel[i]);




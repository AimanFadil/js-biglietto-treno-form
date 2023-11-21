//CALCOLO PREZZO BIGLIETTO


// BOTTONI MILESTONE 1

const button = document.querySelector('.button')

button.addEventListener('click', function(){
    let nome = document.getElementById(`nome`).value;
    let km = document.getElementById(`km`).value;
    let eta = document.getElementById(`eta`).value;

    let totale = km * 0.21;

    if (eta <= 17) {
        totale -= totale * 20 / 100;
        document.getElementById(`resume`).innerText = ` ${nome} di anni ${eta} Il suo biglietto della distanza di ${km}km ridotto ha il costo di`
        
    } 
    else if (eta >= 65) {
        totale -= totale * 40 / 100;
        document.getElementById(`resume`).innerText = ` ${nome} di anni ${eta} Il suo biglietto della distanza di ${km}km scontato ha il costo di`
    } 
    else {
        document.getElementById(`resume`).innerText = ` ${nome} di anni ${eta} Il suo biglietto della distanza di ${km}km standard ha il costo di`
    }

    let n = totale.toFixed(2);
    document.getElementById(`price`).innerHTML = totale;
    console.log(n)
    
     
})

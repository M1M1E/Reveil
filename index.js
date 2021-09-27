
window.onload = function() {
    
    setInterval(timer, 1000);
}

function timer(){
    let hours = document.querySelector('.hours');
    let dot = document.querySelector('.dot');
    let minutes = document.querySelector('.minutes');

    let date = new Date();
    hours.innerText = date.getHours() <10 ? '0' + date.getHours() : date.getHours();
    // if ternaire = Si l'heure est inférieur à 10, ajoute un Zéro : sinon condition fausse, ne change rien
    minutes.innerText = date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes();
    dot.classList.toggle('doublePoint');
}

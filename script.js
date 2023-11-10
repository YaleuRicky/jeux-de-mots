function afficherResultat(score, i){
    let spanScore = document.querySelector('.zoneScore span');

    let affichageScore = `${score} / ${i}`
    spanScore.innerHTML = affichageScore;
};

function afficherProposition(proposition){
    let zoneProposition = document.querySelector('.zoneProposition');
    zoneProposition.innerText = proposition
}

function lancerJeu(){
    let score = 0;
    let i = 0;
    let listePoposition = listeMots;

    let btnValider = document.getElementById('valider');
    let inputEcriture = document.getElementById('ecriture');

    afficherProposition(listePoposition[i]);
    btnValider.addEventListener('click', () => {
        if(inputEcriture.value === listePoposition[i]){
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = '';
        if(listePoposition[i] === undefined){
            afficherProposition('Le jeu est termine, bravo');
            btnValider.disabled = true;
        }else{
            afficherProposition(listePoposition[i])
        }
       
    })

    let listeRadio = document.querySelectorAll('input[type="radio"]');
    for(let t = 0; t < listeRadio.length; t++) {
        listeRadio[t].addEventListener('change', (event) => {
            if(event.target.value === '1') {
                listePoposition = listeMots
            }else {
                listePoposition = listePhrases
            }
            afficherProposition(listePoposition[i])
        })

    afficherResultat(score, i)
}}











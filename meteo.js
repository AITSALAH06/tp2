function showCity() {

    let message = document.querySelector('#label');
    let nomVilleSelectionnee = document.getElementById('pays').value;
    console.log(nomVilleSelectionnee);
    
    let villes = document.getElementsByClassName('ville');
    for (let i = 0; i < villes.length; i++) {
        if (nomVilleSelectionnee == villes[i].id) {
            villes[i].style.display = "";
            villes[i].style.width = "100%";
            message.firstChild.nodeValue = "You selected: " + villes[i].id;

        } else {
            villes[i].style.display = "none";
        }
    }
}
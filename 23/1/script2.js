//traduction*
var traduction = $('.traduction div');

const translateText = (id) => {

    switch (id) {
        case 'GR':
            $("#info").text("1 . Ich klicke alle zwei ähnliche Zeichen mit der gleichen Farbe :");
            break;
        case 'FR':
            $("#info").text("1 . Je clique avec la même couleur tous les deux caractères semblables :");
            break;
        case 'EN':
            $("#info").text("1 . I click with the same color every two similar characters :");
            break;
        case 'TR':
            $("#info").text("1 . Aynı renkte iki benzer harf tıklıyorum :");
            break;
        default:
            $("#info").text("1 . Je clique avec la même couleur tous les deux caractères semblables :");
            break;
    }



}




var pageid = 1;
var exercise = 1;


var index = 0;






var selectedTopimage = false
let responsevrai = ["word1", "word2", "word3","pic1", "pic2", "pic3"];
var started = false

var sousindex;
var images = $('.ligne1 div');

// Data
const tabLineOne = ["word1", "word2", "word3"];
const tabLineTwo = ["pic1", "pic2", "pic3"];

// Tableau des couleurs
const colors = ["rgb(107, 32, 228) ", "rgb(226, 85, 69)", "rgb(32, 228, 81)"];

// Variables globales
// tableau des reponses correctes
const reponsecorrect = [
    ["word1", "pic3"],
    ["pic3", "word1"],
    ["word2", "pic2"],
    ["pic2", "word2"],
    ["word3", "pic1"],
    ["pic1", "word3"],
    
];

// tableau des reponses utilisateur
const respones = [];

// L'index de couleur dans le tableau des couleurs
var selectedColorIndex = 0;

// variable qui indique que la couleur a été sélectionné deux fois
var isColorSelectedTwice = false;

// variable qui indique qu'une lettre de tableau haut a été sélectionné
var isTopLetterSelected = false;

// variable qui indique qu'une lettre de tableau bas a été sélectionné
var isBottomLetterSelected = false;

// tableau pour contenir deux lettre sélectionné
var elements = [];

/**
 * fonction déclenché par un click utilisateur
 * sur des lettre de deux tableaux
 * @param {l'id de l'élément sélectionné} id
 */
const onSelect = (id) => {
    //si la lettre a été sélectionné
    if (isClicked(id)) {
        //on affiche un message d'erreur
        console.log("its already clicked");
    }
    // si la lettre n'été pas sélectionné
    else {
        // si une lettre de tableau de haut n'est pas sélectionné et le tableau de haut contient l'élément cliquer
        if (!isTopLetterSelected && tabLineOne.includes(id)) {
            // on change le variable pour indiquer qu'un élement de haut a été séléctionné
            isTopLetterSelected = true;

            //on traite le changement
            makeChange(id, isBottomLetterSelected);
        }

        // si une lettre de tableau de bas n'est pas sélectionné et le tableau de bas contient l'élément cliquer
        if (!isBottomLetterSelected && tabLineTwo.includes(id)) {
            // on change le variable pour indiquer qu'un élement de bas a été séléctionné
            isBottomLetterSelected = true;
            //on traite le changement
            makeChange(id, isTopLetterSelected);
        }
    }

    //verification qu'on est sur le meme ligne
};

/**
 * Traite le changement de couleur de l'élement et l'ajoute dans le tableau de reponse
 * @param {*} id ID de l'élément sélectionné
 * @param {*} selected 
 */
const makeChange = (id, selected) => {
    //changement des couleurs
    document.getElementById(id).style.border = "6px solid ";
    document.getElementById(id).style.borderColor =
        colors[selectedColorIndex];
        

    //si la couleur a été sélectionné deux fois
    if (isColorSelectedTwice) {
        //on passe à l'index de couleur suivant dans le tableau des couleur
        selectedColorIndex++;
        // la nouvelle couleur n'est pas sélectionné deux fois
        isColorSelectedTwice = false;
    }
    // si la couleur n'été pas sélectionné deux fois
    else {
        // la prochaine click sera la deuxième selection donc la couleur sera sélectionné deux fois
        isColorSelectedTwice = true;
    }

    // on ajoute l'id dans le tableau des éléments
    elements.push(id);

    //si un élément de haut et un element de bas sont séléctionné
    if (selected) {
        //on ajoute le tableau de deux éléments au tableau des reponse
        respones.push(elements);
        //on remet les variable à l'état initiale
        isTopLetterSelected = false;
        isBottomLetterSelected = false;
        elements = [];

        console.log(respones)
    }
};

function removeAlert() {
    $('#msg').remove();
}

function removeAlert() {
    $('#error').remove();
}
/**
 * Vérifie si la lettre a été déja sélectionné
 *
 * @param { l'id de l'élément sélectionné} id
 * @returns true si déja cliquer sinon false
 */
const isClicked = (id) => {
    let retVal = false;
    //pour chque élément du tableau reponse
    respones.forEach((el) => {
        //pour chaque élément du tableau el
        if (el.includes(id)) retVal = true;
    });

    if (elements.includes(id)) retVal = true;

    //on retourne la valeur
    return retVal;
};

const checkResponse = (element) => {
    console.log("fffff")
console.log(respones)
    let checked = false;
    if (element.length !== 2) {
        console.log('element pas bon');
    } else {
        reponsecorrect.forEach((el) => {
            if ((element[0] === el[0] || element[0] === el[1]) && (element[1] === el[0] || element[1] === el[1])) {
                checked = true
            }
        })
    }

    return checked;
};
const verification = () => {
    if (pageid == 1) {

        let nombtn = $('.justifier').text();
        let verified = false;
        if (nombtn === "أتأكّد") {

            //Use foreach to make a loop on the responses array
            //and compareit with the reponsecorrect array
            respones.forEach((el) => {
                verified = checkResponse(el)
                if (verified === false) {
                    return
                }
            });

            if (verified) {
                bravo.play();
            } else {
                faux.play();

            }
            $("#exerciceone").hide();
            $("#answers").show();
            $('.justifier').text('فهمت');
        }


    } else {
        window.location.href = "../2/index.html";
    }

    pageid++;
}
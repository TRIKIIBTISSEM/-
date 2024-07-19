var score = 0;
var pageid = 1;
var exercise = 1;
var index = 0;
var selectedTopimage = false
let responsevrai = ['imag1', 'imag3', 'imag4'];
var started = false

var sousindex;
var images = $('.ligne1 div');

//Variables compteur

let correctAnswers = sessionStorage.getItem('CA');
let wrongAnswers = sessionStorage.getItem('WA');
let currentScreen = 5;

console.log("currentScreen :", currentScreen);
console.log("Correct :", correctAnswers);
console.log("Wrong :", wrongAnswers);
//


// Data
const tabLineOne = ["ltr1", "ltr2", "ltr3"];
const tabLineTwo = ["ltr4", "ltr5", "ltr6"];

// Tableau des couleurs
const colors = ["red", "green", "blue"];

// Variables globales
// tableau des reponses correctes
const reponsecorrect = [
  ["ltr1", "ltr6"], ["ltr6", "ltr1"],
  ["ltr2", "ltr4"], ["ltr4", "ltr2"],
  ["ltr3", "ltr5"], ["ltr5", "ltr3"],
 
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
  document.getElementById(id).style.backgroundColor =
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

  let checked = false;
  if (element.length !== 2) {
    console.log('element pas bon');
  }
  else {
    reponsecorrect.forEach((el) => {
      if ((element[0] === el[0] || element[0] === el[1]) && (element[1] === el[0] || element[1] === el[1])) {
        checked = true
      }
    })
  }

  return checked;
};
const verification = () => {
   if (pageid ==1) {

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
          let bravo = document.getElementById("bravo");

            console.log('bravo');
            bravo.play();
            correctAnswers++;
            sessionStorage.setItem('CA',correctAnswers);

      
        }
        else {
          let repeter = document.getElementById("repeter");

          console.log('repeter');
          repeter.play();
          wrongAnswers++;
          sessionStorage.setItem('WA',wrongAnswers);

       
        }
        $('.sousligne').css( 'animation', 'msg 1s');
$('.sousligne').css( 'animation-iteration-count', '1')
        $("#exerciceone").hide();
        $("#answers").show();
        $('.justifier').hide();
      }
  
     
    } else {
      // compteur function
 window.parent.checkResults({
  currentScreen: currentScreen,
  correctAnswers: correctAnswers,
  wrongAnswers: wrongAnswers,

});
//
   }

    pageid++;

    console.log("currentScreen :", currentScreen);
    console.log("Correct :", correctAnswers);
    console.log("Wrong :", wrongAnswers);

}
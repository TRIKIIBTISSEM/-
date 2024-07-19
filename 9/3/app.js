let repVrai = ["let3"];
let tabrep = [];

let sEx = 0;

let numPage = 0;

let tabtra = ["En", "Fr", "Tr", "Al"];
let traduction = $('.traduction div');

let nbrep = 0;
let s = 0;

//Variables compteur

let correctAnswers = sessionStorage.getItem('CA');
let wrongAnswers = sessionStorage.getItem('WA');
let currentScreen = 5;

console.log("currentScreen :", currentScreen);
console.log("Correct :", correctAnswers);
console.log("Wrong :", wrongAnswers);
//

function myFunc(id) {

    $(traduction[0]).text($('#' + id).text());

}


function changeColor(id)
 {
    document.getElementById(id).style.border = ' solid green 7px ';
    if(tabrep.indexOf(id) === -1){
        tabrep.push(id)
;
        console.log(tabrep);
    }
    else{
        document.getElementById(id).style.border = 'none';
        deleteElement(id)
;
        console.log(tabrep);
    }
   
}

const deleteElement = (id) => {
    let arr = []
    tabrep.forEach((el) => {
        if (el !== id) {
            arr.push(el);
        }
    });

    tabrep = arr;
}




function init() {

    if (numPage % 2 == 0) {

        $('#let3').css('margin-top', '10%');
        $('#let3').css('display', 'block');
        $('#let2').css('display', 'none');
        $('#let1').css('display', 'none');
        
        
       
        console.log(repVrai);
        console.log(tabrep);

        for (let j = 0; j < repVrai.length; j++) {
            if (repVrai.includes(tabrep[j])) {
                s++;
            }
            $('.justifier').hide();
            $('.justifier').css('margin-right', '0%');

      
         
          
}


        console.log(s);

        if (s == 1 && tabrep.length ==1) {
            let bravo= document.getElementById("bravo");
          
            console.log('bravo');
            bravo.play();
            correctAnswers++;
            sessionStorage.setItem('CA',correctAnswers);

        } else {
            
            let faux= document.getElementById("faux");
          
            console.log('faux');
            faux.play();
            wrongAnswers++;
            sessionStorage.setItem('WA',wrongAnswers);

        }

    }
    

    numPage++;
}


function verification() {
    if (sEx ==0) {
        init();

        sEx++;

    }else{
      
     // compteur function
 window.parent.checkResults({
    currentScreen: currentScreen,
    correctAnswers: correctAnswers,
    wrongAnswers: wrongAnswers,

});
//
    }

   

    console.log("currentScreen :", currentScreen);
    console.log("Correct :", correctAnswers);
    console.log("Wrong :", wrongAnswers); 
}
$('.verifBouton').click(verification);

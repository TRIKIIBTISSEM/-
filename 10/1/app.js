let repVrai = ["let1","let2","let4", "let6","let10"];
let tabrep = [];

let sEx = 0;

let numPage = 0;

let tabtra = ["En", "Fr", "Tr", "Al"];
let traduction = $('.traduction div');

let nbrep = 0;
let s = 0;

//Variables compteur

let correctAnswers = 0;
let wrongAnswers = 0;
let currentScreen = 1;

console.log("currentScreen :", currentScreen);
console.log("Correct :", correctAnswers);
console.log("Wrong :", wrongAnswers);
//

function myFunc(id)

 {

    $(traduction[0])[0].innerHTML = $('#' + id)[0].innerHTML;

}


function changeColor(id)
 {
    document.getElementById(id).style.background = ' yellow ';
    if(tabrep.indexOf(id) === -1){
        tabrep.push(id)
;
        console.log(tabrep);
    }
    else{
        document.getElementById(id).style.background = '';
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

        $('#let3').css('display', 'none');
        $('#let5').css('display', 'none');
        $('#let7').css('display', 'none');
        $('#let8').css('display', 'none');
        $('#let9').css('display', 'none');
        $('#let6').css('margin-top', '2%');
        $('#let1').css('margin-top', '2%');
        $('#let2').css('margin-top', '2%');
        $('#let4').css('margin-top', '2%');
        $('#let10').css('margin-top', '2%');
        

        console.log(repVrai);
        console.log(tabrep);

        for (let j = 0; j < repVrai.length; j++) {
            if (repVrai.includes(tabrep[j])) {
                s++;
            }
            $('.justifier').text('فهمت');
            $('.justifier').css('margin-right', '0%');

      
         
          
}


        console.log(s);

        if (s === 5 && tabrep.length === 5) {
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
        window.location.href="../2/index.html";
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
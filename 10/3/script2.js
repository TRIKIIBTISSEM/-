//traduction*
var traduction = $('.traduction div');

const translateText = (id) => {

  switch(id){
    case 'AL' : $("#info").html("3. Ich höre zu und setze ein Häkchen (<img id='icone'  src='image/tic.png'>) unter jedes Familienmitglied:"); break;
    case 'FR' : $("#info").html(" 3. J'écoute, puis je mets la marque (<img id='icone'  src='image/tic.png'>) sous les membres du famille:"); break;
    case 'EN' : $("#info").html("  3. I listen then I put a mark (<img id='icone'  src='image/tic.png'>) under the family members:"); break;
    case 'TR' : $("#info").html("3. Dinliyorum, ve her aile üyesinin altına işaret (<img id='icone'  src='image/tic.png'>) koyuyorum:"); break;
    default : $("#info").html(" 3. J'écoute, puis je mets la marque (<img id='icone'  src='image/tic.png'>) sous les membres du famille:"); break;
  }
 

}


var pageid = 1;
var exercise = 1;


var index = 0;


const son = ['image1', 'image2', 'image3', 'image4', 'image5'];
s1 = document.getElementById("s1");
s2 = document.getElementById("s2");
s3 = document.getElementById("s3");

//Variables compteur

let correctAnswers = sessionStorage.getItem('CA');
let wrongAnswers = sessionStorage.getItem('WA');
let currentScreen = 5;

console.log("currentScreen :", currentScreen);
console.log("Correct :", correctAnswers);
console.log("Wrong :", wrongAnswers);
//

 

s1.addEventListener('click', function () {
    $('#' + son[0])[0].play();
})
s2.addEventListener('click', function () {
    $('#' + son[1])[0].play();
})
s3.addEventListener('click', function () {
    $('#' + son[2])[0].play();
})


const untick = () => {
    t1.style.display = "none";
    t2.style.display = "none";
    t3.style.display = "none";
   
}
const tick = () => {

    b1 = document.getElementById('v1');
    t1 = b1.querySelector('.tic');
    b2 = document.getElementById('v2');
    t2 = b2.querySelector('.tic');
    b3 = document.getElementById('v3');
    t3 = b3.querySelector('.tic');
   

    body = $('body');

    untick();

    b1.addEventListener('click', function () {

        if(t1.style.display === 'none'){
            t1.style.display = 'block';
        }
        else{
            t1.style.display = 'none';
        }
        

    });
    b2.addEventListener('click', function () {
        if(t2.style.display === 'none'){
            t2.style.display = 'block';
        }
        else{
            t2.style.display = 'none';
        }

    });
    b3.addEventListener('click', function () {
        if(t3.style.display === 'none'){
            t3.style.display = 'block';
        }
        else{
            t3.style.display = 'none';
        }

    });

   
}
tick();



const verification = () => {

    // verify first on the id 

    exercice1();



}


const exercice1 = () => {
    switch (pageid) {
        case 1: {
            if ((t1.style.display == "block") && (t2.style.display == "none") && (t3.style.display == "block") ) {


                console.log('bravo');
                bravo.play();
                correctAnswers++;
                sessionStorage.setItem('CA',correctAnswers);
    
    
                } else {
    
    
                console.log('faux');
                faux.play();
                wrongAnswers++;
                sessionStorage.setItem('WA',wrongAnswers);

            }

            $(".tic").hide()

            $("#ticres1").show()
            $("#ticres2").hide()
            $("#ticres3").show()
           
            $('.justifier').hide();
            pageid++
            break;
        };
        case 2: {
        
            break;
        };



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
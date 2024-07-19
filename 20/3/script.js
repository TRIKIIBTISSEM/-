let tab = ["im1"];
let tabvrai = [ "im1"];
let tabrep = [];
let nbrep = 0;
let s = 0;

let sEx = 0;

let numPage = 0;

let tabtra = ["En", "Fr", "Tr", "Al"];
let traduction = $('.traduction div');

let s1 = document.getElementById("s1");


let leger = document.getElementById("leger");
;


s1.addEventListener('click', function () {
    papillon.play();

});


function myFunc(id) {

    $(traduction[0]).text($('#' + id).text());

}
console.log(tabrep);
function myFunction(id) {
    document.getElementById(id).style.border = 'solid red 7px';
    if(tabrep.indexOf(id) === -1){
        tabrep.push(id);
        console.log(tabrep);
    }
    else{
        document.getElementById(id).style.border = 'none';
        deleteElement(id);
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
        $('#im3').css('display', 'none');
        $('#im2').css('display', 'none')
        $('#im1').css('display', 'block');
  
        $('.words').css('display', 'none');
  
        $('.son').css('display', 'none');
        $('.pic').css( 'animation', 'msg 1s');
        $('.pic').css( 'animation-iteration-count', '1')
        $('.image').css( 'animation', 'msg 1s');
        $('.image').css( 'animation-iteration-count', '1')
    
      
        console.log(tabrep);
        console.log(tabvrai);
        for (let i = 0; i < tabrep.length; i++) {

            nbrep++;
            for (let j = 0; j < tabvrai.length; j++) {
                if (tabvrai[j] == tabrep[i]) {
                    s++;
                }
            }

        }



        if (s == 1 && tabrep.length == 1) {
            let bravo = document.getElementById("bravo");

            console.log('bravo');
            bravo.play();


        } else {
            let faux = document.getElementById("faux");

            console.log('faux');
            faux.play();

        }
        $('.verifBouton').hide();
    }


    numPage++;
}


function verification() {
    if (sEx == 0) {
        init();

        sEx++;

    } else {
        
    }



}
$('.verifBouton').click(verification);

let repVrai = ["let2"];
let tabrep = [];

let sEx = 0;

let numPage = 0;

let tabtra = ["En", "Fr", "Tr", "Al"];
let traduction = $('.traduction div');

let nbrep = 0;
let s = 0;



function removeAlert() {
    $('#msg').remove();
}
let S1 = document.getElementById('ecouteur');
let aud1 = document.getElementById('aud1');
S1.addEventListener('click', function () {
    aud1.play();

});

function myFunc(id) {

    $(traduction[0]).text($('#' + id).text());

}


function changeColor(id)
 {
    document.getElementById(id).style.border = ' solid red 7px';
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

        $('#let1').css('display', 'none');
        $('#carreau').css('margin-right', '18%');
        $('#let2').css('display', 'none');
        $('#ecouteur').css('display', 'none');
    
        $('#carreau').css( 'animation', 'msg 1s');
        $('#carreau').css( 'animation-iteration-count', '3') ;
        $('#carreau').css('color', 'blue');

        console.log(repVrai);
        console.log(tabrep);

        for (let j = 0; j < repVrai.length; j++) {
            if (repVrai[j] == tabrep[j]) {
                s++;
            }
            $('.justifier').text('فهمت');
            $('.justifier').css('margin-right', '0%');

      
         
          
}


        console.log(s);

        if (s == 1 && tabrep.length == 1) {
            let bravo= document.getElementById("bravo");
          
            console.log('bravo');
            bravo.play();


        } else {
            let faux= document.getElementById("faux");
           
            console.log('faux');
            faux.play();

        }

    }
    

    numPage++;
}


function verification() {
    if (sEx ==0) {
        init();

        sEx++;

    }else{
        window.location.href="../3/index.html";
    }
   


}


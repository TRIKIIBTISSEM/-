let repVrai = ["let2"];
let tabrep = [];

let sEx = 0;

let numPage = 0;

let tabtra = ["En", "Fr", "Tr", "Al"];
let traduction = $('.traduction div');

let nbrep = 0;
let s = 0;



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

        $('#let2').css('margin-top', '10%');
        $('#let2').css('display', 'block');
        $('#let1').css('display', 'none');
        $('#let3').css('display', 'none');
        
       
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

        if (s ==1 && tabrep.length ==1) {
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
      
    }
   


}


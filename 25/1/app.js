let repVrai = ["let1","let2","let9","let8", "let10"];
let tabrep = [];

let sEx = 0;

let numPage = 0;

let tabtra = ["En", "Fr", "Tr", "Al"];
let traduction = $('.traduction div');

let nbrep = 0;
let s = 0;



function myFunc(id) {

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
        $('#let6').css('display', 'none');
        $('#let7').css('display', 'none');
        $('#let4').css('display', 'none');
      
        $('#let1').css('margin-top', '2%');
        $('#let2').css('margin-top', '2%');
        $('#let9').css('margin-top', '2%');
        $('#let8').css('margin-top', '2%');
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
        window.location.href="../2/index.html";
    }
   


}


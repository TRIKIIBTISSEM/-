//traduction//
var traduction = $('.traduction div');

const translateText = (id) => {

  switch(id){
    case 'GR' : $("#info").text("3. Ich klicke auf zwei entsprechende Elemente derselben Farbe:"); break;
    case 'FR' : $("#info").text("3. Je clique de la même couleur sur chacun des deux éléments proportionnels :"); break;
    case 'EN' : $("#info").text("3. I click the same color on each of the two proportional elements:"); break;
    case 'TR' : $("#info").text("3. İki uygun eleman aynı rengi tıklıyorum:"); break;
    default : $("#info").text("3. Je clique de la même couleur sur chacun des deux éléments proportionnels :"); break;
  }
 

}





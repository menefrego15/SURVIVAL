window.onload = function() {
    document.getElementById("submit").addEventListener("click", playGame);
}

function playGame() {


//GET SPORTS VALUE
      if (document.getElementById('yes').checked) {
        sports = document.getElementById('yes').value;
      }

      if (document.getElementById('no').checked) {
        sports = document.getElementById('no').value;
      }

//GET GENDER VALUE
      if (document.getElementById('male').checked) {
        sexe = document.getElementById('male').value;
      }

      if (document.getElementById('female').checked) {
        sexe = document.getElementById('female').value;
      }
    

//GET AGE VALUE

    var age = document.getElementById("age").value;


//GET SIZE VALUE

    var size = document.getElementById("size").value;
    

//GET WEIGHT VALUE

    var weight = document.getElementById("weight").value;
    
if (sexe == "male") {
    var sexe = 100;
}else{
    var sexe = 50;
}

if (sports == "yes") {
    var sports = 100;
} else {
    var sports = 25;
}



//age du comnbattant

var age = (-(age*age)+(50*age))/6.25;


var size = 12.5*(math.log(size-120));

var weight = (-(weight*weight)+(160*weight))/64;

var quo = 0;
var quo = (((100*sexe)+(80*weight)+(60*size)+(40*sports)+(20*age))*1.3)/300;



var h = 0;
var h = ((quo*100)-5000)/45;



var r = Math.ceil(h);


if (r<=0) {
    document.getElementById("resultat").innerHTML = "tu as 0% de chances de tenir 30s contre Floyd Mayweather";
}else if (r>=100) {
    document.getElementById("resultat").innerHTML = "tu as 100% de chances de tenir 30s contre Floyd Mayweather";
}

else{

document.getElementById("resultat").innerHTML = "tu as " + r + "% de chances de tenir 30s contre Floyd mayweather";

}


}


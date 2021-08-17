pic1 = document.getElementById("picture1")
pic2 = document.getElementById("picture2")



let promo = ['Dylan','LucF','LucV','Lucas','Alexis','Florian','Kevin','Mathilde','Myriam','Quentin','Simon','Soufiane'];

function switchoo(list,element) {             
	var i = list.indexOf(element);
    if (i > -1 ) {
    	list.splice(i,1);
    }
    else {
      list.push(element);
    }
    return list;
}


function toggleDylan(){
  document.getElementById("dylan").classList.toggle("immune");
  switchoo(promo,'Dylan');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleAlexis(){
  document.getElementById("alexis").classList.toggle("immune");
  switchoo(promo,'Alexis');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleFlorian(){
  document.getElementById("florian").classList.toggle("immune");
  switchoo(promo,'Florian');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleKevin(){
  document.getElementById("kevin").classList.toggle("immune");
  switchoo(promo,'Kevin');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleLucas(){
  document.getElementById("lucas").classList.toggle("immune");
  switchoo(promo,'Lucas');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleLucF(){
  document.getElementById("lucf").classList.toggle("immune");
  switchoo(promo,'LucF');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleLucV(){
  document.getElementById("lucv").classList.toggle("immune");
  switchoo(promo,'LucV');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleMathilde(){
  document.getElementById("mathilde").classList.toggle("immune");
  switchoo(promo,'Mathilde');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleMyriam(){
  document.getElementById("myriam").classList.toggle("immune");
  switchoo(promo,'Myriam');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleQuentin(){
  document.getElementById("quentin").classList.toggle("immune");
  switchoo(promo,'Quentin');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleSimon(){
  document.getElementById("simon").classList.toggle("immune");
  switchoo(promo,'Simon');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

function toggleSoufiane(){
  document.getElementById("soufiane").classList.toggle("immune");
  switchoo(promo,'Soufiane');
  document.getElementById("candidats").innerHTML = promo.join(' , ');
  document.getElementById("count").innerHTML = promo.length;
}

//Compteur
    document.getElementById("count").innerHTML = promo.length;
    document.getElementById("candidats").innerHTML = promo.join(' , ');
//



function Button() {

    document.getElementById("candidats").innerHTML = promo.join(' , ');

    let RNG1 = Math.floor(Math.random() * promo.length);

    document.getElementById("winner").innerHTML = promo[RNG1];
    document.getElementById("picture1").setAttribute("src","assets/img/"+promo[RNG1]+".jpg");


    // let promo2 = promo.splice(RNG1, 1);

    let RNG2 = Math.floor(Math.random() * promo.length);

    while (RNG1==RNG2) {
        RNG2 = Math.floor(Math.random() * promo.length);
    }
    document.getElementById("winner2").innerHTML = promo[RNG2];
    document.getElementById("picture2").setAttribute("src","assets/img/"+promo[RNG2]+".jpg");

    // fontion anonyme
    setTimeout(function() {document.getElementById("first").style.visibility = "visible"; document.getElementById("second").style.visibility = "visible";}, 100);
}







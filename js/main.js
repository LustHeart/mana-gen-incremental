setInterval(function(){// Make this show every Number
  dust += Math.round(dustPerSec)*Math.round(dustMulti)/25;
  document.getElementById("dps").innerText = format(Math.round(dustPerSec)*Math.round(dustMulti));
  document.getElementById("dust").innerText = format(Math.floor(dust));
  document.getElementById("dmulti").innerText = dustMulti;
  document.getElementById("darkDust").innerText = format(darkDust);
  document.getElementById("lightBit").innerText = lightBit;
  document.getElementById("wands").innerText = wands;
  document.getElementById("wandCost").innerText = format(wandCost);
  document.getElementById("wizards").innerText = wizards;
  document.getElementById("wizardCost").innerText = format(wizardCost);
  document.getElementById("bit").innerText = format(bit);
  document.getElementById("bitmulti").innerText = format(bitPerCombine);
  document.getElementById("fragments").innerText = format(fragments);
  document.getElementById("enchanters").innerText = enchanters;
  document.getElementById("encCost1").innerText = format(encCost1);
  document.getElementById("encCost2").innerText = format(encCost2);
  document.getElementById("cauldrons").innerText = cauldrons;
  document.getElementById("cauCost1").innerText = format (cauCost1);
  document.getElementById("cauCost2").innerText = format (cauCost2);
  document.getElementById("enhance").innerText = enhance;
  document.getElementById("enhCost").innerText = format(enhCost);
  document.getElementById("dupliBit").innerText = dupliBit;
  document.getElementById("dupliBitCost").innerText = format(dupliBitCost);
  draw();
},50 );

function draw() {
  if (lightBit >= 1 || dupliBit >= 1){
  document.getElementById("lightFalse").style.display = "none";
  document.getElementById("lightTrue").style.display = "inline-block";
  }else{
  document.getElementById("lightFalse").style.display = "inline-block";
  document.getElementById("lightTrue").style.display = "none";
  }
}

function getDPS () {
   format(Math.round(dustPerSec)*Math.round(dustMulti))
}

var mainGameLoop = window.setInterval(function() {   //sets up an interval for auto dark dust
	  increDust() 
}, 1000)

function increDust() { //Additional Chance to get dark mana dust
    let RandomNumber = Math.floor(Math.random() * 1001);
    if ((RandomNumber % 7) == 0) { 
    darkDust += darkDustAmount
    }else if ((RandomNumber % 7) != 0) {
    darkDust += 0
    }
}

function format(number) {
   	let exponent = Math.floor(Math.log10(number))
    	let mantissa = number / Math.pow(10, exponent)
     	if (exponent < 3) return number.toFixed(1)
    	return mantissa.toFixed(2) + "e" + exponent
}
    
function tab(goTab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("combiner").style.display = "none"
  document.getElementById("produstion").style.display = "none"
  document.getElementById("balance").style.display = "none"
  document.getElementById("options").style.display = "none"
  document.getElementById("about").style.display = "none"
  document.getElementById(goTab).style.display = "inline-block"
}

function subtab1(goSubtab1) {
  //subtab
  document.getElementById("mana1").style.display = "none"
  document.getElementById("mana2").style.display = "none"
  document.getElementById("mana3").style.display = "none"
  document.getElementById(goSubtab1).style.display = ""
}

function subtab2(goSubtab2) {
  // sub tab
  document.getElementById("combine1").style.display = "none"
  document.getElementById("combine2").style.display = "none"
  document.getElementById("combine3").style.display = "none"
  document.getElementById(goSubtab2).style.display = ""
}

function subtab3(goSubtab3) {
  // sub tab
  document.getElementById("dark").style.display = "none"
  document.getElementById("light").style.display = "none"
  document.getElementById("bal").style.display = "none"
  document.getElementById(goSubtab3).style.display = ""
}

function runDefautTab() {
  tab("produstion");
  subtab1("mana1");
  subtab2("combine1");
  subtab3("dark");
}

runDefautTab()
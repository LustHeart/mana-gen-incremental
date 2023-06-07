function gameLoop(){
	updateHTML()
	drawtab()
	generatingDust()
	updateValue()
	updateCombine()
	updateUpgrade()
	generatingDark()
}
function updateHTML() {
	editHTML("dust","You have "+format(player.currency.dust.total)+" Mana Dust");
	editText("dps",format(player.currency.dust.dps*player.currency.dust.multi1*player.currency.dust.multi2));
	editHTML("ddust","You have "+format(player.currency.ddust.total)+" Dark Mana Dust");
	editHTML("lightbit","You have "+format(player.currency.lightbit.total)+" Light Bit");
	editText("alldust",format(player.currency.dust.grandtotal));
	editText("timeplayed",formattime(player.timeplayed));
	player.timeplayed += 1/25
}

function cheatunlock() {
  // Get the checkbox
  var checkBox = document.getElementById("cheatcheck");
  // Get the output text
  var cheatButton = document.getElementById("cheat");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    cheatButton.style.display = "block";
  } else {
    cheatButton.style.display = "none";
  }
}

function test() {
 player.currency.bit.total  = 1234
 player.currency.dust.total = 1111111
 player.currency.ddust.total = 666666
}

function remove() {
 player.currency.bit.total  = 0
 player.currency.dust.total = 0
 player.currency.ddust.total = 0
}



function formattime(a) {
    return Math.floor(a).toFixed(0)
}

function automation(){
   var combineswitch1 = document.getElementById("autobitswitch");
  if (combineswitch1.checked == true){
    combineDust()
  }
}

function uuddlrlrss(){
   document.getElementById("debug").style.display = "block";
  }

function drawtab(){
   if (player.upgrades.darkgen == 1){
   document.getElementById("balancetab").style.display = "inline-block";
   }else{
   document.getElementById("balancetab").style.display = "none";
  }
  if (player.upgrades.lightunlocked == 1){
   document.getElementById("lighttab").style.display = "inline-block";
   }else{
   document.getElementById("lighttab").style.display = "none";
   }
  if (player.upgrades.autounlocked == 1){
   document.getElementById("autotab").style.display = "inline-block";
   }else{
   document.getElementById("autotab").style.display = "none";
   }
}

function generatingDust() {
 player.currency.dust.total += (player.currency.dust.dps*player.currency.dust.multi1*player.currency.dust.multi2)/25;
 player.currency.dust.grandtotal += (player.currency.dust.dps*player.currency.dust.multi1*player.currency.dust.multi2)/25;
}

function generatingDark() { //Additional Chance to get dark mana dust
    let RandomNumber = Math.floor(Math.random() * 1001);
    if ((RandomNumber % 7) == 0) { 
    player.currency.ddust.total += player.currency.ddust.amount/25;
    }else if ((RandomNumber % 7) != 0) {
    player.currency.ddust.total += 0
    }
}

function updateValue(){
 editText("wands",format(player.generator.wands.amount));
	editText("wandsCost",format(player.generator.wands.price));
	editText("wizards",format(player.generator.wizards.amount));
	editText("wizardsCost",format(player.generator.wizards.price));
	editText("enchanter",format(player.generator.enchanter.amount));
	editText("enchanterCost1",format(player.generator.enchanter.price1));
	editText("enchanterCost2",format(player.generator.enchanter.price2));
	editText("cauldron",format(player.generator.cauldron.amount));
	editText("cauldronCost1",format(player.generator.cauldron.price1));
	editText("cauldronCost2",format(player.generator.cauldron.price2));
	editText("enhance",format(player.balanceGen.enh.amount));
	editText("enhCost",format(player.balanceGen.enh.price));
	editText("shaGen",format(player.balanceGen.shaGen.amount));
	editText("shaGenCost",format(player.balanceGen.shaGen.price));
	editText("dupli",format(player.balanceGen.duplicate.amount));
	editText("dupliCost",format(player.balanceGen.duplicate.price));
}

function updateCombine(){
 editText("bit",format(player.currency.bit.total));
 editText("combineDustCost",format(player.currency.bit.cost));
	editText("bpc",format(player.currency.bit.amount));
	editText("fragment",format(player.currency.fragment.total));
	editText("combineBitCost",format(player.currency.fragment.cost));
	editText("fpc",format(player.currency.fragment.amount));
}

function combineDust(){
   if (player.currency.dust.total >= player.currency.bit.cost){
      player.currency.dust.total -= player.currency.bit.cost
      player.currency.bit.total += player.currency.bit.amount
   }
  if (player.upgrades.lightunlocked == 1){
   let RandomNumber = Math.floor(Math.random() * 1001);
    if ((RandomNumber % 7) == 0) { 
    player.currency.lightbit.total += player.currency.lightbit.amount
    }else if ((RandomNumber % 7) != 0) {
    player.currency.lightbit.total += 0
    }
  }
}

function combineBit(){
   if (player.currency.bit.total >= player.currency.bit.cost){
      player.currency.bit.total -= player.currency.bit.cost
      player.currency.fragment.total += player.currency.fragment.amount
   }
}

function tab(x) {
player.tab=x
	showHTML("gen",player.tab=='gen')
	showHTML("combine",player.tab=='combine')
	showHTML("upgrade",player.tab=='upgrade')
	showHTML("balance",player.tab=='balance')
	showHTML("options",player.tab=='options')
	showHTML("stat",player.tab=='stat')
}

function generatorTab(x) {
player.generatorTab=x
	showHTML("tier1gen",player.generatorTab=='tier1gen')
	showHTML("tier2gen",player.generatorTab=='tier2gen')
}

function balanceTab(x) {
player.balanceTab=x
	showHTML("light",player.balanceTab=='light')
	showHTML("dark",player.balanceTab=='dark')
}

function upgradeTab(x) {
player.upgradeTab=x
	showHTML("generator",player.upgradeTab=='generator')
	showHTML("automation",player.upgradeTab=='automation')
}

function format(number) {
   	let exponent = Math.floor(Math.log10(number))
    	let mantissa = number / Math.pow(10, exponent)
     	if (exponent < 3) return number.toFixed(0)
    	return mantissa.toFixed(2) + "e" + exponent
}
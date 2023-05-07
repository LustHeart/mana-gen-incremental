window.onload = function () {
		  loadGame();
			document.getElementById("dps").innerText = getDPS();
      document.getElementById("dust").innerText = dust;
      document.getElementById("dmulti").innerText = dustMulti;
      document.getElementById("darkDust").innerText = darkDust;
      document.getElementById("wands").innerText = wands;
      document.getElementById("wandCost").innerText = wandCost;
      document.getElementById("wizards").innerText = wizards;
      document.getElementById("wizardCost").innerText = wizardCost;
      document.getElementById("bit").innerText = bit;
      document.getElementById("bitmulti").innerText = bitPerCombine;
      document.getElementById("enchanters").innerText = enchanters;
      document.getElementById("encCost1").innerText = encCost1;
      document.getElementById("encCost2").innerText = encCost2;
      document.getElementById("cauldrons").innerText = cauldrons;
      document.getElementById("cauCost1").innerText = cauCost1;
      document.getElementById("cauCost2").innerText = cauCost2;
      document.getElementById("enhance").innerText = enhance;
      document.getElementById("enhCost").innerText = enhCost;
      document.getElementById("dupliBit").innerText = dupliBit;
      document.getElementById("dupliBitCost").innerText = dupliBitCost;
      notifier.success("Game Load!");
			}

function loadGame() {
				var savegame = JSON.parse(localStorage.getItem("gameSave"))
				if (typeof savegame.dust !== "undefined") dust = savegame.dust;
				if (typeof savegame.dustPerSec !== "undefined") dustPerSec = savegame.dustPerSec;
				if (typeof savegame.dustMulti !== "undefined") dustMulti = savegame.dustMulti;
				if (typeof savegame.bit !== "undefined") bit = savegame.bit;
				if (typeof savegame.bitPerCombine !== "undefined") bitPerCombine = savegame.bitPerCombine;
				if (typeof savegame.fragments !== "undefined") fragments = savegame.fragments;
				if (typeof savegame.fragmentPerCombine !== "undefined") fragmentPerCombine = savegame.fragmentPerCombine;
				if (typeof savegame.darkDust !== "undefined") darkDust = savegame.darkDust;
				if (typeof savegame.darkDustAmount !== "undefined") darkDustAmount = savegame.darkDustAmount;
				if (typeof savegame.lightBit !== "undefined") lightBit = savegame.lightBit;
				if (typeof savegame.lightBitAmount !== "undefined") lightBitAmount = savegame.lightBitAmount;
				if (typeof savegame.wands !== "undefined") wands = savegame.wands;
				if (typeof savegame.wandCost !== "undefined") wandCost = savegame.wandCost
				if (typeof savegame.wizards !== "undefined") wizards = savegame.wizards;
				if (typeof savegame.wizardCost !== "undefined") wizardCost = savegame.wizardCost;
				if (typeof savegame.enchanters !== "undefined") enchanters = savegame.enchanters;
				if (typeof savegame.encCost1 !== "undefined") encCost1 = savegame.encCost1;
				if (typeof savegame.encCost2 !== "undefined") encCost2 = savegame.encCost2;
				if (typeof savegame.cauldrons !== "undefined") cauldrons = savegame.cauldrons;
				if (typeof savegame.cauCost1 !== "undefined") cauCost1 = savegame.cauCost1;
				if (typeof savegame.cauCost2 !== "undefined") cauCost2 = savegame.cauCost2;
				if (typeof savegame.enhance !== "undefined") enhance = savegame.enhance;
				if (typeof savegame.enhCost !== "undefined") enhCost = savegame.enhCost;
				if (typeof savegame.dupliBit !== "undefined") dupliBit = savegame.dupliBit;
				if (typeof savegame.dupliBitCost !== "undefined") dupliBitCost = savegame.dupliBitCost;
				;
			}
			
function saveGame() {
		var gameSave = {
			dust,
			dustPerSec,
			dustMulti,
			bit,
			bitPerCombine,
			fragments,
			fragmentPerCombine,
			darkDust,
			darkDustAmount,
			lightBit,
      lightBitAmount,
			wands,
			wandCost,
      wizards,
			wizardCost,
      enchanters,
      encCost1,
      encCost2,
      cauldrons,
      cauCost1,
      cauCost2,
      enhance,
      enhCost,
      dupliBit,
      dupliBitCost
				};
				localStorage.setItem("gameSave", JSON.stringify(gameSave));
				notifier.success("Game Saved!")
			}
			

function removeSave() {
	  var gameSave = {};
	  localStorage.setItem("gameSave", JSON.stringify(gameSave));
		location.reload();
}
			
function confirmDestroy() {
    if (confirm("Are you sure you want to reset everything in manaverse")){
        anotherconfirmDestroy();
    } else {
        alert("Thank you for reminding me not to delete this save");
    }
}

function anotherconfirmDestroy() {
    if (confirm("ARE YOU SURE YOU WANT TO RESET EVERYTHING IN MANAVERSE (cannot be recovered or EVERYTHING) THIS IS YOUR LAST CHANCE")) {
        removeSave();
    } else {
        alert("I'm almost gone Thought it was going to destroy the save again.");
    }
}

setInterval (function () {
				saveGame();
			}, 30000); //30000 = 30 วิ

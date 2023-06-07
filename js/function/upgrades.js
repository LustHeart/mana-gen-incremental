function upgrade(name){
	//Called whenever player clicks a button to try to buy an upgrade.
	//If the player has the resources, toggles the upgrade on and does stuff dependent on the upgrade.
	if (name == 'darkgen' && player.currency.ddust.total >= 50){
		player.upgrades.darkgen = 1;
		player.currency.ddust.total -= 50;
	}
	if (name == 'decaydown' && player.currency.ddust.total >= 100){
		player.upgrades.decaydown = 1;
		player.currency.ddust.total -= 50;
		player.generator.wands.price /= 2;
		player.generator.wands.pricescaling -= 0.1;
		player.generator.wizards.price /= 2;
		player.generator.wizards.pricescaling -= 0.1;
		player.generator.enchanter.price1 /= 2;
		player.generator.enchanter.price1scaling -= 0.1;
	}
	if (name == 'lightunlocked' && player.currency.ddust.total >= 100 && player.currency.bit.total >= 5){
	 player.upgrades.lightunlocked = 1;
		player.currency.ddust.total -= 100;
		player.currency.bit.total -= 5;
	}
	if (name == 'autounlocked' && player.currency.bit.total >= 100){
	 player.upgrades.autounlocked = 1;
		player.currency.bit.total -= 100;
	}
	if (name == 'autobit' && player.currency.bit.total >= 100){
	 player.upgrades.autobit = 1;
		player.currency.bit.total -= 100;
	}
	if (name == 'doubledust' && player.currency.ddust.total >= 200){
		player.upgrades.doubledust = 1;
		player.currency.ddust.total -= 200;
		player.currency.dust.multi2 += 2;
		player.currency.ddust.multi += 1;
	}
}

function updateUpgrade() {
 if (player.upgrades.darkgen == 1){
		document.getElementById('darkgen').style.display = 'none';
		document.getElementById('lightunlocked').style.display = 'block';
		document.getElementById('cauldronButton').style.display = 'block';
	} else {
		document.getElementById('darkgen').style.display = 'inline';
		document.getElementById('lightunlocked').style.display = 'none';
		document.getElementById('cauldronButton').style.display = 'none';
	}
	if (player.upgrades.decaydown == 1){
		document.getElementById('decaydown').style.display = 'none';
	}
	if (player.upgrades.doubledust == 1){
		document.getElementById('doubledust').style.display = 'none';
		document.getElementById('quadrupledust').style.display = 'block';
	} else {
	 document.getElementById('doubledust').style.display = 'block';
		document.getElementById('quadrupledust').style.display = 'none';
	}
	if (player.upgrades.lightunlocked == 1){
		document.getElementById('lightunlocked').style.display = 'none';
	}
	if (player.upgrades.autounlocked == 1){
		document.getElementById('autounlocked').style.display = 'none';
	}
	if (player.upgrades.autobit == 1){
		document.getElementById('autobit').style.display = 'none';
		document.getElementById('autobitcheck').style.display = 'block';
	} else {
	 document.getElementById('autobit').style.display = 'block';
		document.getElementById('autobitcheck').style.display = 'none';
	}
}

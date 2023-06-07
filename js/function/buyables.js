// Mana Dust Tier 1
function buyWands(){
   if (player.currency.dust.total >= player.generator.wands.price){
      player.currency.dust.total -= player.generator.wands.price
      player.generator.wands.amount += 1
      player.currency.dust.dps += player.generator.wands.dpsgain
      player.generator.wands.price *= player.generator.wands.pricescaling
   }
}

function buyWizard(){
   if (player.currency.dust.total >= player.generator.wizards.price){
      player.currency.dust.total -= player.generator.wizards.price
      player.generator.wizards.amount += 1
      player.currency.dust.dps += player.generator.wizards.dpsgain
      player.generator.wizards.price *= player.generator.wizards.pricescaling
   }
}

function buyEnchanter(){
   if (player.currency.dust.total >= player.generator.enchanter.price1 && player.currency.bit.total >= player.generator.enchanter.price2){
      player.currency.dust.total -= player.generator.enchanter.price1
      player.currency.bit.total -= player.generator.enchanter.price2
      player.generator.enchanter.amount += 1
      player.currency.dust.dps += player.generator.enchanter.dpsgain
      player.generator.enchanter.price1 *= player.generator.enchanter.price1scaling
   }
   if (player.generator.enchanter.price1 >= 1000){
     player.generator.enchanter.price1 -= 800;
     player.generator.enchanter.price2 += 1;
   }
}

function buyCauldron(){
   if (player.currency.dust.total >= player.generator.cauldron.price1 && player.currency.ddust.total >= player.generator.cauldron.price2){
      player.currency.dust.total = Math.log(5, player.generator.cauldron.price)
      player.currency.ddust.total -= player.generator.cauldron.price2
      player.generator.cauldron.amount += 1
      player.currency.dust.dps += player.generator.cauldron.dpsgain
      player.generator.cauldron.price1 *= player.generator.cauldron.price1scaling
      player.generator.cauldron.price2 *= player.generator.cauldron.price2scaling
   }
}

// Dark Mana Dust Tier 1

function enhanceDust() {
				if (player.currency.ddust.total >= player.balanceGen.enh.price) {
					player.currency.ddust.total -=  player.balanceGen.enh.price;
					player.balanceGen.enh.amount += 1;
					player.currency.dust.multi1 += 0.5;
					player.currency.dust.total = 0;
					player.balanceGen.enh.price *= player.balanceGen.enh.pricescaling;
				}
}

function shaGen() {
				if (player.currency.ddust.total >= player.balanceGen.shaGen.price) {
					player.currency.ddust.total -=  player.balanceGen.shaGen.price;
					player.balanceGen.shaGen.amount += 1;
					player.currency.ddust.amount += 1;
					player.currency.dust.total /= 2;
					player.balanceGen.shaGen.price *= player.balanceGen.shaGen.pricescaling;
				}
}

// Light Mana Bit Tier 1

function duplicateSpell() {
				if (player.currency.lightbit.total >= player.balanceGen.duplicate.price) {
					player.currency.lightbit.total -=  player.balanceGen.duplicate.price;
					player.balanceGen.duplicate.amount += 1;
					player.currency.bit.amount *= 2;
					player.balanceGen.duplicate.price *= player.balanceGen.duplicate.pricescaling;
				}
}

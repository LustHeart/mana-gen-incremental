function upgradeWand() {// Generating Dust with WWand(0.5 Dust per Second)
				if (dust >= wandCost) {
					dust = dust - wandCost;
					wands = wands + 1;
					dustPerSec = dustPerSec + 1;
					wandCost = Math.round(wandCost * 1.5);
				}
			}

function upgradeWizard() {// Generating Dust with WWnd(5 Dust per Second)
				if (dust >= wizardCost) {
					dust = dust - wizardCost;
					wizards = wizards + 1;
					dustPerSec = dustPerSec + 5;
					wizardCost = Math.round(wizardCost * 1.25);
				}
			}
			
function upgradeEnc() {// Generating Dust with Enchanter (20 Dust per Second)
				if (dust >= encCost1 && bit >= encCost2 ) {
					dust = dust - encCost1;
					bit = bit - encCost2;
					enchanters = enchanters + 1;
					dustPerSec = dustPerSec + 20;
					encCost1 = Math.round(encCost1 * 1.5);
					encCost2 = Math.abs(encCost2 * 2)
				}
			}
			
function upgradeCau() {
				if (bit >= cauCost1 && darkDust >= cauCost2 ) {
					bit = bit - cauCost1;
					darkDust = darkDust - cauCost2;
					cauldrons = cauldrons + 1;
					dustPerSec = dustPerSec + 100;
					darkDustAmount = darkDustAmount + 1;
					cauCost1 = Math.round(cauCost1 * 2);
					cauCost2 = Math.abs(cauCost2 * 2.5)
				}
			}
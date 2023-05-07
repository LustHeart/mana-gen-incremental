function enhanceDust() {// Generating Dust with WWand(0.5 Dust per Second)
				if (darkDust >= enhCost) {
					darkDust = darkDust - enhCost;
					enhance = enhance + 1;
					dustMulti = dustMulti + 0.5;
					dust = 0;
					enhCost = Math.round(enhCost * 2);
				}
			}
			
function duplicateBit() {// Generating Dust with WWand(0.5 Dust per Second)
				if (lightBit >= dupliBitCost) {
					lightBit = lightBit - dupliBitCost;
					dupliBit = dupliBit + 1;
					bitPerCombine = bitPerCombine + 1;
					dupliBitCost = Math.round(dupliBitCost * 2);
				}
			}
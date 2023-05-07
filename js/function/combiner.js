function combineDust() {// Generating Dust with WWand(0.5 Dust per Second)
				if (dust >= 1e3) {
					dust = dust - 1e3;
					bit = bit + bitPerCombine;
					let RandomNumber = Math.floor(Math.random() * 100);
					if  ((RandomNumber % 7) == 0) { //Additional Chance to get dark mana dust
          lightBit += lightBitAmount
          }else{
          lightBit += 0
          }
				}
			}
			
function combineBit() {// Generating Dust with WWand(0.5 Dust per Second)
				if (bit >= 1e4 && darkDust >= 1e3) {
					bit = bit - 1e4;
					darkDust = darkDust - 1e3;
					fragments = fragments + fragmentPerCombine;
				}
			}
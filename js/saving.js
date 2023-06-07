function getStartPlayer(){
	return {
	   tab: 'gen',
	   generatorTab: 'tier1gen',
	   balanceTab: 'dark',
	   upgradeTab: 'generator',
	   timeplayed: 0, // In seconds.
	   currency: {
		   dust: {
		   total: 0,
		   grandtotal: 0,
		   dps: 1,
		   multi1: 1,
		   multi2: 1,
		  },
		   ddust: {
		   total: 0,
		   amount: 1,
		   multi: 1,
		  },
		   bit: {
		   total: 0,
		   cost: 1000,
		   amount: 1,
		  },
		   lightbit: {
		   total: 0,
		   amount: 1,
		   multi: 1,
		  },
		   fragment: {
		   total: 0,
		   cost: 10000,
		   amount: 1,
		  },
	   },
	   generator: {
		   wands: {
		   amount: 0,
		   price: 20,
		   dpsgain: 1,
		   pricescaling: 1.3,
		  },
		   wizards: {
		   amount: 0,
		   price: 200,
		   dpsgain: 5,
		   pricescaling: 1.5,
		  },
		   enchanter: {
		   amount: 0,
		   price1: 200,
		   price2: 1,
		   dpsgain: 10,
		   price1scaling: 1.5,
		  },
 		  cauldron: {
		   amount: 0,
		   price1: 500,
		   price2: 5,
		   dpsgain: 20,
		   price1scaling: 2.5,
		   price2scaling: 3,
		  },
	   },
	   balanceGen: {
	    enh: {
		   amount: 0,
		   price: 20,
		   pricescaling: 2,
		  },
		   shaGen: {
		   amount: 0,
		   price: 10,
		   pricescaling: 1.5,
		  },
		   duplicate: {
		   amount: 0,
		   price: 1,
		   pricescaling: 2.1,
		  },
	   },
		  upgrades: {	
		   darkgen: 0,
		   decaydown: 0,
		   lightunlocked: 0,
		   autobit: 0,
		   autounlocked: 0,
		  },
	}
}

function save() {
  localStorage.setItem("managen1", btoa(JSON.stringify(player)));
}

function load() {
  let get = localStorage.getItem("managen1");

  if (get === null || get === undefined) {
    player = getStartPlayer();
  } else {
    player = Object.assign(getStartPlayer(),JSON.parse(atob(get)))
  }
  tab(player.tab)
  generatorTab(player.generatorTab)
  balanceTab(player.balanceTab)
  upgradeTab(player.upgradeTab)
}

function exportSave() {
  let str = btoa(JSON.stringify(player));
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(el);
  notifier.success("Your data has been exported.");
}

function importSave(imported = undefined) {
  if (imported === undefined) imported = prompt("Import your save here");
  player = JSON.parse(atob(imported));
  save();
  window.location.reload();
}

setInterval(function () {
  save();
}, 10000);

window.onload = function () {
  load();
	setInterval(gameLoop, 50)
	setInterval(automation, 1000)
};

function hardReset() {
  if (confirm("Are you sure you want to hard reset?")){
    player = getStartPlayer()
    save();
    load();
    window.location.reload();
  }
}
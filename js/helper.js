/* Mathematical */
function factorial(x) {
  if (x < 3) return Math.max(1, x)
  else {
    return x * factorial(x - 1)
  }
}
// MATH.FACT!!! doesn't exist lmao
/* HTML */
const DOMCache = new Map()
const DOM = (id) => {
    const cachedEl = DOMCache.get(id)
    if (cachedEl) return cachedEl
    const el = document.getElementById(id)
    if(el===null) throw `Element ${id} is null.`
    DOMCache.set(id, el)
    return el
}

function editHTML(id, text) {
  document.getElementById(id).innerHTML = text
}
function editText(id, text) {
  document.getElementById(id).innerText = text
}
function showHTML(id, showCondition) {
  document.getElementById(id).style.display = (showCondition ? "" : "none")
}

//other
function numToRoman(num) {
    let digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman_num = "",
        i = 3
    while (i--)
        roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num
    return Array(+digits.join("") + 1).join("M") + roman_num
}

/* Getters */
/*
function canAfford(x) {
  return player.gwa >= UPGRADES[x].cost() && UPGRADES[x].cost()<Infinity
}
function canAffordBuyable(x) {
  return player.gwa >= BUYABLES[x].cost() && BUYABLES[x].cost()<Infinity
}
function buyUpgrade(x) {
  if (player.gwa < UPGRADES[x].cost() || hasUpgrade(x)) return
  player.gwa -= UPGRADES[x].cost()
  player.upgrades.push(x)
}
function hasUpgrade(x) {
  return player.upgrades.includes(Number(x))
}
function buyBuyable(x) {
  if (canAffordBuyable(x)) {
    player.gwa -= BUYABLES[x].cost()
    player.buyables[x]++
  }
}
function hasMilestone(x) {
  return player.milestones.includes(Number(x))
}*/
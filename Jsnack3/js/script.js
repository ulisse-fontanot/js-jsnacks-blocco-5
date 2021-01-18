var zucchine =[
  {
    varieta : "pina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "gina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "tina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "fina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "cina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "nina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "sina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "rina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "vina",
    peso : 1,
    lunghezza : "15cm"
  },
  {
    varieta : "mina",
    peso : 1,
    lunghezza : "15cm"
  }
];

for (var i = 0; i < zucchine.length; i++) {
  zucchine[i].peso = numeri(30,50);
}

for (var i = 0; i < zucchine.length; i++) {
  zucchine[i].lunghezza = numeri(5,30);
}

var sotto15 = [];
var sopra15 = [];
for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza<15) {
    sotto15.push(zucchine[i].lunghezza);
  } else {
    sopra15.push(zucchine[i].lunghezza);
  }
}

console.log(sotto15);
console.log(sopra15);

//FUNZIONI
function numeri(min,max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

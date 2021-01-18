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


var pesotot = 0;
for (var i = 0; i < zucchine.length; i++) {
  pesotot += zucchine[i].peso;
  console.log(zucchine[i].peso);
}

console.log("la somma del peso delle zucchine è: " + pesotot);

//FUNZIONI
function numeri(min,max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

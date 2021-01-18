var palla = {
  nome : "pallina",
  peso : 10
}

for (var k in palla) {
  console.log(palla[k]);
}

var pesoUtente = parseInt(prompt("quanto pesa la palla?"));
palla.peso = pesoUtente;

console.log("la palla adesso pesa: " + palla.peso);
for (var k in palla) {
  console.log(palla[k]);
}

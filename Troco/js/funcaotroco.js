var ValorTotal = '';
var ValorPago = '';
var button = document.querySelector("#listar-troco");
button.onclick = function() {
    ValorTotal = document.querySelector("#valorTotal");
    ValorPago = document.querySelector("#valorPago");

    var troco = (ValorPago.value - ValorTotal.value);

    if(troco < 0){
        alert("O valor da soma não pode ser negativo! Favor, digitar outro valor válido.")
        return;
    }

    valorTroco = document.querySelector("#valorTroco").value = troco.toFixed(2);

    var notas = [100,50,10,5,1,0.50,0.10,0.05,0.01];

function calcularTroco() {
   arr = new Array();	
 	
   for (x in notas) {
       if (notas[x] > troco) continue;
       
       var quantidadeCedula = parseInt(troco / notas[x]);
       arr.push([quantidadeCedula, notas[x]]);
       
       troco = troco - (quantidadeCedula * notas[x]);
   }
   
   var arr = arr;
    table = document.getElementsByTagName('table')[0],
    tr = null,
    td = null,
    txt = '';

for (var i = 0; i < arr.length; i++) {
  quantidade = document.createTextNode(arr[i][0]);
  troco = document.createTextNode(arr[i][1]);
  tr = document.createElement('tr'); //Cria a TR
  quantidadeTd = document.createElement('td');
  trocoTd = document.createElement('td');

  quantidadeTd.appendChild(quantidade);
  trocoTd.appendChild(troco);
  tr.appendChild(quantidadeTd);
  tr.appendChild(trocoTd);
  table.appendChild(tr);
  table.appendChild(tr);

  
} 
   return arr;
   
}
console.log(troco.toFixed(2));
console.log(calcularTroco().toFixed(2));
}













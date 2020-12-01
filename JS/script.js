const btnAdicionar$ = document.getElementById('btn_adicionar');
const btnDiminuir$ = document.getElementById('btn_diminuir');
const btnZerar$ = document.getElementById('btn_zerar');

const contagem$ = document.getElementById("VALOR");

let contador = 0;

contagem$.innerHTML = contador;

btnAdicionar$.addEventListener('click', function() {
	contagem$.innerHTML = contador++;
});

btnDiminuir$.addEventListener('click', function() {
	contagem$.innerHTML = contador--;
});

btnZerar$.addEventListener('click', function() {
	contador = 0;

	contagem$.innerHTML = contador;
});

console.log(btnAdicionar$);
console.log(btnDiminuir$);
console.log(btnZerar$);
console.log(contagem$);
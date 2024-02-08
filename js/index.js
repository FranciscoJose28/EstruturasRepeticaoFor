for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`;
}

let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

for(let i = 0; i < meses.length; i++){
    mes.innerHTML += `<option>${meses[i]}</option>`;
}

let data = new Date();

for(let i = data.getFullYear(); i >= data.getFullYear() - 100; i--){
    ano.innerHTML += `<option>${i}</option>`;
}
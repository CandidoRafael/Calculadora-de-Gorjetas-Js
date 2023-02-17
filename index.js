function formatMoney(valor) {
    valor = Math.ceil(valor * 100) / 100
    valor = valor.toFixed(2)
    return 'R$' + valor
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('personInput').value

    let tipValue = bill * (tipPercent / 100) 
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('ValueTips').innerHTML =  formatMoney(tipValue);
    document.getElementById('resultTotal').innerHTML = formatMoney(billTotal);
    document.getElementById('person').innerHTML = split;
    document.getElementById('forEach').innerHTML = formatMoney(billEach);

    if(split > 1){
        document.getElementById('person').innerHTML = split + ' People'
    } else
     document.getElementById('person').innerHTML = split + ' Person'
}
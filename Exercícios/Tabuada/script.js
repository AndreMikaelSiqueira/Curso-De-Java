function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Porfavor Digita Um Número!')
    } else {
        let n = Number(num.value) 
        tab.innerHTML = ''
        for (c=1;c<=10;c++) {
             let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
           
    }
}
    
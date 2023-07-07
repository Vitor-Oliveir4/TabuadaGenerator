function gerar(){
    let nx1 = document.getElementById('nx1')
    let res = document.getElementById('res')
    if(nx1.value.length == 0) {
        alert('Algo de errado não está certo! Verifique os dados e tente novamente')
    }else {
        let n = Number(nx1.value)
        res.innerHTML = ''
        for (let c = 0;c <= 50;c++) {
            let item = document.createElement('li')
            item.innerHTML = `${n} × ${c} = ${n*c}`
            res.appendChild(item)
        }
    }
}

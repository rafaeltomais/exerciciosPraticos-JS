function calcular(){
    var txtvalor = window.document.querySelector("input#valor")
    var tab = window.document.querySelector("select#seltab")
    if(txtvalor.value.length == 0){
        window.alert("Por favor, insira um número!")
    }else{
        var valor = Number(txtvalor.value)
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${valor} x ${i} = ${valor*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}
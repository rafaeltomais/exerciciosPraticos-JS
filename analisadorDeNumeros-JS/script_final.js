var array = []
var select = window.document.getElementById("database")
var res_final = window.document.getElementById("resultado_final")
var input = window.document.getElementById("numero")
var linhas_lista = window.document.createElement("option")

function adicionar(){
    if(isNumberVal(input.value) && !inList(input.value, array)){
        if(inputVazio(array)){           //Verifica se array está vazio ou não
            array[0] = input.value
        }else if(array.length != 0){    
            array.push(input.value)
        }
        linhas_lista = window.document.createElement("option")
        select = window.document.getElementById('database')
        linhas_lista.text += `Valor ${input.value} adicionado.`
        select.appendChild(linhas_lista)
        res_final.innerHTML = ''
    }else{
        window.alert(`[ERRO] Digite um número válido ou que não existe na lista!`)
    }
    input.value = ''
    input.focus()
    return array
}

function finalizar(){
    if(inputVazio(array)){
        window.alert("[ERRO] Você ainda não informou nenhum número.")
    }else{
        var tamanho = array.length
        var soma = 0
        var maior = array[0]
        var menor = array[0]
        for (var c in array){
            soma += array[c]
            if(array[c] > maior)
                maior = array[c]
            if (array[c] < menor)
                menor = array[c]
        }
        var media = soma/tamanho
        res_final.innerHTML += `</br>Ao todo, temos ${tamanho} números cadastrados.</br>`
        res_final.innerHTML += `</br>O maior valor informado foi ${maior}.</br>`
        res_final.innerHTML += `</br>O menor valor informado foi ${menor}</br>`
        res_final.innerHTML += `</br>Somando todos os valores, temos: ${soma}</br>`
        res_final.innerHTML += `</br>A média dos valores digitados é ${media}</br>`
    }
}

function isNumberVal(n){
    if(Number(n) < 1 || Number(n) > 100){
        return false
    }else{
        return true
    }
}

function inList(n, l){
    if(l.indexOf(n) != -1 )
        return true
    else
        return false
}

function inputVazio(n){
    if(n.length == 0){
        return true
    }else{
        return false
    }
}
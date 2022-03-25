var array = []
var select = window.document.getElementById("database")
var res_final = window.document.getElementById("resultado_final")

function adicionar(){
    var input = window.document.getElementById("numero")
    var num = Number(input.value)
    var linhas_lista = window.document.createElement("option")

    if(num <= 0 || num > 100) //Verifica se o número está entre 1 e 100
        window.alert(`Digite um número válido!`)
    else{
        if(array.indexOf(num) != -1)     //Verifica se 'num' já está em 'array'
            window.alert("Número repetido! Tente novamente.")
        else{             
            array.push(num)             //se não, adiciona 'num' ao final de array
            linhas_lista = window.document.createElement("option")
            select = window.document.getElementById('database')
            linhas_lista.text += `Valor ${num} adicionado.`
            select.appendChild(linhas_lista)
            res_final.innerHTML = '' //Sempre que adicionado um número novo é limpado o resultado final
        }                            //pois a antiga array não corresponde ao resultado mais.
    }
    input.value = ''
    input.focus()
    return array
}

function finalizar(){
    if(array.length == 0){          //Se array estiver sem nenhum elemento, não tem como mostrar resultado
        window.alert("[ERRO] Você ainda não informou nenhum número.")
    }else{
        var tamanho = array.length
        array.sort(function (a,b){  //Organiza a array em ordem crescente
        if(a>b) return 1            //para pegar o menor e maior valor
        if(a<b) return -1
        return 0
        })
        var soma = 0
        for(var i in array){
            soma += array[i]
        }
        var media = soma/tamanho
        res_final.innerHTML += `</br>Ao todo, temos ${tamanho} números cadastrados.</br>`
        res_final.innerHTML += `</br>O maior valor informado foi ${array[tamanho - 1]}</br>`
        res_final.innerHTML += `</br>O menor valor informado foi ${array[0]}</br>`
        res_final.innerHTML += `</br>Somando todos os valores, temos: ${soma}</br>`
        res_final.innerHTML += `</br>A média dos valores digitados é ${media}</br>`
    }
    return cont_finalizar++
}
var array = []
var select = window.document.getElementById("database")
var cont_finalizar = 0 //Contador inicializado com 0, conta se já foi apertado botao 'finalizar'
var res_final = window.document.getElementById("resultado_final")

function adicionar(){
    var input = window.document.getElementById("numero")
    var num = Number(input.value)
    var linhas_lista = window.document.createElement("option")
    var repetido = 0

    if(cont_finalizar != 0){
        res_final.innerHTML = ''
    }  
    
    if(num <= 0 || num > 100){ //Verificar se o número está entre 1 e 100
        window.alert(`Digite um número válido!`)
    }else{
        repetido = 0                            //Rodar um for na array e se 'num'
        for(var c = 0; c < array.length; c++){  //já estiver presente na array, é somado 
            if(num == array[c]){                //'1' no índice que foi iniciado com 0
                repetido++
            }
        }
        if(repetido != 0){                    //Verifica se o índice detectou alguma repetição
            window.alert("Número repetido! Tente novamente.")
        }else if(repetido == 0){             
            if(array.length == 0){           //Verifica se array está vazio ou não
                array[0] = num
            }else if(array.length != 0){    
                array.push(num)
            }
            linhas_lista = window.document.createElement("option")
            select = window.document.getElementById('database')
            linhas_lista.text += `Valor ${num} adicionado.`
            select.appendChild(linhas_lista)
        }
    }
    input.value = ''
    return array
}

function finalizar(){
    if(array.length == 0){          //Se array estiver sem nenhum elemento, não tem como mostrar resultado
        window.alert("[ERRO] Você ainda não informou nenhum número.")
    }else{
        var tamanho = array.length
        array.sort(function (a,b){ 
        if(a>b) return 1
        if(a<b) return -1
        return 0
        })
        var soma = 0
        for(var i in array){        //Organiza a array em ordem crescente
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
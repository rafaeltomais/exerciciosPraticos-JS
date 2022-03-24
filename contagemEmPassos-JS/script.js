window.alert("Insira valores para a contagem. Passo deve ser maior e diferente de 0. Todos os campos devem ser preenchidos.")

function contar(){
    var txtinicio = window.document.getElementById("inicio")
    var inicio = Number(txtinicio.value)
    var txtfim = window.document.querySelector("input#fim")
    var fim = Number(txtfim.value)
    var txtpasso = window.document.getElementById("passo")
    var passo = Number(txtpasso.value)
    var contagem = window.document.querySelector("div#output")
        
    if(txtinicio.value.lenght == 0 || txtfim.value == "" || txtpasso.value == ""){
        //Verificar se algum dos campos está em branco = Impossível contar
        window.alert("Impossível contar!")
        contagem.innerHTML = "Verique se há algum espaço em branco."
    }else if(fim <= inicio){
        //Verificar se fim é menor que inicio
        contagem.innerHTML = 'Contando em ordem descrescente: </br>'
        var c = inicio
        for (var c = inicio; c >= fim; c -= passo){
            if(c >= fim){
                contagem.innerHTML += `${c}`
                if((c - passo) >= fim){
                    contagem.innerHTML += " \u{1F449} "
                }else{
                    contagem.innerHTML += " \u{1F3C1} "
                }
            }
        }
    }else if(passo < 1){
        //Verificar se passo é 0 ou negativo = alerta Passo inválido, digite um número maior que 0
        window.alert("Impossível contar!") 
        contagem.innerHTML = "Informe PASSO maior que 0!"
    }else{
        //Se tudo estiver ok, faz a contagem
        contagem.innerHTML = 'Contando em ordem crescente: </br>'
        var c = inicio
        for (var c = inicio; c <= fim; c = c + passo){
            if(c <= fim){
                contagem.innerHTML += `${c}`
                if((c + passo) <= fim){
                    contagem.innerHTML += "👉"
                }else{
                    contagem.innerHTML += "🏴"
                }
            }
    }
}
}
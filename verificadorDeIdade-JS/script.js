function verificar(){
    var txtano = window.document.querySelector('input#txtano')
    var anonumber = Number(txtano.value)
    var data = new Date()
    var ano = data.getFullYear()
    if(anonumber>ano || anonumber<1901){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var idade = ano - anonumber
        var genero = window.document.getElementsByName('radiosex')
        var output = window.document.querySelector('div#output')
        var foto = window.document.createElement('img')
        if(genero[0].checked){
            if(idade<18){
                genero = "menino"
                foto.src = "menino.png"
                //foto.setAttribute("src","menino.png") //outro jeito de inserir imagem
            }else if(idade<65){
                genero = "homem"
                foto.src = "homem.png"
            }else{
                genero = "idoso"
                foto.src = "idoso.png"
            }
        }else if (genero[1].checked){
            if(idade<18){
                genero = "menina"
                foto.src = "menina.png"
            }else if(idade<65){
                genero = "mulher"
                foto.src = "mulher.png"
            }else{
                genero = "idosa"
                foto.src = "idosa.png"
            }
        }  
        output.style.textAlign = 'center'
        output.innerHTML = `</br>Detectamos ${genero} de ${idade} anos de idade.`
        output.appendChild(foto)
    }
}
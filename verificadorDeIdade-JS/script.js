function verificar() {    
    var txtano = window.document.getElementById("txtano") // Pegar input do ano em string
    var ano = Number(txtano.value) // Transformar de string para number
    var data = new Date() // Variável que recebe a data atual completa
    var res = window.document.querySelector('div#res') // colocar div de ID 'res' em uma variável
    if(txtano.value.length == 0 || txtano.value > data.getFullYear() || txtano.value < 1901 ){ 
        window.alert("[ERRO!]Verifique os dados e tente novamente!") // Cria alerta para anos fora do padrão
    }else{
        var fsexo = document.getElementsByName("radsexo") // Onde foi marcado no radio
        var idade = data.getFullYear() - ano // pega o ano da data atual e subtrai da data digitada
        var genero = '' 
        var foto = document.createElement('img') // Cria elemento para armazenar imagem
        //img.setAttribute('id', 'foto') // atribui em img uma ID de nome 'foto'
        if (fsexo[0].checked) { // Testa se foi marcado em masculino [0] ou feminino [0] na radio
            genero = "Masculino"
            if (idade < 18){
                //MENINO
                foto.setAttribute('src', 'menino.png') // atribuiu em img uma 'src' com a imagem nomeada
            }else if (idade < 60){
                //HOMEM
                foto.setAttribute('src','homem.png')
            }else{
                //IDOSO
                foto.setAttribute('src','idoso.png')
            }
        }else if(fsexo[1].checked){
            genero = "Feminino"
            if (idade < 18){
                //MENINA
                foto.setAttribute('src','menina.png')
            }else if (idade < 60){
                //MULHER
                foto.setAttribute('src','mulher.png')
            }else{
                //IDOSA
                foto.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = "center" // alinha no centro a div 'res'
        res.innerHTML = `</br>Detectamos o sexo ${genero} de ${idade} anos de idade.`
        res.appendChild(foto) // "imprime" img ao final da div res
    }
}
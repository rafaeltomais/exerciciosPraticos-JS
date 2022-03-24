function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //hora = 19 // Teste forçado de horas
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        // BOM DIA
        msg.innerHTML += "<strong>Bom dia</strong>"
        document.body.style.background = '#FEDFA8'
        img.src = 'manhã.png'
    } else if (hora < 19){
        // BOA TARDE
        msg.innerHTML += " <strong>Boa tarde</strong>"
        img.src = 'tarde.png'
        document.body.style.background = '#EAD8CC'
    } else{
        // BOA NOITE
        msg.innerHTML += " <strong>Boa noite</strong>"
        img.src = 'noite.png'
        document.body.style.background = '#3F3C45'
    }
}
    

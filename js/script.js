$(document).ready(function() {
    $("#carrosel img:eq(0)").addClass("banner ativo").show()

    setInterval(slide, 3000)

    function slide () {
        if( $(".banner-ativo").next().length ) {
            $(".banner-ativo").removeClass("banner-ativo").fadeOut().next().addClass("banner-ativo").fadeIn()
            } else {
                $(".banner-ativo").removeClass().fadeOut()
                $("#carrosel img:eq(0)").addClass("banner-ativo").fadeIn()
            }
              
    }

})







let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value
    console.log(emailDigitado)
}

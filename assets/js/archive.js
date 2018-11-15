$(document).ready(function(){
    menuTransparente();
    efectoCapas();
    console.log("HOLA")
});

function menuTransparente(){
    menu = ".menu";
    var altura = $(menu).offset().top;
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50){
            $(menu).addClass("menuTransparente");
        }
        else{
            $(menu).removeClass("menuTransparente");
        }
    });
    console.log("HOLA2")
}

function efectoCapas(){
    $(".titulaciones").hover(function(){
        console.log("elemento1")
        $(".titulacion-elementos").toggle(500);
    });

    $(".experiencia").hover(function(){
        console.log("elemento2")
        $(".experiencia-elementos").toggle(500);
    });

    $(".conocimientos").hover(function(){
        console.log("elemento3")
        $(".conocimientos-elementos").toggle(500);
    });

    $(".mas-info").hover(function(){
        console.log("elemento4")
        $(".mas-info-elementos").toggle(500);
    });

}
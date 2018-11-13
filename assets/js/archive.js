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
    
}
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

window.onscroll = function (e){
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    
    if(scroll > 50){
        var element = document.getElementById("active-border");
        element.classList.add("aqchange");
    } else {
        var element = document.getElementById("active-border");
        element.classList.remove("aqchange");
    }
}

// ------- Carousel three cards -------

// ------- Carousel three cards -------








// function carousel --------------------------------------
    // var current = 0;
    // var imagenes = new Array();

    // $(document).ready(function () {
    //   var numImages = 6;
    //   if (numImages <= 3) {
    //     $('.right-arrow').css('display', 'none');
    //     $('.left-arrow').css('display', 'none');
    //   }

    //   $('.left-arrow').on('click', function () {
    //     if (current > 0) {
    //       current = current - 1;
    //     } else {
    //       current = numImages - 3;
    //     }

    //     $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

    //     return false;
    //   });

    //   $('.left-arrow').on('hover', function () {
    //     $(this).css('opacity', '0.5');
    //   }, function () {
    //     $(this).css('opacity', '1');
    //   });

    //   $('.right-arrow').on('hover', function () {
    //     $(this).css('opacity', '0.5');
    //   }, function () {
    //     $(this).css('opacity', '1');
    //   });

    //   $('.right-arrow').on('click', function () {
    //     if (numImages > current + 3) {
    //       current = current + 1;
    //     } else {
    //       current = 0;
    //     }

    //     $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

    //     return false;
    //   });
    // });
// function carousel --------------------------------------
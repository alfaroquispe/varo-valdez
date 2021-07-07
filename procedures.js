$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

window.onscroll = function (e) {
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;


    if (scroll > 50) {
        var element = document.getElementById("active-border");
        element.classList.add("aqchange");
        $("#logo").attr("src", "images/logo_varo-va_neg.webp");
        $("#logo").attr("width", "120");
        // var element = document.getElementById("navbarSupportedContent");
        // element.classList.remove("align-self-start");
    } else {
        var element = document.getElementById("active-border");
        element.classList.remove("aqchange");
        $("#logo").attr("src", "images/logo_varo-va_pos.webp");
        $("#logo").attr("width", "145");
        // var element = document.getElementById("navbarSupportedContent");
        // element.classList.add("align-self-start");
    }
}

function aqtoggle () {
    var element = document.getElementById("aqnavbar");
        element.classList.toggle("aqnavbar-toggle");
}

// ------- Carousel three cards -------

// ------- Carousel three cards -------


// BLOG
// ¿SABES QUÉ ES LA PSICOLOGÍA DEL REGALO Y CÓMO APLICARLA?
// Los regalos son inherentes a las sociedades humanas. Dar regalos es una experiencia social, cultural y económica; un intercambio de comunicación material y social que es un importante instrumento para mantener las relaciones sociales y la expresión de sentimientos. Por esto, las empresas lo han utilizado como una estrategia efectiva para acercarse a todos sus públicos interesados
// La psicología del regalo dice que deberías aplicar con todos los regalos corporativos que des a tus clientes, proveedores, empleados, inversionistas o socios dice que el presente perfecto debe cumplir tres pautas principales:
// • Adecuación: que sea apropiado para el destinatario y la ocasión.
// • Empatía: sorprenda al destinatario y logre complacerlo mostrándole que lo conoces.
// • Esfuerzo: que ilustre el tiempo y el esfuerzo necesario que te llevo encontrarlo. El sacrificio debe ser evidenciado en los ámbitos financieros, de tiempo y creatividad
// Es bueno obsequiar momentos: La ciencia ha demostrado que las personas tienden a ser más felices cuando reciben regalos que involucran momentos especiales al abrir el regalo.
// Te parecerá mucho más fácil regalar un momento cuando el destinatario es más cercano, mientras que es más probable que elijas un regalo material cuando no te sientas próximo a la persona que lo recibe.
// CÓMO SATISFACER LOS 5 SENTIDOS DE TUS CLIENTES Y FIDELIZARLOS
// Cuando comemos un alimento sabroso, escuchamos una música placentera, observamos un ambiente bonito, olemos un aroma evocador y/o tocamos una textura agradable, se segregan endorfinas en nuestro cuerpo (hormonas de la felicidad) y también se activa la zona del cerebro encargada de la memoria, de esta forma, cuando comemos, olemos, escuchamos, tocamos y vemos, nuestro cerebro registra recuerdos de la experiencia, pero más importante aún, registra las emociones que sentimos al vivirla.
// Es por esto que las decisiones de compra en restauración, la mayoría de las veces, son emocionales. Un cliente puede elegir un producto a través de internet de forma racional, buscando precios que se ajusten a su presupuesto, sin embargo, si al visitar la empresa, tendría un alto impacto multisensorial, preferirá esta experiencia aunque tenga que invertir más en ella.
// Continúa leyendo y aplica los siguientes consejos para fidelizar a tus clientes a través de sus 5 sentidos:
// Vista.- Comencemos con el más desarrollado de los sentidos: la visión. Probablemente el que registra las primeras impresiones de tu empresa. Es por ello que todo lo que está a la vista del cliente debe cuidarse. La fachada, el mobiliario,el uniforme del equipo, la presentación y por supuesto la ambientación en general, tienen que formar un conjunto armónico para que el cliente potencial se sienta en la gloria en todo momento.
// Olfato.- El olfato es uno de los sentidos más importantes en todas las experiencias, pues está directamente relacionado con la memoria emotiva. Así, a café, a lavanda a jazmín y a un buen aroma en general, son estímulos muy potentes que se asocian a la satisfacción y que afectan en las decisiones de compra.
// Gusto.- La comida es uno de los grandes conectores con nuestra infancia. La sensación de alegría y satisfacción, está directamente relacionada con los recuerdos de las comidas familiares, incluso ciertos alimentos con personas claves que han marcado nuestro crecimiento. Así de importantes son los sabores que entran por nuestra boca, por eso es recomendable invitar alguna muestra o un caramelos para hacer de la visita del cliente una experiencia superior.
// Oído.- La ambientación musical debe tener presencia, debe escucharse, pero también debe permitir que los clientes conversen. El ritmo también cuenta. Mientras más acelerada es la música, más rápido se van los clientes. Mientras más relajante o placentera, más tiempo permanecen en sus instalaciones. 
// Tacto.- Comenzando por la temperatura de sus instalaciones. Sea la estación que sea, es muy importante que el ambiente esté templado para que los clientes además de sentir bienestar por lo que ven, huelen, escuchan y comen, sientan confort a nivel corporal. 
// CARAMELO VS CHOCOLATE
// Decidir entre un Chocolate o un Caramelo no es una tarea fácil, es por eso que a continuación te proponemos algunas interrogantes con datos curiosos de ambos productos para que pueda elegir la opción que más se adecua a tus clientes.
// ¿Cuál tiene más variedades?
// Chocolate.- Chocolate crudo, chocolate negro (dulce), chocolate semidulce, chocolate agridulce, cobertura de chocolate, chocolate con leche, chocolate blanco.
// Caramelo.- Caramelo blando, duro, de frutas, ácido, con chicle en el centro, chupete, gomita.
// ¿Cuál es más difícil de fabricar?
// Chocolate - Las semillas de cacao tienen que pasar por un largo proceso hasta obtener pasta con la que se hace el chocolate. En cada onza de chocolate negro hay 12 semillas de cacao.
//  Caramelo.- Los caramelos están hechos de azúcar cocinada a 300°F.
// ¿Cuál es más saludable?
// Chocolate.- El chocolate hace que tu cuerpo produzca una sustancia que te hace sentir relajado. Tiene antioxidantes que te ayudan a vivir más.
// Caramelo.- El caramelo es la comida favorita de algunas bacterias que se quedan en tu boca. También hace que los niveles de azúcar en la sangre suban.
// ¿Cuál dura más?
// Chocolate.- Un chocolate puede estar guardado un año. Pero si tiene nueces, durará mucho menos.
// Caramelo.- Un caramelo puede estar guardado más de un año, si es en un lugar fresco y seco.
// Ahora que ya tienes algunos datos interesantes de los Chocolates y los Caramelos, es tu turno de decidir cuál de estos productos es el más apropiado para cada tipo de tus clientes.

// SABORES Y COLORES 
// Fidelizar a un cliente es un juego de seducción, pues desde que el cliente ingresa a tu empresa, hasta que sale, va viviendo sensaciones y emociones donde están implicados sus 5 sentidos. Mientras más completa sea esta experiencia, más posibilidades hay de que se enamore de tu empresa y se convierta en un cliente fiel.
// Sabores
// La comida es uno de los grandes conectores con nuestra infancia. La sensación de alegría y satisfacción, está directamente relacionada con los recuerdos de las comidas familiares, incluso ciertos alimentos con personas claves que han marcado nuestro crecimiento. Así de importantes son los sabores que entran por nuestra boca.
// Una buena manera de hacer que un cliente recuerde tu marca, es seducirlo a través de sabores que le impacten de forma emocional. Asegúrate entonces de que tus regalos no sólo sepan bien, sino que además sean memorables, a través de la personalización. 
// También es muy importante tener en cuenta el tipo de servicio que brindas para poder elegir el sabor que más se adapte naturalmente a tus clientes. Bríndales un recuerdo placentero que los haga volver.
// De acuerdo con múltiples estudios se ha comprobado que el color tiene una influencia muy importante en la decisión de compra y el aumento de las ventas. Es por esto que es fundamental hacer una elección adecuada de colores para los productos, la publicidad, sitios web, puntos de venta, entre otros.
// Colores 
// Algunos datos que te pueden sorprender y que se deben tener en cuenta son:
// La apariencia visual y el color de un nuevo producto son mucho más importantes que la textura, el sonido o el olor para los consumidores en un nuevo producto: 93% de los consumidores consideran más importante la apariencia visual y el color, 6% de los consumidores consideran más importante la textura, 1% de los consumidores considera más importante el sonido o el olor.
// El 85% de los compradores consideran que el color es la principal razón para comprar un producto.
// El Color incrementa el reconocimiento de la marca en un 80%.

// BLOG
// ¿SABES QUÉ ES LA PSICOLOGÍA DEL REGALO Y CÓMO APLICARLA?
// Los regalos son inherentes a las sociedades humanas. Dar regalos es una experiencia social, cultural y económica; un intercambio de comunicación material y social que es un importante instrumento para mantener las relaciones sociales y la expresión de sentimientos. Por esto, las empresas lo han utilizado como una estrategia efectiva para acercarse a todos sus públicos interesados
// La psicología del regalo dice que deberías aplicar con todos los regalos corporativos que des a tus clientes, proveedores, empleados, inversionistas o socios dice que el presente perfecto debe cumplir tres pautas principales:
// • Adecuación: que sea apropiado para el destinatario y la ocasión.
// • Empatía: sorprenda al destinatario y logre complacerlo mostrándole que lo conoces.
// • Esfuerzo: que ilustre el tiempo y el esfuerzo necesario que te llevo encontrarlo. El sacrificio debe ser evidenciado en los ámbitos financieros, de tiempo y creatividad
// Es bueno obsequiar momentos: La ciencia ha demostrado que las personas tienden a ser más felices cuando reciben regalos que involucran momentos especiales al abrir el regalo.
// Te parecerá mucho más fácil regalar un momento cuando el destinatario es más cercano, mientras que es más probable que elijas un regalo material cuando no te sientas próximo a la persona que lo recibe.
// CÓMO SATISFACER LOS 5 SENTIDOS DE TUS CLIENTES Y FIDELIZARLOS
// Cuando comemos un alimento sabroso, escuchamos una música placentera, observamos un ambiente bonito, olemos un aroma evocador y/o tocamos una textura agradable, se segregan endorfinas en nuestro cuerpo (hormonas de la felicidad) y también se activa la zona del cerebro encargada de la memoria, de esta forma, cuando comemos, olemos, escuchamos, tocamos y vemos, nuestro cerebro registra recuerdos de la experiencia, pero más importante aún, registra las emociones que sentimos al vivirla.
// Es por esto que las decisiones de compra en restauración, la mayoría de las veces, son emocionales. Un cliente puede elegir un producto a través de internet de forma racional, buscando precios que se ajusten a su presupuesto, sin embargo, si al visitar la empresa, tendría un alto impacto multisensorial, preferirá esta experiencia aunque tenga que invertir más en ella.
// Continúa leyendo y aplica los siguientes consejos para fidelizar a tus clientes a través de sus 5 sentidos:
// Vista.- Comencemos con el más desarrollado de los sentidos: la visión. Probablemente el que registra las primeras impresiones de tu empresa. Es por ello que todo lo que está a la vista del cliente debe cuidarse. La fachada, el mobiliario,el uniforme del equipo, la presentación y por supuesto la ambientación en general, tienen que formar un conjunto armónico para que el cliente potencial se sienta en la gloria en todo momento.
// Olfato.- El olfato es uno de los sentidos más importantes en todas las experiencias, pues está directamente relacionado con la memoria emotiva. Así, a café, a lavanda a jazmín y a un buen aroma en general, son estímulos muy potentes que se asocian a la satisfacción y que afectan en las decisiones de compra.
// Gusto.- La comida es uno de los grandes conectores con nuestra infancia. La sensación de alegría y satisfacción, está directamente relacionada con los recuerdos de las comidas familiares, incluso ciertos alimentos con personas claves que han marcado nuestro crecimiento. Así de importantes son los sabores que entran por nuestra boca, por eso es recomendable invitar alguna muestra o un caramelos para hacer de la visita del cliente una experiencia superior.
// Oído.- La ambientación musical debe tener presencia, debe escucharse, pero también debe permitir que los clientes conversen. El ritmo también cuenta. Mientras más acelerada es la música, más rápido se van los clientes. Mientras más relajante o placentera, más tiempo permanecen en sus instalaciones. 
// Tacto.- Comenzando por la temperatura de sus instalaciones. Sea la estación que sea, es muy importante que el ambiente esté templado para que los clientes además de sentir bienestar por lo que ven, huelen, escuchan y comen, sientan confort a nivel corporal. 
// CARAMELO VS CHOCOLATE
// Decidir entre un Chocolate o un Caramelo no es una tarea fácil, es por eso que a continuación te proponemos algunas interrogantes con datos curiosos de ambos productos para que pueda elegir la opción que más se adecua a tus clientes.
// ¿Cuál tiene más variedades?
// Chocolate.- Chocolate crudo, chocolate negro (dulce), chocolate semidulce, chocolate agridulce, cobertura de chocolate, chocolate con leche, chocolate blanco.
// Caramelo.- Caramelo blando, duro, de frutas, ácido, con chicle en el centro, chupete, gomita.
// ¿Cuál es más difícil de fabricar?
// Chocolate - Las semillas de cacao tienen que pasar por un largo proceso hasta obtener pasta con la que se hace el chocolate. En cada onza de chocolate negro hay 12 semillas de cacao.
//  Caramelo.- Los caramelos están hechos de azúcar cocinada a 300°F.
// ¿Cuál es más saludable?
// Chocolate.- El chocolate hace que tu cuerpo produzca una sustancia que te hace sentir relajado. Tiene antioxidantes que te ayudan a vivir más.
// Caramelo.- El caramelo es la comida favorita de algunas bacterias que se quedan en tu boca. También hace que los niveles de azúcar en la sangre suban.
// ¿Cuál dura más?
// Chocolate.- Un chocolate puede estar guardado un año. Pero si tiene nueces, durará mucho menos.
// Caramelo.- Un caramelo puede estar guardado más de un año, si es en un lugar fresco y seco.
// Ahora que ya tienes algunos datos interesantes de los Chocolates y los Caramelos, es tu turno de decidir cuál de estos productos es el más apropiado para cada tipo de tus clientes.

// SABORES Y COLORES 
// Fidelizar a un cliente es un juego de seducción, pues desde que el cliente ingresa a tu empresa, hasta que sale, va viviendo sensaciones y emociones donde están implicados sus 5 sentidos. Mientras más completa sea esta experiencia, más posibilidades hay de que se enamore de tu empresa y se convierta en un cliente fiel.
// Sabores
// La comida es uno de los grandes conectores con nuestra infancia. La sensación de alegría y satisfacción, está directamente relacionada con los recuerdos de las comidas familiares, incluso ciertos alimentos con personas claves que han marcado nuestro crecimiento. Así de importantes son los sabores que entran por nuestra boca.
// Una buena manera de hacer que un cliente recuerde tu marca, es seducirlo a través de sabores que le impacten de forma emocional. Asegúrate entonces de que tus regalos no sólo sepan bien, sino que además sean memorables, a través de la personalización. 
// También es muy importante tener en cuenta el tipo de servicio que brindas para poder elegir el sabor que más se adapte naturalmente a tus clientes. Bríndales un recuerdo placentero que los haga volver.
// De acuerdo con múltiples estudios se ha comprobado que el color tiene una influencia muy importante en la decisión de compra y el aumento de las ventas. Es por esto que es fundamental hacer una elección adecuada de colores para los productos, la publicidad, sitios web, puntos de venta, entre otros.
// Colores 
// Algunos datos que te pueden sorprender y que se deben tener en cuenta son:
// La apariencia visual y el color de un nuevo producto son mucho más importantes que la textura, el sonido o el olor para los consumidores en un nuevo producto: 93% de los consumidores consideran más importante la apariencia visual y el color, 6% de los consumidores consideran más importante la textura, 1% de los consumidores considera más importante el sonido o el olor.
// El 85% de los compradores consideran que el color es la principal razón para comprar un producto.
// El Color incrementa el reconocimiento de la marca en un 80%.





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
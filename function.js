// fabio
$(document).on('change','input[type="file"]',function(){
            
    var fileName = this.files[0].name;
    var fileSize = this.files[0].size;

    if(fileSize > 3000000){
        alert('El archivo no debe superar los 3MB');
        this.value = '';
        this.files[0].name = '';
    }
});
function pregunta() {
  return confirm('¿Esta seguro de enviar el mensaje?');
}
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9- ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
const validar = function(campo) {
  let valor = campo.value;
  
  // Verifica si el valor del campo (input) contiene numeros.
  if(/["#$%&|_.,-"]/.test(valor)) {
  
    /* 
     * Remueve los numeros que contiene el valor y lo establece
     * en el valor del campo (input).
     */
    campo.value = '';
  }
};
// fabio------------------------
/*Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario.

Imprime los nombres en la consola.

Ejemplo de archivo HTML: */
function getFormvalue(){
    let names = document.forms["form1"]["fname"].value;
    let lnames = document.forms["form1"]["lname"].value;
    console.log(names + " " + lnames);
}
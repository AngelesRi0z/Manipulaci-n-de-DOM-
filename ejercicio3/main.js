/*Escriba una función y llámela al hacer clic en un botón para mostrar una alerta con:

El número de enlaces en la página.
El primer enlace de la página.
El último enlace de la página.*/
function getNumberLinks(){
    let longitud = document.links.length;
    let primero = document.links[0].href;
    let ultimo = document.links[longitud-1].href;

    alert("Hay " + longitud + " links" + "\n \n" +
    "El primer enlace --> " + primero + "\n \n" +
    "El ultimo enlace --> " + ultimo);
}

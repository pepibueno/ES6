    const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    };
    function makeList(arr) {
    "use strict";
    // change code below this line

    const failureItems = arr.map(item => `<li class="text-warning">${item}
    </li>`);

    // change code above this line
    return failureItems;
    }
    const failuresList = makeList(result.failure);



//Crear cadenas usando literales de plantilla

//Use la sintaxis literal de la plantilla con acentos graves para crear una matriz de li cadenas de elementos de lista ( ). El texto de cada elemento de la lista debe ser uno de los elementos de la matriz de la failure propiedad en el result objeto y tener un class atributo con el valor text-warning. La makeList función debe devolver la matriz de cadenas de elementos de la lista.
//Use un método iterador (cualquier tipo de bucle) para obtener el resultado deseado (que se muestra a continuación).
//[
//'<li class="text-warning">no-var</li>',
//'<li class="text-warning">var-on-top</li>',
//'<li class="text-warning">linebreak</li>'
//]

//Original:
    //const result = {
    //success: ["max-length", "no-amd", "prefer-arrow-functions"],
    //failure: ["no-var", "var-on-top", "linebreak"],
    //skipped: ["no-extra-semi", "no-dup-keys"]
    //};
    //function makeList(arr) {
    // Only change code below this line
    //const failureItems = [];
    // Only change code above this line
    //return failureItems;
    //}
    //const failuresList = makeList(result.failure);
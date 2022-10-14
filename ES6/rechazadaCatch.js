    const makeServerRequest = new Promise((resolve, reject) => {
    // La respuesta del servidor se establece en falso para representar una respuesta fallida de un servidor.

    let responseFromServer = false;
    if(responseFromServer) {
    resolve("We got the data");
    } else {
    reject("Data not received");
    }
    });
    makeServerRequest.then(result => {
    console.log(result);
    });


    makeServerRequest.catch(error => {
    console.log(error);
    });



//Manejar una Promesa Rechazada con catch
//catch es el método utilizado cuando su promesa ha sido rechazada.

//Agregue el catch método a su promesa. Úselo error como parámetro de su función de devolución de llamada e inicie sesión error en la consola.

//Original:
    //const makeServerRequest = new Promise((resolve, reject) => {
    // La respuesta del servidor se establece en falso para representar una respuesta fallida de un servidor.
    //let responseFromServer = false;
    //if(responseFromServer) {
    //resolve("We got the data");
    //} else {
    //reject("Data not received");
    //}
    //});
    //makeServerRequest.then(result => {
    //console.log(result);
    //});
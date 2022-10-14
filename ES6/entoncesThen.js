    const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
    if(responseFromServer) {
    resolve("We got the data");
    } else {
    reject("Data not received");
    }
    });



    makeServerRequest.then(result => {
    console.log(result);
    });



//Manejar una promesa cumplida con entonces

//Agregue el "then" método a su promesa. Úselo result como parámetro de su función de devolución de llamada e inicie sesión result en la consola.

//Original:
    //const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    //(responseFromServer se establece en verdadero para representar una respuesta exitosa de un servidor)
    //let responseFromServer = true;
    //if(responseFromServer) {
    //resolve("We got the data");
    //} else {
    //reject("Data not received");
    //}
    //});
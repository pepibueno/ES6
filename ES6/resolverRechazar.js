    const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
    if(responseFromServer) {
    // Change this line
    resolve("We got the data");
    } else {
    reject("Data not received");
    // Change this line
    }
    });



//Completa una Promesa con resolver y rechazar
//Una promesa tiene tres estados: pending, fulfilled y rejected (pendiente, cumplida y rechazada)
//"resolve" se usa cuando quiere que su promesa tenga éxito y "reject" se usa cuando quiere que falle.

//Original:
    //const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    //let responseFromServer;
    //if(responseFromServer) {
    // Change this line
    //} else {
    // Change this line
    //}
    //});

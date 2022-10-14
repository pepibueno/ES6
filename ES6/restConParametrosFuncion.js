const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
    }


    console.log(sum(1, 2, 3)); // 6

    //Modifique la función sum usando el parámetro rest de tal manera que la función sum pueda tomar cualquier cantidad de argumentos y devolver su suma.

    //Original:
    //const sum = (x, y, z) => {
    //const args = [x, y, z];
    //return args.reduce((a, b) => a + b, 0);}
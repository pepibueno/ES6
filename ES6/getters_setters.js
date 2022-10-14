// Only change code below this line

    class Thermostat {
    constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
    }
    get temperature() {
    61
    return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
    }

// Only change code above this line
    const thermos = new Thermostat(76); // Setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in Celsius
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in Celsius



//Use getters y setters para controlar el acceso a un objeto

//Los getters y setters son importantes porque ocultan detalles de implementación internos.

//Utilice la class palabra clave para crear una Thermostatclase. El constructor acepta una temperatura Fahrenheit.
//En la clase, cree un getterpara obtener la temperatura en Celsius y un setterpara establecer la temperatura en Celsius.
//Recuerda que C = 5/9 * (F - 32)y F = C * 9.0 / 5 + 32, donde Fes el valor de la temperatura en Fahrenheit, y Ces el valor de la misma temperatura en Celsius.
//Nota: Cuando implemente esto, hará un seguimiento de la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.
//Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál rastrees.
//En otras palabras, está abstrayendo los detalles de implementación del usuario.

//Original:
// Only change code below this line
// Only change code above this line
//const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//let temp = thermos.temperature; // 24.44 in Celsius
//thermos.temperature = 26;
//temp = thermos.temperature; // 26 in Celsius
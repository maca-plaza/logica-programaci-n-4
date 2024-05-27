function generateFibonacci() {
    // Obtener el valor del input del usuario
    const numberInput = document.getElementById('numberInput').value;
    // Convertir el valor del input a un número entero
    const number = parseInt(numberInput);

    // Verificar si el valor ingresado no es un número o si es menor o igual a 0
    if (isNaN(number) || number <= 0) {
        // Mostrar una alerta al usuario si el valor no es válido
        alert('Por favor, ingrese un número válido.');
        return;
    }

    // Crear un array vacío para almacenar la serie de Fibonacci
    let fiboSeries = [];
    // Generar la serie de Fibonacci hasta el número ingresado
    for (let i = 0; i < number; i++) {
        if (i === 0) {
            // El primer número de la serie es 0
            fiboSeries.push(0);
        } else if (i === 1) {
            // El segundo número de la serie es 1
            fiboSeries.push(1);
        } else {
            // Los siguientes números son la suma de los dos anteriores
            fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
        }
    }

    // Obtener el div donde se mostrarán los resultados
    const resultDiv = document.getElementById('result');
    // Mostrar la serie de Fibonacci en el div
    resultDiv.innerHTML = `Serie de Fibonacci: ${fiboSeries.join(', ')}`;
}

function generateFibonacci() {
    let num = prompt("Ingrese un número para generar la serie de Fibonacci:");

    // validar la entrada
    while (isNaN(num) || num <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
        num = prompt("Ingrese un número para generar la serie de Fibonacci:");
    }
    // entrada como un número entero
    num = parseInt(num);

    // generar la serie de Fibonacci
    let fibonacciSeries = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            fibonacciSeries.push(0);
        } else if (i === 1) {
            fibonacciSeries.push(1);
        } else {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }
    }

    // imprimir la serie en el DOM
    document.getElementById('result').textContent = fibonacciSeries.join(', ');
}

// alternativa: Solicitar el número a través de un input en lugar de prompt
document.querySelector('button').addEventListener('click', () => {
    const numInput = document.getElementById('numberInput').value;

    // validar la entrada
    if (isNaN(numInput) || numInput <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
        return;
    }

    const num = parseInt(numInput);

    // generar la serie de Fibonacci
    let fibonacciSeries = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            fibonacciSeries.push(0);
        } else if (i === 1) {
            fibonacciSeries.push(1);
        } else {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }
    }

    // Imprimir la serie en el DOM
    document.getElementById('result').textContent = fibonacciSeries.join(', ');
});
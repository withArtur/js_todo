class Calculator {
    // Metodo statico per l'addizione
    add(a, b) {
        return a + b;
    }

    // Metodo  per la sottrazione
    subtract(a, b) {
        return a - b;
    }

    // Metodo  per la moltiplicazione
    multiply(a, b) {
        return a * b;
    }

    // Metodo  per la divisione
    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const calc = new Calculator();

let result, operation = 'sub';

switch (operation) {
    case 'add':
        result = 'Add: ' + calc.add(5, 3) // 8
        break;
    case 'sub':
        result = 'Sub: ' + calc.subtract(10, 4) // 6
        break;
    case 'mul':
        result = 'Mul: ' + calc.multiply(6, 7) //  42
        break;
    case 'div':
        result = 'Div: ' + calc.divide(20, 4) // 5
        break;
}

console.log(result);
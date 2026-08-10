// ===== Arrow functions: validation =====
const isValidNumber = (input) => {
    if (input === null || typeof input !== "string" || input.trim() === "") {
        return false;
    }

    return Number.isFinite(Number(input));
};

const parseValidNumber = (input) => {
    return isValidNumber(input) ? Number(input) : null;
};

const validateNumberInput = (input) => {
    const value = parseValidNumber(input);

    return {
        valid: value !== null,
        value: value
    };
};

// ===== Function expressions: operations =====
const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return b === 0 ? null : a / b;
};

const getOperationFunction = function (op) {
    if (op === "+") {
        return add;
    }

    if (op === "-") {
        return subtract;
    }

    if (op === "*") {
        return multiply;
    }

    if (op === "/") {
        return divide;
    }

    return null;
};

function readOperation(message) {
    let operation = prompt(message);

    while (getOperationFunction(operation) === null) {
        alert("Invalid operation");
        operation = prompt(message);
    }

    return operation;
}

function readValidNumber(message) {
    let result = validateNumberInput(prompt(message));

    while (!result.valid) {
        alert("Invalid number format");
        result = validateNumberInput(prompt(message));
    }

    return result.value;
}

function runTwoNumberCalculator() {
    const operation = readOperation("Enter an operation (+, -, *, /)");
    const operationFunction = getOperationFunction(operation);
    const firstNumber = readValidNumber("Enter the first number");
    const secondNumber = readValidNumber("Enter the second number");
    const result = operationFunction(firstNumber, secondNumber);

    if (result === null) {
        alert("Cannot divide by zero");
        return;
    }

    alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
}

// ===== Part 2 building blocks =====
const readNumbers = function () {
    const numbers = [];

    while (true) {
        const input = prompt("Enter a number (leave blank to finish)");

        if (input === "" || input === null) {
            break;
        }

        const result = validateNumberInput(input);

        if (!result.valid) {
            alert("Invalid number format");
            continue;
        }

        numbers.push(result.value);
        alert(`Current numbers: ${numbers.join(", ")}`);
    }

    return numbers;
};

const performCalculationOnNumbers = function (numbers, operationCallback) {
    if (numbers.length === 0) {
        return null;
    }

    let result = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        result = operationCallback(result, numbers[index]);

        if (result === null) {
            return null;
        }
    }

    return result;
};

function runMultipleNumberCalculator() {
    const operation = readOperation("Enter an operation for the number list (+, -, *, /)");
    const operationFunction = getOperationFunction(operation);
    const numbers = readNumbers();
    const result = performCalculationOnNumbers(numbers, operationFunction);

    if (numbers.length === 0) {
        alert("No numbers were entered");
    } else if (result === null) {
        alert("Cannot divide by zero");
    } else {
        alert(`${numbers.join(` ${operation} `)} = ${result}`);
    }
}

window.addEventListener("load", function () {
    const calculatorType = prompt(
        "Enter calculator type (0 for two numbers, 1 for multiple numbers)"
    );

    if (calculatorType === "0") {
        runTwoNumberCalculator();
    } else if (calculatorType === "1") {
        runMultipleNumberCalculator();
    } else {
        alert("No calculator selected");
    }
});

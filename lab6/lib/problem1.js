function validateInput(input) {
    const number = Number(input);

    return (
        input !== null &&
        input.trim() !== "" &&
        Number.isInteger(number) &&
        number > 0
    );
}

function findPrimes(limit) {
    const primes = [];

    checkNumber:
    for (let number = 2; number <= limit; number++) {
        for (let divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                continue checkNumber;
            }
        }

        primes.push(number);
    }

    return primes;
}

function displayPrimes(primes, limit) {
    alert(
        `For n = ${limit} prime numbers are ${primes.join(",")}`
    );
}

function main() {
    let input;

    do {
        input = prompt("Enter a positive integer");
    } while (!validateInput(input));

    const limit = Number(input);
    const primes = findPrimes(limit);

    displayPrimes(primes, limit);
}

window.addEventListener("load", main);
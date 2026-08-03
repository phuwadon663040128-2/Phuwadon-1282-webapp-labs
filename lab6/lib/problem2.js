function readInput() {
    const list = [];

    while (true) {
        const input = prompt("Enter an integer (a negative integer to quit):");

        // Ignore Cancel, an empty value, or whitespace.
        if (input === null || input.trim() === "") {
            continue;
        }

        const number = Number(input);

        // Only integers are used in this problem.
        if (!Number.isInteger(number)) {
            continue;
        }

        if (number < 0) {
            break;
        }

        if (number > 0) {
            list.push(number);
        }
    }

    return list;
}

function displayStats(list) {
    const hasNumbers = list.length > 0;

    const sum = list.reduce((total, number) => total + number, 0);

    // The ternary expressions also handle the first-entry-is-negative case.
    const average = hasNumbers ? sum / list.length : 0;
    const minimum = hasNumbers ? Math.min(...list) : 0;
    const maximum = hasNumbers ? Math.max(...list) : 0;
    const listText = hasNumbers ? list.join(",") : "";

    alert(
        `For the list ${listText}, the average is ${average.toFixed(2)}, ` +
        `the minimum is ${minimum}, and the maximum is ${maximum}`
    );
}

function main() {
    const list = readInput();
    displayStats(list);
}

window.addEventListener("load", main);

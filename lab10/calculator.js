import { select } from '@inquirer/prompts'

const [firstInput, secondInput, operatorInput] = process.argv.slice(2)

if (firstInput === undefined || secondInput === undefined) {
  console.log('Please enter two numbers')
  process.exit(1)
}

const firstNumber = Number(firstInput)
const secondNumber = Number(secondInput)

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
  console.log('Please enter numbers')
  process.exit(1)
}

const operator = operatorInput || await select({
  message: 'Choose an operator',
  choices: [
    { name: 'add', value: 'add' },
    { name: 'subtract', value: 'subtract' }
  ]
})

if (operator === 'add') {
  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
} else if (operator === 'subtract') {
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
} else {
  console.log('unknown operator')
  process.exit(1)
}

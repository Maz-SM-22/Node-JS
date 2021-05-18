const chalk = require('chalk'); 
const readline = require('readline'); 

const log = console.log; 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}); 

const getFruitColour = (fruit)=> {
    const fruitSorted = fruit.toLowerCase().trim(); 
    const fruitString = `My favourite fruit is... ${fruitSorted}`; 
    if (fruitSorted==='oranges') {
        log(chalk.keyword('orange')(fruitString + ' 🍊'));
    } else if (fruitSorted==='bananas') {
        log(chalk.yellowBright.bold(fruitString + ' 🍌'))
    } else if (fruitSorted==='strawberries') {
        log(chalk.red.underline(fruitString + ' 🍓'))
    } else if (fruitSorted==='kiwis') {
        log(chalk.black.bgGreenBright(fruitString + ' 🥝'))
    } else {
        log('Sorry we don\'t have this fruit available!')
    }
    return; 
}

rl.question('What is your favourite fruit: oranges, bananas, strawberries or kiwis?', (fruit) => {
    getFruitColour(fruit); 
    rl.close(); 
}); 
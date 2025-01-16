#!/usr/bin/env node

// for cli options (using 'yargs' npm package)
// import yargs
// const yargs = require('yargs');
// yeh cli ke saare arguments ko key value pair mei convert kar dega (interpreter, cli path, options)
// const { argv } = yargs(process.argv)
// console.log(argv);
// cli options
// console.log(process.argv);

// for cli interactivity (using inquirer npm package)
// import inquirer
const inquirer = require('inquirer')
    // create prompt module
const prompt = inquirer.createPromptModule();
// prompt questions
prompt([{
        "type": "input",
        "name": "pokemon",
        "message": "Enter a pokemon name to view its 5 moves"
    }])
    // prompt method returns a promise with user responses over CLI
    .then((answers) => {
        const pokemon = answers.pokemon;
        // pass-in the pokemon entered by the user over CLI tool
        printFiveMoves(pokemon);
    });


const printFiveMoves = async(pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const data = await response.json();
    // destructure move property
    const moves = data.moves;
    // map over moves to fetch each move name
    const move = moves.map(({ move }) => move.name)
        // get only first five moves
    console.log(move.slice(0, 5))
}

// use this in case of cli options
// printFiveMoves(argv.pokemon)
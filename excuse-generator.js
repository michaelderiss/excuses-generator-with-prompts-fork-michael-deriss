'use strict';

const excuses = [
    'I was late because I overslept.',
    'I forgot my keys.',
    'My car broke down.',
    'I had an emergency.',
    'I ran into traffic.',
];

function getRandomExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}

console.log(getRandomExcuse());

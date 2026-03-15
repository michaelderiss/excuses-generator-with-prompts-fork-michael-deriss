'use strict';

const who = ['I', 'My friend', 'The dog', 'The cat'];

const what = [
    'overslept',
    'forgot my keys',
    'had car trouble',
    'got stuck in traffic',
    'had a family emergency',
    'missed the alarm',
    'lost track of time'
];

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
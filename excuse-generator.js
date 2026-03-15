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

const when = [
    'today',
    'yesterday',
    'this morning',
    'last night',
    'earlier',
    'a moment ago',
    'this afternoon'
];

const action = [
    'was delayed by',
    'was held up by',
    'was stopped by',
    'was interrupted by',
    'was caught in',
    'was stuck because of',
    'was slowed down by'
];

// Get random value from the who array
const randomWho = who[Math.floor(Math.random() * who.length)];

// Get random value from the action array
const randomAction = action[Math.floor(Math.random() * action.length)];

// Get random value from the what array
const randomWhat = what[Math.floor(Math.random() * what.length)];

// Get random value from the when array
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Build the excuse sentence
const excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

console.log(excuse);

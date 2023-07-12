const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

log(first, second);

let data = 'This is the third file';

writeFileSync('./content/result-sync.txt', `Here is the result ${first} , ${second}`);
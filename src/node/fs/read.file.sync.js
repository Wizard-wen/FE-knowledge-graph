const { readFileSync, statSync } = require('fs');
const { resolve } = require('path');
const { parseSync } = require('svgson');

const svg = readFileSync(resolve(__dirname, '../../../static/Bank.svg'), 'utf-8');
console.log(statSync(resolve(__dirname, '../../../static/Bank.svg')));
const { height, width } = parseSync(svg).attributes;
console.time('svg');
console.log(parseInt(height.split('px')[0], 10), parseInt(width.split('px')[0], 10));
console.timeEnd('svg');

const _ = require("lodash");

let items = [1, [2, [3, [4]]]];

const newItems = _.cloneDeep(items);

items = [1, 2];

console.log(newItems);
console.log(items);

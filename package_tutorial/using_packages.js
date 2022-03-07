const _ = require('lodash');
items1 = [1, [2, 3], 4, [[5, 6], 7], 8];
console.log(_.flattenDeep(items1));
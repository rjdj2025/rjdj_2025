//  数组操作

/*
array.isArray
*/


/*
array.slice(start,end)
slice方法返回一个新的数组对象，这个对象是对原数组从start到end的浅拷贝（包括start，不包括end）,start和end是索引
原数组不变
@param
@return
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// ['camel','duck','elephant']
console.log(animals.slice(2, 4)); // ['camel','duck']
console.log(animals.slice(-2)); // ['duck','elephant']

/**
 * Array.from(arrayLike, mapFn, thisArg)
 * 可以将一个可迭代对象（如map和set）和类数组对象(带有length和索引的对象)创造数组对象
 */
console.log(Array.from('foo')); // ['f','o','o']
console.log(Array.from([1, 2, 3], (x) => x + x)); // [2,4,6]

/**
 * Array.prototype.concat(value0, value1,  … , valueN)
 * 合并两个或多个数组，返回一个新数组
 */
   const array1 = ['a', 'b', 'c'];
   const array2 = ['d', 'e', 'f'];
   const array3 = array1.concat(array2);

   console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

/**
 * Array.prototype.pop()
 * 从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
 * 
 */
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]


/**
 * Array.prototype.shift()
 * 从数组中删除第一个元素
 * 
 */
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // [2,3]
console.log(firstElement); // 1

/**
 * Array.prototype.push(element0, element1, … , elementN)
 * push() 方法将指定的元素添加到数组的末尾，并返回新的数组长度。
 */
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count); // 4
console.log(animals); // ['pigs','goats','sheep','cows']

/**
 * Array.reduce(callbackFn, initialValue)
 * 迭代方法
 */


/**
 * Array.prototype.reverse()
 * 就地反转数组中的元素，并返回同一数组的引用
 */

/**
 * Array.prototype.splice(start, deleteCount, item1, item2, …, itemN)
 * 就地移除或者替换已存在的元素和/或添加新的元素。
 */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "May"]


/**
 * Array.prototype.toString()
 * 
 */
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString()); // Expected output: "1,2,a,1a"


/**
 * Array.prototype.unshift(element1, element2, …, elementN)
 * 将指定元素添加到数组的开头，并返回数组的新长度。
 */
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // Expected output: 5
console.log(array1); // Expected output: Array [4, 5, 1, 2, 3]





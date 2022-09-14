var arr = [12,25,26,24,89];
arr[0] = 21;
console.log(arr[0]);
console.log(arr);
console.log(arr.length);

arr.push(83);
arr.push(99);
console.log(arr);

arr.pop(2);
console.log(arr);

// Add element at the start
arr.unshift(55);
arr.unshift(70);
console.log(arr);

// Remove element from beginning
arr.shift();
console.log(arr);

var strArr = ['Salam', 'Kalam', 'Rahim', 'Karim'];
console.log(strArr);

// Make a subarray
var part = strArr.slice(1);
console.log(part);
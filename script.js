'use strict'
//1
let array2 = [14, 150, 'css', null, 'javascript', 25];

let maps =array2.map(function (item) {
    if (typeof item=== 'number') {
        return item * item
    } else if (typeof item==='string'){
        return item.toUpperCase()
    }
    return item
})
console.log(maps);

//2

let array1 =['hello1', 14,24, 'hello2']


let array1 = [`hello1`, 14, 24, `hello2`];
function resultarray1(it) {
  if (typeof it === `number`) return it;
}
let lastresult = array1.filter(resultarray1);
console.log(lastresult);

//3

let city = prompt`Saqartvelos dedaqalaqi? `;
let lowwercity = city.toLowerCase().startsWith(`tbilisi`);
console.log(lowwercity);


//4

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let newlanguages=languages.filter(function (item) {
    if (item.length > 3) {
        console.log(item);
        
    }
})

//5

let words = ["Madrid", "rome", "Milan", "berlin"];
let filtwords = words.filter(function (item) {
  if (item.includes(`m`)) return item;
  else if (item.startsWith(`M`)) return item;
});
console.log(filtwords);


//6
function fnc1(link) {
    if (link.startsWith('https://')) {
        console.log('moicavs');
        
    } else {
        console.log('ar moicavs');
        
    }
}
fnc1('https://google.com')
//7
let array6 = [-1, -2, -3, 4];
let rry6 = array6.some((e) => e > 0);
console.log(rry6);

//8



//9
let numbers = [12,24,3,5,70]

let array9 = [1, 2, 3, 4, 5];
let smar9 = array9.reduce((total, num) => total + num, 0);
console.log(smar9);


//10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let allarr= arr1.concat(arr2)
let newallarr=allarr.concat(arr3)
console.log(newallarr);


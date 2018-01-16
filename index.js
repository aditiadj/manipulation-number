//Manipulation Number
//Level 0
console.log('------Level 0--------')
var numberH = 90
let numberI = 40
const numberJ = 20 //cannot be changed

console.log(numberH)
console.log(numberI)
console.log(numberJ)

//Level 1
console.log('------Level 1--------')
var a = 3
var k = 66
var l = 4

var addition = a + l
var substraction = k - l
var multiply = k / a
var divided = l * a
var modulo = k % l

console.log(addition)
console.log(substraction)
console.log(multiply)
console.log(divided)
console.log(modulo)

//Level 2
console.log('------Level 2--------')
var numberK = 12
var numberL = 144
let numberM = 033
const numberN = 0.04

var boolean = true
numberM = numberL - numberK

//use boolean, string, number data type
if(boolean){
  var string = `${numberL} minus ${numberK} equals ${numberM}`
}
console.log(string)

//use of negative and big number
numberL = 19293
numberM = -3881.7272
numberK = numberL + numberM
console.log(numberK)

//Level 3
console.log('------Level 3--------')

//Combine, push, or pop different kind of data types like a string and boolean to that array variable
var a = [200,300,400,500,600]
console.log(a.pop())
console.log(a)
a.pop();
console.log(a)
a.pop();
console.log(a)

console.log(a.push())
console.log(a);
a.push(300);
console.log(a);
a.push(400);
console.log(a);

var kota = ["Bandung", "Jakarta", "Semarang", "Yogyakarta"];
var kotaLength = kota.length;
var text = "Daftar kota besar: ";

for (i = 0; i < kotaLength; i++) {
    console.log(text += " " + kota[i]);
}
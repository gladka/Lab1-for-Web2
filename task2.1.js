let a = 2;
let b = 3;
let c, d;
c = ++a; //c=3; a=3
d = b++; //d=3; b=4;
c = (2+ ++a); //c=6; a=4
d = (2+ b++); // d=6; b=5

console.log(a); //4
console.log(b); //5
console.log(c); //6
console.log(d); //6
console.log(console.log("Hello, world"));
// 1.Hello, world
// 2.undefined
//Спочатку буде виведений внутрiннiй console.log(), a саме - "Hello, world"
//Далi, в зовнiшньому console.log(), в якостi аргументу залишається undefined.
// Це вiдбувається тому, що console.log() нiчого не повертає

console.log(null || undefined);
//Оператор || повертає перше icтинне значення. Тобто те, що дорiвнює true.
//Якщо всi операнди є false, тодi оператор || повертає останнiй false
// null=false
// undefined = false
// Буде виведений останнiй false, тобто - undefined
console.log(null || 2 || undefined);
// null=false
// 2=true
// Буде виведено 2, оскiльки це є true. До undefined черга не дiйде
console.log(1 && null && 2);
//Оператор && повертає перше хибне значення. Тобто те, що дорiвнює false.
//Якщо всi операнди є true, тодi оператор && повертає останнiй true
// 1=true
// null=false
// Буде виведено null,оскiльки це є false. До 2 черга не дiйде
console.log(1 && console.log("Hello"));
//1 - true
//Тому спочатку буде виведений внутрiннiй console.log(), a саме - "Hello",
// пiсля якого буде виведено undefined.
//Hello
//undefined
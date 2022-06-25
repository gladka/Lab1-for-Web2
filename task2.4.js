console.log("" + 1 + 0); //10       тип - string
//Оператор + (за умови, що серед операндiв є рядок) всi iншi операнди перетворює в рядок

console.log("" - 1 + 0);//-1        тип - number
//Оператор - перетворює операнди до чисел, якщо це можливо.
// "" перетвориться в 0, i ми маємо вираз 0-1+1

console.log(true + false);//1       тип - number
//true = 1
//false = 0

console.log(6 / "3");//2        тип - number
//Оператор / перетворює операнди до чисел, якщо це можливо

console.log("2" * "3");//6      тип - number
//Оператор * перетворює операнди до чисел, якщо це можливо

console.log(4 + 5 + "px");//9px     тип - string
//Операцiї виконуються злiва направо. Спочатку виконалось додавання, а потiм переведеня з numver до string

console.log("$" + 4 + 5);//$45      тип - string
//Тут одразу було переведення до рядка

console.log("4" - 2);//2        тип - number
// "4" було переведено до числа 4

console.log("4px" - 2);//NaN
//Оператор - не зможе перевести 4px до числа i в результатi буде помилка

console.log(7 / 0);//Infinity       тип - number
//При дiленнi на 0 ми отримуємо Infinity. Це спецiальне значення типа данных number

console.log("  -9\n" + 5);//"  -9           5"     тип - string
//Мiж 9 i 5 є перехiд на новий рядок

console.log("  -9\n" - 5);//-14     тип - number
//Всi пробiльнi символи будуть видаленi, а "-9" переведено до числа

console.log(5 && 2);//2     тип - number
//Оператор && повертає перше хибне значення. Тобто те, що дорiвнює false.
//Якщо всi операнди є true, тодi оператор && повертає останнiй true
//5 = true
//2 = true

console.log(2 && 5);//5     тип - number

console.log(5 || 0);//5     тип - number
//5 = true
//0 = false
//Оператор || повертає перше icтинне значення. Тобто те, що дорiвнює true.
//Якщо всi операнди є false, тодi оператор || повертає останнiй false

console.log(0 || 5);//5     тип - number

console.log(null + 1);//1       тип - number
//null=0

console.log(undefined + 1);//NaN      тип - number

console.log(null == "\n0\n");//false        тип - boolean
//null==undefined i нiчому окрiм нього

console.log(+null == +"\n0\n");//true       тип - boolean
//Унарний + перетворює вираз в число, де null це 0, a "\n0\n" також 0

console.log("5" + "1");//51     тип - string

console.log("5" + 1);//51       тип - string

console.log(5 + 1);//6      тип - number

console.log("5" + true);//5true     тип - string

console.log(1 / 0);//Infinity       тип - number

console.log(-5 / 0);//-Infinity     тип - number

console.log(1 / Infinity);//0       тип - number

console.log(Infinity - Infinity);//NaN      тип - number

console.log(Infinity + 10);//Infinity       тип - number

console.log(Infinity + Infinity);//Infinity     тип - number

console.log(Infinity + "3");//Infinity3     тип - string

console.log(undefined + 5);//NaN        тип - number


//Оператор parseInt переводить до типу number:
console.log(parseInt("10"));//10

console.log(parseInt("10.3"));//10

console.log(parseInt(10.3));//10

console.log(parseInt("34 38 23"));//34
//Перетворює тiльки перше число
console.log(parseInt("   60   "));//60
//Всi пробiльнi символи будуть видаленi
console.log(parseInt("x10"));//NaN      тип - number
//'х' неможливо перевести до числа

console.log(parseInt("0x10"));//16
//      iз 16_вої системи в 10_ву

console.log(parseInt("010"));//10
//      0 на початку iгнорується

console.log(parseInt("24", 8));//20
//      iз 8_вої cистеми в 10_ву

console.log(parseInt("FF", 16));//255
//   iз 16_вої системи в 10_ву

console.log(parseFloat("0xFF"));//0
//         iз 16_вої системи в 10_ву

console.log(false && 0);//false     тип - boolean

console.log(0 && false);//0     тип - number

console.log(!0);//true      тип - boolean

console.log(!5);//false     тип - boolean

console.log(1 && 0);//0     тип - number
//1 - true
//0 - false i ще останнє значення

console.log(1 && false);//false     тип - boolean

console.log(1 || 5);//1     тип - numver

console.log(0 || 5);//5     тип - number
//0 - false
//5 - true i ще останнє значення

console.log(5 + 4 + "!");//9!       тип - string
//Спочатку буде рахуватись сума 5+4, а потiм це буде переведено до рядка

console.log(!null);//true       тип - boolean

console.log(!!null);//false     тип - boolean
//Оператор !! працює аналогiчно Boolean(...);

console.log(!!5);//true     тип - boolean

console.log(null == 0);//false      тип - boolean
//null при нестрогому порiвняннi дорiвнює тiльки undefined

console.log(null === 0);// false    тип - boolean
//null- тип даних null, значення - null
//0 -тип даних number, значення - 0

console.log(null > -5);//true       тип - boolean

console.log(undefined > 5);//false  тип - boolean

console.log(undefined > 5 != true);//true       тип - boolean
//undefined>5       це false
//false != true     це true

console.log(null + 5);//5       тип - number
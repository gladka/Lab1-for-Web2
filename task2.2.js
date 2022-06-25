let p = 5;

let x = p *= (p *= 2);
/*
 x = p*= (p = p * 2)   ==>
     x = p*= (p=10)  ==>
       x= p = p * (p=10) ==>
           x= p = 5*10    ==>
               x= p = 50;
 */
console.log(x); //50
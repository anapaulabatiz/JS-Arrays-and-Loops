console.log("******************PARTE 1**************************");
function x(xValue){
for (xValue = 10; xValue>0; xValue-=0.5) {
    console.log(xValue); 
}
}
console.log("******************PARTE 2**************************");
for (cont = 1; cont<=100; cont+=2){
    console.log(cont);
}

//     // if (cont % 2 != 0){
//         console.log(cont);
//     }
// }

console.log("******************PARTE 3**************************");
function n(nValue){
    let y = 1;
    while (y <= nValue) {
      console.log("["+y+"]");
      y++;
    }
}

console.log("******************PARTE 4**************************");
function n2(nValue2) {
let a = 0;
let b = 1;
while (b <= nValue2) {
    a = a + b;
    b++;
} return (a);
}
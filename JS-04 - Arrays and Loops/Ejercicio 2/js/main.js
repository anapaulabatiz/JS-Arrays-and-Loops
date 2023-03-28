let a,b;
for(a = 1; a <= 5; a++) // for externo
{
let x= "";
for(b = 1; b <= a; b++) // for interno
{
  x+="* "; // respuesta for interno
}
console.log(x); // respuesta for externo
}
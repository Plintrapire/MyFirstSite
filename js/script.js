/*
var a, b;
a=17;
b=17;
if (a<=b && b > a) 
console.log("Yes");
else
console.log("No");
*/

/*
var a;
a=5;
if ((a<8 && 6==a) || (8<8))
console.log("Yes");
else
console.log("No");
*/

/*
var a, b, c;
a=8;
b=18;
c=50;
if (a>b)
{
var sum = (a+b);
if (sum < c)
console.log("Yes");
else
console.log("No");
}
else
{
var raz = (a-b);
if (raz < c)
console.log("Yes");
else
console.log("No");
}
*/


/*
var a, b, c;
a=10;
b=6;
c=50;
if (a == b)
{
var sum = (a + b);
if (sum < c)
console.log("Yes1");
else
console.log("No1");
}
else
{
var raz = (a - b);
if (raz < c)
console.log("Yes2");
else
console.log("No2");
}
*/

/*
var a, b, c;
a=8;
b=18;
c=50;
if (a > b)
{
var sum = (a+b);
if (sum < c)
console.log("Yes1");
else
console.log("No1");
}
else
{
var raz = (a-b);
if (raz < c)
console.log("Yes2");
else
console.log("No2");
}
else
{
var raz = (a == b);
if (raz < c)
console.log("Yes3");
else
console.log("No3");
}
*/

/*
var o,p,sum;
o=43;
p=63;
for (var r=0; r<=5; r++)
  {
   sum=p+o;
   console.log(r);
   console.log(sum);
   console.log(" ---------------- ");
   console.log("|                |");
   console.log("|                |");   
   console.log("|                |");   
   console.log("|                |");   
   console.log("|                |");
   console.log("|                |");
   console.log("|                |");
   console.log("|                |");
   console.log(" ---------------- ");
   o--; //o=o-1;
   p--; //p=p-1;
  }
*/
/*
var NM=6, FG=3;
switch ((NM+FG)/3){
     case 14:{
      console.log("Четырнадцать");
      break;
          }
     case 17:{
      console.log("Семнадцать");
      break;
            }
      case 2:{
      console.log("два");
      break;
          }
     case 9:{
      console.log("девять");
      break;
            }
     case 11:{
      console.log("одиннадцать");
      break;
            }
     case 3:{
      console.log("три");
      break;
            }
      default:{
      console.log("не знаю");
      break;
                }
      } 
*/

/*
var a="Паша", b="Аня", c="Каша",d="Маша";
switch ("Коля"){
     case "Паша":{
      console.log("Паша");
      break;
          }
     case "Аня":{
      console.log("Аня");
      break;
            }
      case "Каша":{
      console.log("Каша");
      break;
          }
     case "Маша":{
      console.log("Маша");
      break;
            }
      default:{
      console.log("Кто?");
      break;
                }
      } 
*/


var a, b, c;
a=8;
b=18;
c="Каша";
d="Паша"
switch (7){
     case 7:{
     	if (a>b) 
      console.log("Yes");
else
      console.log("No");
      break;
           } 
     case "Паша":{
      for (var i=0; i<10; i++)
      console.log(i);
      break;
                 } 
     default:{
      console.log("Нету");
      break;
             }
}
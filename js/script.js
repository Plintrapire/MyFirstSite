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

/*
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
*/

/*
var o=1;
var sum=1;
while(o<10) {
	o++;
	sum= sum+o;
	console.log(sum);
}
*/



/*
var a = 0;
var sum = 0;
do 
{
a=a+2;
sum = a+sum;
}
while(a<50)
console.log(sum); 



console.log("----凸(¬◡¬)凸----");



var Quadrat = {
color:"Red",
size:"25cm*25cm",
temperature:"-40°",
material:"Iron",
count:"4 objects"
}

for(var key in Quadrat){
        console.log(key);
      }
console.log("----凸(¬◡¬)凸----");
for(var key in Quadrat){
        console.log(Quadrat[key]);
      }
*/

var myFunction = function()

var Lines = function() {
   var a = prompt ('Теория алгоритмов')
   var b = prompt ('Технические средства информатизации')
   var c = prompt ('Операционные системы')
   var lines1 = a + " " + b + " " + c;
   return lines1;
}      

var low_lines = ruProm(),
console.log(low_lines);







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

/*
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
*/

/*
var myStrExam = function(Str) {
  //var tmp1 = Str.replace ("y", "Y");
  //return tmp1;

  //var tmp2 = Str.slice (1,3);
  //return tmp2;

  //var tmp3 = Str.substring (1,8);
  //return tmp3;
  
  //var tmp4 = Str.toUpperCase ();
  //return tmp4;

  //var tmp5 = Str.lastIndexOf ("h");
  //return tmp5;

  //var t="t";
  //var tmp20 = Str.split(t);
  //return tmp20
}
var r1 = myStrExam("yet another conference");
console.log(r1);
*/


/*
console.log("------join------");
var a, b;
a = new Array(0,1,2,3,4);
b = a.join("-");
console.log(b);

console.log("------reverse------");
var arr2 = ['a', 'b', 'c'];
arr2.reverse();
console.log(arr2);

console.log("------sort------");
var arr3 = ["Банан", "Апельсин", "Яблоко", "Манго"];
console.log(arr3.sort());

console.log("------concat------");
var arr4 = ['Один', 'Два'];
var arr5 = ['Три', 'Четыре'];
result = arr4.concat(arr5);
console.log(result);

console.log("------slice------");
var arr6 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr6.slice(0, 2))

console.log("------unshift------");
var arr7 = ['a', 'b', 'c'];
arr7.unshift('d', 'e');
console.log(arr7);

console.log("------shift------");
var arr8 = ['a', 'b', 'c', 'd', 'e'];
arr8.shift();
console.log(arr8);

console.log("------toString------");
var user = {
  name: 'Андрей',
  toString: function() {
    return this.name;
  }
};
console.log('Привет ' + user);

console.log("------toLocaleString------");
var data = new Date().toLocaleString();
console.log(data);
*/


$(document).ready(function(){

 $(".menu").click(function(){ 
    $(".podpunkt").slideToggle(1000);
});

  $(".reg").click(function(){ 
    $(".register").slideToggle(1000);
});

  $(".sign").click(function(){ 
    $(".sign-obc").slideToggle(1000);
});

  $(".car1-obc").click(function(){
   $(".car1-obc-xar").slideToggle(1000);
  $(".car1-obc-info").css("height","717");
  }); 


  $(".car2-obc").click(function(){ 
   $(".car2-obc-xar").slideToggle(1000);
   $(".car2-obc-info").css("height","717");
});




/*
$(".menu").click(function(){ 
  //$(".menu").remove();
  //$("div").removeClass("Job");
  //alert($(".podpunkt").text());
  //$(".menu").after($(".menu").clone());
  //$("<h3>jQuery</h3>").replaceAll(".menu");
   });
   */
});



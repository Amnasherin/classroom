<!doctype html>
<html>
<head>
<title>JavaScript</title>
</head>
<style>
body{
background-color:orange;
}
button{
background-color:yellow;
}
</style>
<body>
<h1>To find area and perimeter of a circle</h1><br>
<button onclick="circle()"><h1>click here</h1></button>
<h1>To find length and breadth of a rectangle</h1><br>
<button onclick="rectangle()"><h1>click here</h1></button>
<h1>To find all the prime number upto a number </h1><br>
<button onclick="prime()"><h1>click here</h1></button>
<p id="demo"></p>
<script>
function circle(){
 var r,a=0,p=0;
 r=parseInt(prompt("input the radius"));
alert("The radius is "+r);
if (r == 0){
alert("please input a number");
}
else{
   a=3.14*r*r;
   p=2*3.14*r;
 document.getElementById('demo').innerHTML=("<h1>The area of the circle is "+a+"<br>The perimeter of the circle is "+p+"</h1>");
}
}
function rectangle(){
 var l,b,a=0,p=0;
 l=parseInt(prompt("input the length"));
b=parseInt(prompt("input the breadth"));
alert("The length is "+l+" and the breadth is "+b);
if(b==0||l==0){
alert("input a number");
}
else{
a=l*b;
p=(l+b)+(l+b);
document.getElementById('demo').innerHTML=("<h1>The area of the rectangle is "+a+"<br>The perimeter of the rectangle is "+p+"</h1>");
}
}
function prime(){
var n,i,j,f;
n=parseInt(prompt("Enter the limit"));
for(i=2;i<=n;i++)
{
f=0;
for(j=2;j<=i/2;j++)
{
if(i%j==0)
{
f=1;
break;
}
}
if(f==0)
{
document.write("<h1>"+i+"<br></h1>");
}
}
}
</script>
</body>
</html>

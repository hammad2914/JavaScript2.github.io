// chp 21

// var input = prompt("Enter your Name");
// input = input.toUpperCase();
// alert(input);

// var input = prompt("Enter your Name");
//  input = input.toLowerCase().split(" ");
// for(var i = 0; i< input.length; i++){
//    input[i] = input[i][0].toUpperCase() + input[i].slice(1);
// }
// alert(input.join(" "));


// chp 22
// var user = prompt("Enter Your Favorite Mobile")
// alert (user.length);

// var user = prompt("Enter Your Favorite Mobile")
// var mobile = user.charAt(user.length-1);
// alert (mobile)

// chp 23
// var a = "Pakistani";
// for(var i=0; i < a.length; i++) {
//     var b = a.slice(i, i+1);

//     if (b === "n"){
//         alert(i);
//     }
// }

// var a =prompt("Enter Username")
// for(var i=0; i < a.length; i++) {
//     var b = a.slice(i, i+1);

//     if (b === "@" || b ==="." || b ==="," || b === "!"){
//         prompt("Enter valid username");
//     }
// }

// var a = "The quick brown fox jumps over the lazy dog";
// a = a.toLowerCase();
// for (var i=0; i<a.length; i++){
//     var b = a.slice(i,i+3);

//     if (b=== "the"){
//         console.log(i)
//     }
// }

// chp 24
// var a = "Pakistani";
// var b = a.charAt(3);
// document.write(b)

// chp 25

// var city = "Hyderabad";
// var city1 = city.replace("Hyder", "Islam");
// document.write(city1)

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message= message.replace(/and/g , "&");
// document.write(message)

// chp 26

// var num =prompt("Enter a decimal number");
// document.write(num);
//  var num1 = Math.round(num);
// document.write(num1);
//  var num2 = Math.floor(num);
// document.write(num2);
//  var num3 = Math.ceil(num);
// document.write(num3);

// var num =prompt("Enter a negative decimal number");
// document.write(num);
//  var num1 = Math.round(num);
// document.write(num1);
//  var num2 = Math.floor(num);
// document.write(num2);
//  var num3 = Math.ceil(num);
// document.write(num3);

// chp 27

// var dice = Math.ceil(Math.random()*6);
// alert(dice);

// var toss = Math.ceil(Math.random()*2);
// if (toss === 1){
//     alert("Tails")
// }
// else {alert("Heads")}

// var secret = Math.ceil(Math.random()*10);
// var num = prompt("Guess the secret number from 1 - 10");
// if (num === secret){
//     alert ("Congratulations")
// }
// else {alert("Bad Luck")}

// chp 28

// var weight = prompt("enter your weight")
// // weight = parseInt(weight);
// // document.write(weight + "kgs");
// weight = parseFloat(weight);
// document.write(weight + " Kilograms");

// chp 29

// var string = "472"
// var str = Number(string);
// document.write(str + "<br>" + typeof(str));

// var num = 35.36;
// var string = num.toString();
// var new1 = string.slice(0,2)
// var new2 =string.slice(3)
// document.write(new1 + new2);

// chp 30
// var percentage = 30 / 45 * 100;
// percentage = percentage.toFixed(2);
// document.write(percentage); 

// chp 31-34

// var date = new Date();
// document.write(date);

// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var curmonth = date.getMonth();
// var monthname = months[curmonth];
// alert ("Current Month :" + monthname);

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var date = new Date();
// var day = date.getDay();
// var today = days[day];
// alert ("Today is " + today.slice(0,3));

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var date = new Date();
// var day = date.getDay();
// var today = days[day];
// if (today === "Saturday" || today === "Sunday"){
//     alert("Its Fun Day")
// }

// var date = new Date();
// var days = date.getDate();
// if (days < "16"){
//     alert("First fifteen days of the month")
// } 
// else {alert("Last days of the month")}

// var date = new Date();
// var millisec = date.getTime();
// var min = millisec / 1000 * 60;
// document.write("Current Date " + date + "<br>" + "Millisecends since Jan 1,1970: " + millisec +"<br>" + "Minutes since Jan 1,1970: " + min);

// var date = new Date();
// var hrs = date.getHours();
// if (hrs < "12"){
//     alert("Its AM")
// }
// else{alert("Its PM")}

// var date = new Date("December 31,2020");

// alert (date);

// var date = new Date("January 1,2015");
// var date1 = date.getTime();
// var rdate = new Date("December 5,2015");
// var date2 = rdate.getTime();
// var sec = (date2 - date1) / 1000
// alert("On" + rdate + sec + " Seconds have passed since the beginning of 2015")

// var date = new Date();
// var hr = date.getHours();
//  date.setHours(--hr);
// alert("Current Date: " + new Date() + "1 hour ago it was: "+ date);

// var date = new Date();
//  date.setFullYear(1922);
// alert("Current Date: " + new Date() + "100 years back it was: "+ date);

// var age = prompt("Enter your age");
// var date = new Date();
// var years = date.getFullYear();
// var birth = years-age
// document.write( "Your age is " + age +"<br>" + "Your Birth year is " + birth);

// var name = "Hammad Ali"
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var curmonth = date.getMonth();
// var monthname = months[curmonth];
// var units = 320;
// var charge = 21;
// var pay = units * charge;
// var late = 500;
// var latepay = pay + late;

// document.write("K-ELECTRIC BILL "+ "<br>"+ "Costumer Name: " + name + "<br>"+ "Month: " + monthname + "<br>"+ "Units: "+ units + "<br>"+ "Charge per unit: " +charge + "<br>"+  "<br>"+ "Net Amount Payable (within Due Date): " + pay  + "<br>"+ "Late payment surcharge: " + late  + "<br>"+ "Gross Amount Payable (after Due Date): " + latepay)

// chp 35-38

// function date(){
//     var d = new Date();
//     document.write(d);
// }
// date();

// function name(){
//     var firstname = prompt("First Name")
//     var lastname = prompt("Last Name")
//     alert("Welcome " +   firstname +   lastname);
// }
// name();

// function sum(){
//     var num1 =+prompt("Enter a Number");
//     var num2 =+prompt("Enter a Number")
//     alert(num1+num2);
// }
// sum();

// function cal(num1,opr,num2){
//     if (opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1-num2
//     }
//     else if(opr === "*"){
//         return num1*num2
//     }
//     else if (opr ==="/"){
//         return num1 / num2
//     }
//     else{alert("Incorrect Operater!")}
// }

// var result = cal(+prompt("Number 1") , prompt("Operater") , +prompt("Number 2"));
// alert(result);

// function num(num1){
//     return num1*num1

// }
// var square = num(8);
// alert(square);

// function num(num1){
//     return num1 * --num1 * --num1 * --num1
// }
// var fac = num(4);
// document.write(fac);

// function num(base){
//     return base*base 
// }
// var b = num(prompt("base"))
// function num1(per){
//     return per*per
// }
// var p = num1(prompt("perpendicular"))
// function hype(){
//     return (b + p) 
// }
// alert("Hypotenuse = " + hype());

// function a(width,height){
//     return width*height
// }
// var area =a(5,8);
// alert(area)
// var area1 =a("4","5");
// alert(area1)

// function checkPalindrome(string) {


//     var len = string.length;
//     for (let i = 0; i < len / 2; i++) {

        
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// var string = prompt('Enter a string: ');
// var value = checkPalindrome(string);

// alert(value);

// function a(input){
//     var input = prompt("Enter your Name");
//  input = input.toLowerCase().split(" ");
// for(var i = 0; i< input.length; i++){
//    input[i] = input[i][0].toUpperCase() + input[i].slice(1);
// }
// alert(input.join(" "));
// }
// a();

// function longestWord(string){
//     var stringg = string.split(" ");
//     var longest = 0;
//     var longest_word = ;
//     for (let i = 0; i < stringg.length; i++) {
//       if (longest < stringg[i].length) {
//         longest = stringg[i].length;
//         longest_word = stringg[i];
//       }
//     }
//     return longest_word;
//   };
   
//   alert(
//     longestWord(
//       "Web Development Tutoriol"
//     )
//   );

// function word(a,b){
//  for(let i=0; i<a.length; i++){
//     var c =a.slice(i,i+1)
//     if (c===b){
//         console.log (i);
//     }
//  }   
// }
// var words =word("JSResourceS.com","o");

// function calcircum(){
//     var radius = 4;
//     return 2 * radius * 3.14
    
// }
// console.log("The Circumference is: " + calcircum());

// function calarea(){
//     var radius = 5;
//     var rsq= radius * radius;
//     return 3.14 * rsq

// }
// console.log("The Area of the Circle is : " + calarea());
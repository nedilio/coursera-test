// var message = "in global";
// console.log("global message = " + message);

// var a = function () {
// 	var message = "inside a";
// 	console.log("a: message = " + message);
// 	b();
// };
// function b () {
// 	console.log("b: message = " + message);
// };
// a();

// 42

// var x;
// console.log(x);

// if (x== undefined) {
// 	console.log("x is undefined");
// };

// var x=5;

// if (x== undefined) {
// 	console.log("x is undefined");
// }
// else {
// 	console.log("x has been defined and its value is "+x)
// };
// 43
// var string = "Hello";
// string += " World";
// console.log(string + "!");
// math operators
// console.log((5+4)/3);

// equality
// var x=4,y=4;
// if (x==y) {
// 	console.log("x es igual a 4");
// };
// x="4";
// // if (x==y) {
// // 	console.log("x='4' es igual a y=4");
// // };
// if (x===y) {
// 	console.log("x='4' es igual a y=4");
// }
// else {
// 	console.log("no son iguales uno es string y el otro numero");
// }

// if (false || null || undefined ||
// 	"" || 0 || NaN) {
// 	console.log("this line will never execute");
// }
// else {
// 	console.log("todos estos panitas son falsos");
// };

// if (true&&1&&"false") {
// 	console.log("all true");
// };

// function a(){
// 	return {
// 		name: "Nelson"
// 	};
// }

// function b()
// {
// 	return 
// 	{
// 		name: "Nelson"
// 	};
// }

// console.log(a());
// console.log(b());

// LOOP
// var sum=0;
// for (var i = 0; i < 10; i++) {
// 	sum+=i;
// 	console.log(i);
// };

// console.log("la suma de los numeros del 1 al 9 es "+sum);

// numeros primos
function esPrimo(a) {
var contador=0;
for (var i = a-1; i > 1; i--) {
	console.log("i= "+i);
	var residuo=a%i;
	// console.log("residuo de "+a+" entre "+i+" da="+residuo);
	if (residuo==0) {
		contador=contador=1;
	}
};

if (contador==0) {
	console.log("es primo");
}
else {
	console.log("no es primo");
}
}
 esPrimo(5);

 var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}

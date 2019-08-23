var br = '<br>';

// Create variables 
var num1 = 37;
document.write(num1);

var textMsg = 'Create variables';
document.write(br + textMsg);

// Perform Operations 
var num2 = 14;
var num3 = '.5';
document.write(br + num2 + num3);
document.write(br + (num2 - num3));
document.write(br + num2 * num3);
document.write(br + num3 / num2);
document.write(br + num3 % num2);

// Concatenation and Escaping 
var tom = 'Tom "Alley Cat" O\'Mally';
var tomAge = '64';
var tomNum = 1;
document.write(br + tom + " is " + tomAge + " years old.");
document.write(br + (Number(tomAge) + tomNum));

// Create indexed arrays 
var arrFood = [
	'Pizza',
	'Tacos',
	'Korean Beef',
	'Tuna Salad'
];

document.write(br + arrFood[1]);
document.write(br + arrFood.length);

// Add a single element to the end of the array 
arrFood[arrFood.length] = 'Sushi';
document.write(br + arrFood);

// Add a multiple elements to the end of the array 
arrFood.push('Soup', 'Pasta');
document.write(br + arrFood);

// Add a multiple elements to the beginning of the array 
arrFood.unshift('Burger', 'Poutine');
document.write(br + arrFood);

// Remove a single element from the beginning of the array 
arrFood.shift();
document.write(br + arrFood);

// Remove a single element from the end of the array 
arrFood.pop();
document.write(br + arrFood);

// Create a multi-dimensional array
var arrFruit = [
	'Grapefruit',
	'Pineapple',
	'Mango'
];

var arrVeggie = [
	'Asparagus',
	'Beets',
	'Eggplant',
	'Spinach'
];

var arrHealthy = [
	arrFruit,
	arrVeggie
];

document.write(br + arrHealthy);

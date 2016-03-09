var myArray = 
[
	{
		question: questArray
		answer: classNames
		difficulty: diffArray
	};
]

var classNames = ["Jeremy", "Jonathan", "Koshan", "Patrick", "Joe", "Curtis", "Will", "Keith", "Lazlo", "Bogdan", "Josh", "Tristan"];
var questArray = [
"How many students are in class, ",
"What does HTML stand for, ",
"What does CSS stand for, ",
"What is a variable, ",
"What is github, ",
"What does console.log do, ",
"What is modulus, ",
"What is the difference of '=' and '==', ",
"What does position: absolute do, ",
"What is the default display of an img, "

];

var ansArray = [
12,
"Hyper text markup language.",
"Cascading style sheet.",
"Place holder/ Container for stuff.",
"Open source website to upload code publicly.",
"Posts to console, useful for checking if code works and fixing errors."
"Remainder of number divided by a number",
"Single assigns the value and double checks if it is true or equals to.",
"Makes it look up to the closest relative element.",
"Display Block."

];

var diffArray = [
1,
2,
2,
3,
3,
4,
4,
5,
5,
4
];

function grabQuestion(element) {
var randomNumQuestion = Math.floor((Math.random) * 10);
var randomNumStudent = Math.floor((Math.random) * 10);
for (i=0; i < )
console.log(diffArray[i] + questArray[i] + classNames[i] + " ?");
}




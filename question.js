// var myArray = 
// [
// 	{
// 		question: questArray
// 		answer: classNames
// 		difficulty: diffArray
// 	};
// ]




// function grabQuestion(element) {
// var randomNumQuestion = Math.floor((Math.random) * 10);
// var randomNumStudent = Math.floor((Math.random) * 10);



// // for (i=0; i < )
// // console.log(diffArray[i] + questArray[i] + classNames[i] + " ?");
// }


// var question = [
// 	{
// 		question: questArray
// 		answer: classNames
// 		difficulty: diffArray
// 	},
// 	{
// 		question: questArray
// 		answer: classNames
// 		difficulty: diffArray
// 	}
// 	{
// 		question: questArray
// 		answer: classNames
// 		difficulty: diffArray
// 	}
// ];


// for(i=0; i<question.length; i++) {
// 	console.log(question[i].question);
// }
var classNames = [

"Jeremy",
"Jonathan",
"Koshan",
"Patrick",
"Joe",
"Curtis",
"Will",
"Keith",
"Lazlo",
"Bogdan",
"Josh",
"Tristan"
];

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
"Posts to console, useful for checking if code works and fixing errors.",
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
// CONSTRUCTORS!
var questionArray = [];
function ClassQuizItem(parameter1, parameter2, parameter3){
	this.question = parameter1;
	this.answer = parameter2;
	this.difficulty = parameter3;
}



for (i=0; i<questArray.length; i++){
questionArray.push(new ClassQuizItem(questArray[i], ansArray[i], diffArray[i]));
}
// console.log(questionArray);

function questionRefresh() {
	var rand = Math.floor(Math.random() * questionArray.length);
	var rand2 = Math.floor(Math.random() * classNames.length);
	document.getElementById('question-text').innerHTML = questionArray[rand].question + " " + classNames[rand2] + " ?";

}














// function AddressBookItem(name, email, address, address2, city, state, zip, phone, website){
// 	this.name = name;
// 	this.email = email;
// 	this.address = address;
// 	this.address2 = address2;
// 	this.city = city;
// 	this.state = state;
// 	this.zip = zip;
// 	this.phone = phone;
// 	this.website = website;
// }

// var robsAddress = new AddressBookItem(
// 	"Rob",
// 	"rob@digitalcrafts.com",
// 	"223 Cherry Tree Lane",
// 	" ",
// 	"London",
// 	"UK",
// 	"CK236",
// 	"900-CALLMENOW",
// 	"www.digitalcrafts.com");


// console.log(robsAddress);

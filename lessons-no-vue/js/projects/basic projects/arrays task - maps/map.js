// import countries from '../DATA/countries.js';

// let expndTeam = [
//     {
//         name: 'Damir',
//         skills: 'full stack',
//         role: 'founder',
//     },
//     {
//         name: 'Alex',
//         skills: 'front end',
//         role: 'team lead',
//     },
//     {
//         name: 'Sasha',
//         skills: 'backend',
//         role: 'coder',
//     },
// ];

// // function for accessing names in object
// // later used in map() function
// let getNames = (teamMember) => teamMember.name;

// let roles = expndTeam.map(getNames);
// console.log('names:', roles);

// // list countri names
// let countryNames = (countries.map(country => country.name));
// console.log('countryNames:', countryNames);

// // create new array with name + role with an upper letter

// let teamWithNicknames = expndTeam.map((teamMember) => {
//     return {
//         fullName: teamMember.name + ' ' + teamMember.role[0].toUpperCase() + teamMember.role.slice(1),
//     }
// });

// console.log('teamWithNicknames:', teamWithNicknames);

// const technologies = expndTeam.map( (teamMember) =>
//     `<h3>${ teamMember.skills }</h3>`
// )

// const htmlContainer = document.querySelector('#app');
// htmlContainer.innerHTML = technologies.join('');

// // Todo: создать список из имен и вывести их на странице (урок про вывод JS
// //  в HTML файлах)

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

// создаём функцию, которая принимает число (из массива)
// и возврает число, умноженное на 10
function myFunction(num) {
	return num * 10;
}

console.log("- newArr -", newArr);

let userData = [
	{ email: "alex-the-leader@protonmail.com", name: "alex" },
	{ email: "alex-the-leader@protonmail.com", name: "alex" },
	{ email: "alex-the-leader@protonmail.com", name: "alex" },
	{ email: "alex-the-leader@protonmail.com", name: "alex" },
	{ email: "alex-the-leader@protonmail.com", name: "alex" },
];

let emails = userData.map(getEmail);

function getEmail(object) {
	return object.email;
}

console.log("- emails -", emails);

let names = [
	{
		name: "damir",
		surname: "lukianenko",
	},
	{
		name: "damir",
		surname: "lukianenko",
	},
	{
		name: "damir",
		surname: "lukianenko",
	},
	{
		name: "damir",
		surname: "lukianenko",
	},
];

let newNames = names.map(returnNewName);

function firstLetterToUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function returnNewName(object) {
    let newName = firstLetterToUpperCase(object.name);
	let newSurname = firstLetterToUpperCase(object.surname);

	return { name: newName, surname: newSurname };
}

console.log("- newNames -", newNames);

// result: 650, 440, 120, 40
let string = "Я Водка";

let vodka = string.slice(2);
console.log(vodka);

const numberss = [65, 44, 12, 4];
const newArrs = numbers.map(function(num) {
	  console.log(num);
	}
)
	

// result: 65, 44, 12, 4
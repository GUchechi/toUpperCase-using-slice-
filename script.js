var name = prompt("What is your name?")

// 2 Capitalize the first letter of their name
// a isolate the first letter

var firstChar = name.slice(0,1);

// b Turn the first character to upper case

var upperCaseFirstChar = firstChar.toUpperCase();

// c isolate the rest of the name

var restOfName = name.slice(1,name.length);

// d concactenate the first Char with the rest of the char

var capitalizedName = upperCaseFirstChar + restOfName;

// 3 we use the capitalized version of their name to greet them using an alert

alert("Hello, " + capitalizedName);


// slicing tweets

alert(prompt('Compose your tweet').slice(0,20))
//ex: 3 Name Cases: Store a person's name in a variable, and then print then print that person's name in lowercase
var person_Name = "Sara Fatima";
//in lowercase
console.log("lowercase;", person_Name.toLowerCase());
//Name Cases: Store a person's name in a variable, and then print then print that person's name in lowercase
//in lowercase
console.log("lowercase;", person_Name.toLowerCase());
var personName = "Kisa Zehra";
//in uppercase
console.log("uppercase;", person_Name.toUpperCase());
//in the title case
console.log("title case;", person_Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));

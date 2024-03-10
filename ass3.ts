//ex: 3 Name Cases: Store a person's name in a variable, and then print then print that person's name in lowercase

let person_Name: string = "Sara Fatima";

//in lowercase
console.log("lowercase;", person_Name.toLowerCase());
//Name Cases: Store a person's name in a variable, and then print then print that person's name in lowercase


//in lowercase
console.log("lowercase;", person_Name.toLowerCase());

let personName: string = "Kisa Zehra";

//in uppercase
console.log("uppercase;", person_Name.toUpperCase());

//in the title case
console.log("title case;", person_Name.replace(/\b\w/g, c=> c.toUpperCase()));

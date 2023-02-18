// 2: ---------------------------------------------------------------- 
/* let person: string = "abdul samad";
let message: string = "how are you!";
console.log(`${person} said: ${message}`);
 */

// 3: ----------------------------------------------------------------
/* let Name: string = "abdul samad";
console.log(`lower case : ${Name.toLowerCase()}`);
console.log(`upper case: ${Name.toUpperCase()}`);
let titleCase = (str: string) => {
    let arrayOfWords = str.split(" ");
    let result = arrayOfWords.map( (word: string) => 
        word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
     )
    return(
        result.join(" ")
    )
}
console.log(`title case: ${titleCase(Name)}`); */

// 4: --------------------------------------------------------------
/* let auther: string = "Albert Einstein";
console.log(`${auther} once said, "A person who never made a mistake never tried anything new.".`); */

// 5: --------------------------------------------------------------
/* let message: string = "A person who never made a mistake never tried anything new";
let famous_person: string = "Albert Einstein";
console.log(`${famous_person} once said, "${message}".`); */

// 6: --------------------------------------------------------------
/* let Name: string = "\t abdul samad\t";
console.log(Name);
let strippedName: string = Name.trim();
console.log(strippedName); */

// 7 and 8: ---------------------------------------------------------------
/* console.log(4+4);   // this is addition
console.log(12-4);
console.log(4*2);
console.log(16/2); */

// 9: ---------------------------------------------------------------------
/* let favNo: number = 5;  // this is my favourite no
let message: string = `my favourite number is ${favNo}`;
console.log(message); */

// 11: --------------------------------------------------------------------
/* let names: string[] = ["ahmad", "talha", "anika"];
names.map( (Element: string) => {  // best approch
        console.log(Element)
}) 
console.log(names[0]);
console.log(names[1]);
console.log(names[2]); */

// 12: ---------------------------------------------------------------------
/* let names: string[] = ["ahmad", "talha", "anika"];
let message: string = "Hello!";
names.map((element: string) => {
    console.log(`${message} ${element}`)
}) */

// 13: ----------------------------------------------------------------------
/* let favModeOfTransport: string[] = [
    "Suzuki GS 150 bike",
    "Audi A8",
    "BMW X1000 Supper bike",
    "Yamaha R1 Supper bike",
    "Kawasaki Ninja H2 Supper bike",
    "Mercedees Benzs S-class"
]
favModeOfTransport.map((element: string) => {
    console.log(`I would like to own ${element}.`)
}) */

// 14-15-16-17: -------------------------------------------------------------
/* let guestList: string[] = ["ahmad ali", "talha khan", "haseeb gujjar"];

console.log(`\nMr.${guestList[1]}, not comming tonight for dinner.\n`);

let newGuest: string = "Dubber jafery";

guestList.splice(1,1, newGuest); // replacing talha khan with Dubber jafery

guestList.map((guest: string) => {
    console.log(`hay! ${guest}, I would like you to invite on dinner tonight.\nThank You!`)
})

// more space found on the dining table.
console.log("\nmore space found on the dining table\n")

guestList.splice(0,0, "anika");  // adding guest in the begining of guest list.
//console.log(guestList);
guestList.splice((guestList.length/2),0, "taiyba")  // adding guest in the middle of the guest list.
//console.log(guestList);
guestList.push("tuaha") // adding guest at the end of the guest list.
//console.log(guestList);

console.log("\nyou can invite only two peoples.\n");
for (let index = guestList.length; index >= 0 ; index--) {
    if (index > 2) {
        guestList.pop();
    }
}

guestList.map((guest: string) => {
    console.log(`${guest}! you are still invited.`)
}) */

//18: --------------------------------------------------------------------
/* let palces: string[] = ["NewYork", "Paris", "London", "Dubai", "Makkah"];
console.log("Array in orignal form:");
console.log(palces);
let alphabeticalOrder: string[] = palces.slice().sort();
console.log("Array in alphabetical order :")
console.log(alphabeticalOrder);
console.log("Array in orignal form:");
console.log(palces);
let ReverseAlphabeticalOrder: string[] = palces.slice().sort().reverse();
console.log("Array in reverse alphabetical order:");
console.log(ReverseAlphabeticalOrder);
console.log("Array in orignal form:");
console.log(palces);
console.log("Array in reverse order :");
console.log(palces.reverse());
let reverseOrderAgain: string[] = palces.slice().reverse();
console.log("Array in reverse order again :");
console.log(palces.reverse());
console.log("Orignal array in alphabetical order:");
console.log(palces.sort());
console.log("Orignal array in reverse alphabetical order:");
console.log(palces.sort().reverse()); */

// 19: ----------------------------------------------------------------------
/* let guestsInvited: number = 2;
console.log(`${guestsInvited} guests are invited for the dinner tonight.`); */

// 20: ----------------------------------------------------------------------
//let cities: string[] = ["Rawalpindi", "Islamabad", "Karachi", "Lahore", "Peshawar"];

// 21: ----------------------------------------------------------------------
/* let person: {name: string, age: number, gender: string, cast: string} = {
    name: "Abdul Samad",
    age: 20,
    gender: "male",
    cast: "Mughal"
} */

// 22: ----------------------------------------------------------------------
/* let arr: number[] = [1,2,3,4,5];
console.log(arr[5]);  // this is index error,  because index 7 does not exists in arr.
console.log(arr[4]); // this is valid now */

// 23: -----------------------------------------------------------------------
/* let car: string = "subaru";

console.log(car === "subaru" ? "I predict True" : "I Predict False");
console.log(car === "subaru");

console.log(car === "honda" ? "I predict True" : "I Predict False");
console.log(car === "honda");

console.log(car != "honda" ? "I predict True" : "I Predict False");
console.log(car != "honda");

console.log(car != "subaru" ? "I predict True" : "I Predict False");
console.log(car != "subaru");

console.log(car !== "honda" ? "I predict True" : "I Predict False");
console.log(car !== "honda");

console.log(car !== "subaru" ? "I predict True" : "I Predict False");
console.log(car !== "subaru");

console.log(car.length > 5 ? "I predict True" : "I Predict False");
console.log(car.length > 5);

console.log(car.length < 5 ? "I predict True" : "I Predict False");
console.log(car.length < 5);

console.log(car == "subaru" ? "I predict True" : "I Predict False");
console.log(car == "subaru");

console.log(car == "honda" ? "I predict True" : "I Predict False");
console.log(car == "honda");

console.log(car === car.toLowerCase() ? "I predict True" : "I Predict False");
console.log(car === car.toLowerCase())

console.log(car === car.toUpperCase() ? "I predict True" : "I Predict False");
console.log(car === car.toUpperCase()); */

// 25: --------------------------------------------------------------------
/* let alien_color: string = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
} */

// 26: ---------------------------------------------------------------------
/* let alien_color: string = "red";
if (alien_color == "green") {
    console.log(" the player just earned 5 points for shooting the alien.");
} else {
    console.log("the player just earned 10 points.");
} */

// 27: ---------------------------------------------------------------------
/* let alien_color: string = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
} else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
} else {
    console.log("inappropriate color.");
} */

// 28: ---------------------------------------------------------------------
/* let age: number = 20;
if (age < 2) {
    console.log("the person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("the person is an adult.");
} else {
    console.log("the person is an elder.");
} */

// 29: ----------------------------------------------------------------------
/* let fav_fruits: string[] = ["apple", "mango", "banana"];
let fruite: string = "mango";
let isExist: boolean = fav_fruits.includes(fruite);
if (isExist) {
    console.log(`${fruite} is exists in the list.`)
} else {
    console.log(`${fruite} is not exists in the list.`)
} */

// 30-31: ----------------------------------------------------------------------
/* let users: string[] = ["Ahmad", "Talha", "Admin", "Anika", "Fatima"];
let specialGreatings: string = "would you like to see a status report?";
let normalGreatings: string = "thank you for logging in again.";
if (users.length === 0) {
    console.log("List is empty. We need to find some users!")
} else {
    users.forEach(user => {
        if (user === "Admin") {
            console.log(`Hello ${user}! ${specialGreatings}`);
        } else {
            console.log(`Hello ${user}! ${normalGreatings}`);
        }
    });   
} */

// 32: ----------------------------------------------------------------------
/* let currentUsers: string[] = ["Ahmad", "Talha", "Admin", "Anika", "Fatima"];
let newUsers: string[] = ["Ali", "TALHA", "Hooria", "Anika", "Tabassum"];
let alreadyExists: boolean;
newUsers.forEach(user => {
    for (let i = 0; i < currentUsers.length; i++) {
        if (user === currentUsers[i] || user === currentUsers[i].toUpperCase()) {
            alreadyExists = true;
            break;
        } else {
            alreadyExists = false;
        }
    }
    if (alreadyExists) {
        console.log("the person will need to enter a new username.");
    } else {
        console.log("the username is available.");
    }
}); */

// 33: ----------------------------------------------------------------------
/* let numbers: number[] = [1,2,3,4,5,6,7,8,9];
numbers.forEach(no => {
    if (no === 1) {
        console.log(`${no}st`);
    } else if (no === 2) {
        console.log(`${no}nd`);
    } else if (no === 3) {
        console.log(`${no}rd`);
    } else {
        console.log(`${no}th`);
    }
}); */

// 34: ----------------------------------------------------------------------
/* let pizza: string[] = ["pepperoni", "grilled chicken", "tex max"];
pizza.forEach(element => {
    console.log(element);
});

pizza.forEach(element => {
    console.log(`I like ${element} pizza.`);
});

console.log("I really love pizza!"); */

// 35: ----------------------------------------------------------------------
/* let animal: string[] = ["goat", "dog", "cat"];
let goat: string = "Goat is sacrificeable.";
let dog: string = "dog would make a great pet.";
let cat: string = "cat is considered as a cutest pet";
animal.forEach(element => {
    console.log(element);
});
animal.forEach(element => {
    if (element === "goat") {
        console.log(goat);
    } else if (element === "dog") {
        console.log(dog);
    } else {
        console.log(cat);
    }
});
console.log("Any of these animals would make a great pet!"); */

// 36: ----------------------------------------------------------------------
/* let makeShirt = (size: string, text: string) => {
    console.log(`A \"${size}\" size shirt with a text "${text}" on it.`)
}
makeShirt("small", "Hello World"); */

// 37: ----------------------------------------------------------------------
/* let makeShirt = (size: string = "large", text: string = "I love Typescript") => {
    console.log(`A \"${size}\" size shirt with a text "${text}" on it.`)
}
makeShirt("small", "i love you");
makeShirt("medium");
makeShirt();  */

// 38: ----------------------------------------------------------------------
/* let describeCity = (city: string, countary: string = "Pakistan") => {
    console.log(`${city} is in ${countary}.`);
}
describeCity("Karachi");
describeCity("Islamad");
describeCity("New York", "USA"); */

// 39: ----------------------------------------------------------------------
/* let City_Country = (city: string, country: string) => {
    return(`\"${city}, ${country}\"`)
}
console.log(City_Country("Islamabad", "Pakistan"));
console.log(City_Country("Rawalpindi", "Pakistan"));
console.log(City_Country("Lahore", "Pakistan")); */

// 40: ----------------------------------------------------------------------
/* let make_album = (artistName: string, albumTitle: string, noOfTracks: number = 0) => {
    let album: {Artist: string, AlbumTitle: string, [key: string]: any} = {
        Artist: artistName,
        AlbumTitle: albumTitle
    }
    if (noOfTracks !== 0) {
        album.NoOfTracks = noOfTracks;
    }
    return album;
}
console.log(make_album("Kaka", "Breakup", 5)); */

// 41: ---------------------------------------------------------------------
/* let showMagicians = (arr: string[]) => {
    arr.forEach(element => {
        console.log(element);
    });
} 
let magician: string[] = ["Ahmad", "Talha", "Anika"];
showMagicians(magician); */

// 42-43: ---------------------------------------------------------------------
/* let showMagicians = (arr: string[]) => {
    arr.forEach(element => {
        console.log(element);
    });
}

let makeGreat = (arr: string[]) => {
    for (let index = 0; index < arr.length; index++) {
        arr[index] = `Great ${arr[index]}`; 
    }
    return arr;
}

let magician: string[] = ["Ahmad", "Talha", "Anika"];
showMagicians(magician);
let greatMagician: string[] =  makeGreat(magician);
console.log(greatMagician); */

// 44: ----------------------------------------------------------------------
/* let makeSandwich = (items: string[]) => {
    console.log("Order Summary:");
    console.log("Ingrediants:");
    for (let i = 0; i < items.length; i++) {
        console.log(`${i+1} - ${items[i]}`);
    }
}

let Sandwich1: string[] = ["Chicken", "Brown Bread", "All Sauces", "All Vegitables"];
let Sandwich2: string[] = ["Beaf", "White Bread", "All Sauces except Chilli Souce", "No Vegitables"];
let Sandwich3: string[] = ["Mutton", "Whole Wheat Bread", "No Sour Sauces", "All Vegitables Except Tomato"];

makeSandwich(Sandwich1);
makeSandwich(Sandwich2);
makeSandwich(Sandwich3); */

// 45: ----------------------------------------------------------------------
/* let createCar = (manufacturer: string, modelName: string, ...args: any[]) => {
    let car: {Manufacturer: string, ModelName: string, [key: string]: any} = {
        Manufacturer: manufacturer,
        ModelName: modelName
    }
    for (let i = 0; i < args.length; i+=2) {
        let Key: string = args[i];
        let Value: any = args[i+1];
        car[Key] = Value;
    }
    return car;
}

console.log(createCar("Honda", "Civic", "Color", "Red", "Sunroof", true)); */







//---------------------------------THE END-------------------------------------
//---------------------------ASSIGNMENT COMPLETE-------------------------------
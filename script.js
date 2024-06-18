let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

let containerEle = document.getElementById("myContainer");
containerEle.appendChild(h1Element);

let textChangeEle = document.createElement("button");
textChangeEle.textContent = "Change Heading";
containerEle.appendChild(textChangeEle);

textChangeEle.onclick = function () {
  h1Element.textContent = "4.0 Technologies";
  h1Element.classList.add("heading");
};

let textChangeEle2 = document.createElement("button");
textChangeEle2.textContent = "Remove Styles";
containerEle.appendChild(textChangeEle2);

textChangeEle2.onclick = function () {
  h1Element.textContent = "Web Developer";
  h1Element.classList.remove("heading");
};

let person = {
  name: "Daram",
  age: 28,
  // city: "Bangalore",
  "1name": 30, // we can write Invalid Identifiers with
  "my area": "Vinayaka Nagar",
};

// console.log(person.name); // Accessing the Person Object Property by usung DOT Notation
// console.log(person["name"]); // Accessing the Person Object Property by using Bracket Notation

let data = {
  name: "Daram Guru Harshith",
  age: "10 Months",
  city: "Amaravathi",
  habbits: ["Dancing", "Singing", "Playing"], //Array as Value
  // Object as Value
  car: {
    name: "TATA",
    model: "A6",
    color: "Blue",
  },
};

//Modifying the Object
data.name = "Daram Guraiah";
data["name"] = "Daram Malliswari";
console.log(data.name); // Output: Daram Malliswari

// Adding Object Property
data.gender = "Male";
data["contact"] = 9505544910;
console.log(data);
console.log(data.habbits); // Array Value
console.log(data.habbits[0]); // Array Index getting with DOT notation
console.log(data["habbits"][1]); // Array Index getting with bracket notation
console.log(data["habbits"][2]); // Array Index getting with bracket notation

console.log(data.car.name); // Output: TATA
console.log(data["car"]["model"]); // Output: A6
console.log(data.car["color"]); // Output: Blue

let anotherDivEle = document.getElementById("anotherDivEle");

let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.id = "myCheckbox";

let labelEle = document.createElement("label");
// labelEle.htmlFor = "myCheckbox";
labelEle.setAttribute("for", "myCheckbox"); // By Using setAttribute() method we are setting the attribute value
labelEle.textContent = "Graduated";

anotherDivEle.appendChild(inputEle);
anotherDivEle.appendChild(labelEle);

// let { name, age, city } = data; // This is Object Destructuring
// console.log(name, age, city);
// let text = document.getElementById("webTech");
// let btnEle = document.getElementById("btn");

// let inputText = document.getElementById("inputText");
// let textDisplay = document.getElementById("textDisplay");

// function changeText() {
//   text.textContent = "4.0 Technologies";
//   text.style.color = "blue";
// }

// function signIn() {
//   let res = inputText.value;
//   textDisplay.textContent = "Hi " + res + " verifying your account";
// }

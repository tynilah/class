/*
DO NOT DELETE!! This is your tracker for the project!
Store each input as a variable (there should be two input boxes - one for each answer) [ ]
Store the button as a variable (there should be ONE button) [ ]
Create a click handler [ ]
Use the .value property to store user input [ ]
Add console.log to test if the code is being stored [ ]
Write a conditional statement with else-if to include all 4 possible results [ ]
Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
Write a sentence using string concatenation using the data stored in the user input variables [ ]
Add a next level feature! [ ]
*/
// Select elements
const submit = document.querySelector(".submit");
const input1 = document.querySelector(".persona");
const input2 = document.querySelector(".pet");
const result = document.querySelector(".result");

// Handle button click
submit.onclick = function () {
  const persona = input1.value.trim().toLowerCase(); // Normalize input
  const pet = input2.value.trim().toLowerCase();

  // Conditional logic to determine the result
  if (persona === "nice" && pet === "dog") {
    result.textContent = "You are Rin Okumura! A kind soul who loves dogs.";
  } else if (persona === "nice" && pet === "cat") {
    result.textContent = "You are Shiemi Moriyama! Sweet and loving, with a soft spot for cats.";
  } else if (persona === "rude" && pet === "dog") {
    result.textContent = "You are Yukio Okumura! Strong-willed and assertive, you prefer dogs.";
  } else if (persona === "rude" && pet === "cat") {
    result.textContent = "You are Mephisto Pheles! A sassy personality who adores cats.";
  } else {
    // Handle invalid input
    result.textContent = "Please enter valid answers (Nice/Rude and Dog/Cat).";
  }
};
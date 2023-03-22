window.onload = function() {
  const form = document.querySelector("form"); // the <form> tag
  form.onsubmit = function(event) { // the event handler is onsubmit, creates a function to happen on submission
    event.preventDefault(); // prevents the page from defaulting to refresh/reload upon submission

    let turtleFacts = document.getElementById("turtles"); // id is from div section for turtles
    turtleFacts.setAttribute("class", "hidden"); // variable set to that entire div section, hides it (CSS display for the id .hidden)
    let penguinFacts = document.getElementById("penguins");
    penguinFacts.setAttribute("class", "hidden");
    let elephantFacts = document.getElementById("elephants");
    elephantFacts.setAttribute("class", "hidden");
    let notListed = document.getElementById("notListed")
    notListed.setAttribute("class", "hidden");

    const animal = document.querySelector("input#animal").value; // set value to whatever is written in the submission box (input, id is animal)

    if (animal === "turtles") {  // if the input is "turtles"
      turtleFacts.removeAttribute("class"); // the hidden class will be removed, showing turtle facts
    } else if (animal === "penguins") {  // if the input is "penguins"
      penguinFacts.removeAttribute("class"); // the hidden class will be removed, showing penguin facts
    } else if (animal === "elephants") { // if the input is elephants
      elephantFacts.removeAttribute("class"); // the hidden class will be removed, showing elephant facts
    } else { // if ANYTHING else is written in the input box...
      notListed.removeAttribute("class"); // will show the "notListed" variable
    }
  };
};
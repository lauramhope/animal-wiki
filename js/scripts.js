window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let turtleFacts = document.getElementById("turtles");
    turtleFacts.setAttribute("class", "hidden");
    let penguinFacts = document.getElementById("penguins");
    penguinFacts.setAttribute("class", "hidden");
    let elephantFacts = document.getElementById("elephants");
    elephantFacts.setAttribute("class", "hidden");
    let notListed = document.getElementById("notListed")
    notListed.setAttribute("class", "hidden");

    const animal = document.querySelector("input#animal").value;

    if (animal === "turtles") {  
      turtleFacts.removeAttribute("class");
    } else if (animal === "penguins") { 
      penguinFacts.removeAttribute("class");
    } else if (animal === "elephants") {
      elephantFacts.removeAttribute("class");
    } else {
      notListed.removeAttribute("class");
    }
  };
};
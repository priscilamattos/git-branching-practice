const drinks = {
  coffee: [
    {
      title: "Early Bird",
      price: "$$",
    },
    {
      title: "Strange Love",
      price: "$$",
    },
    {
      title: "Fahrenheit",
      price: "$$",
    },
    {
      title: "Voodoo Child",
      price: "$$",
    },
    {
      title: "Dark Horse",
      price: "$",
    },
    {
      title: "Cops",
      price: "$",
    },
    {
      title: "i deal",
      price: "$",
    },
    {
      title: "Jimmy's",
      price: "$",
    },
  ],
  tea: [
    {
      title: "Icha",
      price: "$$",
    },
    {
      title: "Ten Ren's",
      price: "$$",
    },
    {
      title: "David's Tea",
      price: "$$",
    },
    {
      title: "Bubble Lee",
      price: "$$",
    },
    {
      title: "Chattime",
      price: "$",
    },
    {
      title: "Tealish",
      price: "$",
    },
    {
      title: "Kung Fu",
      price: "$",
    },
    {
      title: "Gong Cha",
      price: "$",
    },
  ],
};

// Our code goes here:

//Get data from our user
//-query selector to store our form element
//-access and stores the user coices, (beverage value, price value)
//-all of this code will go into the event listener (the callback function we give addEventListener)
//Use the data from the user to get a random suggestion of a location to visit
//-we are going to need a random item generator function
//-we are going to need different options depending on the user's choice
//Display our results
//-query selector to display the results
//-append/change it's content to reflect our suggestion! (change the text)

const formEl = document.querySelector("form");

function randomchoice(optionsArray) {
  const index = Math.floor(Math.random() * optionsArray.length);
  return optionsArray[index];
}

formEl.addEventListener("submit", function (event) {
  //all the logic
  event.preventDefault();

  if (
    !document.querySelector("input[name=beverage]:checked") ||
    !document.querySelector("input[name=price]:checked")
  ) {
    alert("Please select options");
    return;
  }

  const drinkType = document.querySelector(
    "input[name=beverage]:checked"
  ).value;

  const price = document.querySelector("input[name=price]:checked").value;

  const drinkChoice = drinks[drinkType];

  //create an array
  const options = [];

  //manual array filetering, loop through either coffee or tea array

  for (let i = 0; i < drinkChoice.length; i++) {
    //store drink at current loop iteration
    const currentDrink = drinkChoice[i];

    //check if the current drink's price matches use specified price
    //if it does, put it into our drinks array
    if (currentDrink.price === price) {
      options.push(currentDrink);
    }
  }
  //get a random object in our array and stores in a variable
  const suggestedPlaceToVisit = randomchoice(options);

  const results = document.querySelector(".results");
  results.innerHTML = `<h2 class="choice">${suggestedPlaceToVisit.title}</h2>`;

  console.log(options);
});

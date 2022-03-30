// listen for the form being submitted
// when the form has been submitted:
//get the user input (the task) from the taxt input
//display the task as a list item on the page in the ul
//when the user clicks a checkbox. the icon will become checked
//if the user clicks the checkbox again, the icon will become inchecked

//storing the form element in a variable
const formElement = document.querySelector("form");
const ulElement = document.querySelector("ul");

// add the event listener to the form element
formElement.addEventListener("submit", function (event) {
  //when the form is submitted, this code will run

  event.preventDefault(); // prevent the refresh

  //make a variable that stores the input element
  const inputElement = document.querySelector("input");

  // make a variable to stores the user input (their to-do task)
  const task = inputElement.value;

  //check if the input element value is not an empty string
  if (task) {
    //create a list item element
    const listItem = document.createElement("li");
    //<li><i>task</i></li> add the icon to the list element's innerHTML
    listItem.innerHTML = '<i class="far fa-square"></li>';

    //create a p that will hold the user's task
    const paragraph = document.createElement("p");
    //update the p textContent to be the user's task
    paragraph.textContent = task;
    //append the p to the llist item as a child
    listItem.appendChild(paragraph);
    console.log(listItem);
    //add the list item to the ul on the page
    document.querySelector("ul").appendChild(listItem);
    // clear the inputElement value by making it an empty string
    inputElement.value = " ";
  }
});

//listen for the user to click the icons
//code to change the checkboxes
//changhe icon class
ulElement.addEventListener("click", function (event) {
  //when the user clicks on the icon, change the class
  //   console.log(event.target);
  //if the event.target.tagname is I, run the code
  if (event.target.tagName === "I") {
    console.log("I clicked an icon!");
    updateToDo(event.target);
  }
});

//a function to update the checkbox
function updateToDo(iconElement) {
  //get the icon element and update its class
  iconElement.classList.toggle("fa-square");
  iconElement.classList.toggle("fa-check-square");
  iconElement.parentElement.classList.toggle("text-muted");
}

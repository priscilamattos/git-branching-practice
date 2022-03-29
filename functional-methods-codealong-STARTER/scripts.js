// We've written some code you'll need for this app. Read through to understand what you're starting with, then work through the commented steps!

// This is the store's inventory data. Normally we would be grabbing data from elsewhere (ie. an external api), but here we will skip that step and assume this is data we've fetched:
const totalInventory = [
  {
    title: "Bowie Tee",
    url: "images/bowie.jpg",
    price: 19.99,
    stock: 4,
  },
  {
    title: "Don't Know Tee",
    url: "images/dontevenknow.jpg",
    price: 22.5,
    stock: 8,
  },
  {
    title: "Doughnut Jean Jacket",
    url: "images/doughnut.jpg",
    price: 59.0,
    stock: 5,
  },
  {
    title: "Journey Tee",
    url: "images/journey.jpg",
    price: 22.99,
    stock: 6,
  },
  {
    title: "Skeleton Jean Jacket",
    url: "images/someurl.jpg",
    price: 30.0,
    stock: 0,
  },
  {
    title: "Skeleton Hand Tee",
    url: "images/skeleton.jpg",
    price: 30.0,
    stock: 10,
  },
  {
    title: "Juno Hoodie",
    price: 50.0,
    stock: 4,
  },
];

// We create a namespace object to hold our app:
const coolStore = {};

// An object that allows us to organize information that will be displayed conditionally depending on what currency the user selects:
coolStore.currencies = {
  usd: {
    exchange: 1,
    symbol: `$`,
    displayName: `USD`,
    altText: `the US flag`,
    flag: `images/USD-flag.png`,
  },
  cad: {
    exchange: 1.28,
    symbol: `$`,
    displayName: `CAD`,
    altText: `the Canadian flag`,
    flag: `images/CAD-flag.png`,
  },
  gbp: {
    exchange: 0.76,
    symbol: `£`,
    displayName: `GBP`,
    altText: `the UK flag`,
    flag: `images/GBP-flag.png`,
  },
};

// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!
coolStore.init = function () {
  coolStore.checkInventory();
  coolStore.currencyChanger();
};

// STEP TWO: Write a function that will filter the inventory, so that we will display only items which are both in stock and have images.
coolStore.checkInventory = function () {
  coolStore.currentInventory = totalInventory.filter(function (item) {
    return item.stock > 0 && item.url !== undefined;
  });

  coolStore.displayItems(coolStore.currencies.usd);
};

// STEP THREE: Write a function that displays the available inventory on the page, in the correct currency.
// Hint: Consider what kind of information this function needs (ie. which parameters it should take) to properly display all of our information.
// For now, display items on the page by passing in USD as the default currency.
coolStore.displayItems = function (chosenCurrency) {
  const inventoryElement = document.querySelector(".inventory");
  inventoryElement.innerHTML = "";

  coolStore.currentInventory.forEach(function (individualItem) {
    const newListItem = document.createElement("li");

    newListItem.innerHTML = `
      <h2>${individualItem.title}</h2>
      <img src="./${individualItem.url}" alt="A model wearing the ${
      individualItem.title
    }">
      <p>${chosenCurrency.symbol}${(
      individualItem.price * chosenCurrency.exchange
    ).toFixed(2)}</p>
    `;

    inventoryElement.appendChild(newListItem);
  });
};

// STEP FOUR: Attach an event listener that will notice when a user clicks on a currency button, finds out which currency they have selected, and calls our display items method again. Don't forget to update the flag at the top right, too!
coolStore.currencyChanger = function () {
  const buttons = document.querySelectorAll("button");
  const flagImage = document.querySelector("#flag");
  const currency = document.querySelector("#currency");

  buttons.forEach(function (individualButton) {
    individualButton.addEventListener("click", function () {
      const selectedCurrency = this.id;

      coolStore.displayItems(coolStore.currencies[selectedCurrency]);

      flagImage.src = coolStore.currencies[selectedCurrency].flag;
      flagImage.alt = coolStore.currencies[selectedCurrency].altText;

      currency.textContent = `${coolStore.currencies[selectedCurrency].symbol}${coolStore.currencies[selectedCurrency].displayName}`;
    });
  });
};

// Calling coolStore init method to kick things off!
coolStore.init();

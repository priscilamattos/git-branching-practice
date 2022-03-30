// docs - https://unsplash.com/documentation#list-photos
// getting API key - https://unsplash.com/documentation#creating-a-developer-account

// create app object

const galleryApp = {};

// save relevant API information
galleryApp.apiUrl = "https://api.unsplash.com/photos";
galleryApp.apiKey = "Qi9SDpY5MEDJMQvbKtLUlhrGYl4F5a_zSjRWn4e01z8";

// create a method (AKA function on the app object) which requests information from the API
// logs it to the console
galleryApp.getPhotos = () => {
  //use the URL constructor to specify the parameters we wish to include in our API endpoint (AKA in the request we are making to the API)
  const url = new URL(galleryApp.apiUrl);
  url.search = new URLSearchParams({
    // pass in our API key as a parameter
    client_id: galleryApp.apiKey
  })

  // using the fetch API to make a request to the Unsplash API photos endpoint
  // pass in new URL featuring params provided by the URLSearchParams constructor
  fetch(url)
    .then((response) => {
      // parse this response into JSON
      // return JSON response so that it can be used in the next function
      return response.json();
    })
    //parse the JSON Promise response and log out readable data (AKA data in JSON format)
    .then((jsonResponse) => {
      console.log(jsonResponse);
      //pass the data into the displayPhotos method
      //AKA call the displayPhotos within getPhotos
      galleryApp.displayPhotos(jsonResponse);
    })
}

//define a method to display photos on the front-end
galleryApp.displayPhotos = (dataFromApi) => {
  //query the document and find the first ul
  const ul = document.querySelector('ul');
  //take the data from the API and iterate through it
  //for EACH object in the API we will:
  dataFromApi.forEach((datum) => {
    //create list elements
    const listElement = document.createElement('li');
    //create image elements
    const image = document.createElement('img');
    //add content for img alt and src attributes
    image.src = datum.urls.regular;
    image.alt = datum.alt_description;
    //append the image element to its parent li
    listElement.appendChild(image);
    //append the li to the gallery ul
    ul.appendChild(listElement);
  })
}

// create an initialization method
galleryApp.init = () => {
  //calling the method which makes the request to the API
  galleryApp.getPhotos();
}

// call the init method to kickstart our app
galleryApp.init();
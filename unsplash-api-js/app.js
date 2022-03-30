//console.log('this is coming from my app.js)

// Get our data
// - get the link to our api and make a fetch call

//Display our data
//-  create a li, add in an image tah
//- image src information from our api

//we want our client_id=YOUR_ACCESS_KEY
//api key = gnGzv2__h3EoOd5BTpb7fJbokapg_EYgB4xc1V1L73E
//https://api.unsplash.com/photos/?client_id=gnGzv2__h3EoOd5BTpb7fJbokapg_EYgB4xc1V1L73E

const galleryApp = {};
galleryApp.apiURL = "https://api.unsplash.com/photos";
galleryApp.apiKey = "gnGzv2__h3EoOd5BTpb7fJbokapg_EYgB4xc1V1L73E";
//define the method to make the request to the api
galleryApp.getPhotos = () => {
  const url = new URL(galleryApp.apiURL);
  url.search = new URLSearchParams({
    client_id: galleryApp.apiKey,
  });

  //create a fetch request
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      //call our displayData method, when we actually have some data!
      galleryApp.displayPhotos(jsonResponse);
    });
};
galleryApp.displayPhotos = (dataFromApi) => {
  //display code
  console.log(dataFromApi);

  //query the document to find the ul element
  const ul = document.querySelector("ul");

  //data from api is an array, we want to loop through and create li and img element for each image
  dataFromApi.forEach((imageObject) => {
    const listElement = document.createElement("li");
    const image = document.createElement("img");

    image.src = imageObject.urls.regular;
    //if we want, we extend this, and do a null check, and have some default tet the we assign
    //if the data is null
    image.alt = imageObject.alt_description;

    //append the image element to the parent li
    listElement.appendChild(image);
    //append the li to the gallery ul
    ul.appendChild(listElement);
  });
};

galleryApp.init = () => {
  //all our code here
  console.log("my init function");
  galleryApp.getPhotos();
};
galleryApp.init();

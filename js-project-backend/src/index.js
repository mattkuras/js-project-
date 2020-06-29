// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/trips`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

document.addEventListener("DOMContentLoaded",function(){
  // call our new function in there 
  API.addTrips()
  document.getElementById('trip-form').addEventListener('submit', API.createTrip)
  // add the form event listener to the domContentLoaded
 // document.getElementById('form').addEventListener('submit', API.addHog)
})

// add event listeners to our h2s on click, we'll need to add an ID or something
// turn our h2s into a link to be able to click on them
// add fetch in API class to be able to fetch the individual pages
// add method in Hog class to clear the existing page and load the show page
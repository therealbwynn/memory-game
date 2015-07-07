// create an immediate instantiated function, thus protecting the content
//(function() {
  // create an object with an array to help us determine the array length,
  // in practical application, this will be how we determine the number of
  // navigation list items to create, which can then get the pertinent information
  // to populate
  var collection = {
    albums: ['one', 'two', 'three']
  };

  // create an anon function to get length of albums
  var albumLength = function() {
    return collection.albums.length;
  };

  // function to build the list items -- in this case it's a p element, but
  // it's demonstrating proof of concept
  var buildIt = function() {
    for (var i = 0; i < albumLength(); i++) {
      // create element
      var placement = document.getElementById("placement");
          elem = document.createElement("p");

      // append content into its container
      placement.appendChild(elem);

      // append content based on the collection.albums' array content.
      elem.innerHTML = collection.albums[i];
    }
  };

  // instantiate the buildIt function
  buildIt();

//}());

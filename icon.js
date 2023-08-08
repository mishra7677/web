function myFunction() {
  // Get a reference to the #my-links element
  var linksDiv = document.getElementById("my-links");

  // Check the current display style property of the links element
  if (linksDiv.style.display === "block") {
    // If it's currently displayed, hide the links
    linksDiv.style.display = "none";
  } else {
    // If it's currently hidden, display the links
    linksDiv.style.display = "block";
  }
}

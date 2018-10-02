// Listen for form submit formid "myform"
document.getElementById("myForm").addEventListener("submit", saveBookmark);

/// SAVE BOOKMARK
function saveBookmark(e) {
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  // LOCAL storage only stores STRINGS
  // Local storage test
  localStorage.setItem("test", "Hello World");
  console.log(localStorage.getItem("test"));

  //   console.log(bookmark);
  // prevent form from submitting
  e.preventDefault();
}

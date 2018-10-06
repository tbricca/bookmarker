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

  //   localStorage.setItem("test", "Hello World");
  //   console.log(localStorage.getItem("test"));
  //   localStorage.removeItem("test");
  //   console.log(localStorage.getItem("test"));

  // TEST if bookmarks is null
  if (localStorage.getItem("bookmarks") === null) {
    // Init array if bookmark does not already exist
    var bookmarks = [];
    // console.log('here')

    bookmarks.push(bookmark);
    // Set to LocalStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // prevent form from submitting
  e.preventDefault();
}

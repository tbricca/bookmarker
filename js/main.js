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
  } else {
    // Get bookmarks from local storage to check if it already exists
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // prevent form from submitting
  e.preventDefault();
}

function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  // Get Output id

  var bookmarksResults = document.getElementById("bookmarksResults");
  // Build Output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    /// Append to it = +=
    bookmarksResults.innerHTML += name;
  }
}

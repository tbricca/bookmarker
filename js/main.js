// Listen for form submit formid "myform"
document.getElementById("myForm").addEventListener("submit", saveBookmark);

/// SAVE BOOKMARK
function saveBookmark(e) {
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }
  var bookmark = {
    name: siteName,
    url: siteUrl
  };

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

  // CLEAR FORM
  document.getElementById("myForm").reset();

  // Re-Fetch Bookmarks
  fetchBookmarks();
  // prevent form from submitting
  e.preventDefault();
}

// DELETE BOOKMARK -----------
function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  //Loop through bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to LocalStorage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Re-Fetch Bookmarks
  fetchBookmarks();
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
    bookmarksResults.innerHTML +=
      '<div class="card bg-light text-dark car-body">' +
      "<h3>" +
      name +
      ' <a class="btn btn-default btn-align" target="_blank" href="' +
      url +
      '">Visit</a> ' +
      "<a onclick= \"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger btn-align" href="#">Delete</a>';
    "</h3>" + "</div>";
  }
}

function validateForm(siteName, siteUrl) {
  // Prevent from submitting a blank form
  if (!siteName || !siteUrl) {
    alert("Please fill in the form, ya Wise Guy");
    return false;
  }
  // Expression for the format of a URL
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please use a valid URL, I believe in you!!!");
    return false;
  }

  return true;
}

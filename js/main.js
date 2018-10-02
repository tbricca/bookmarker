// Listen for form submit formid "myform"
document.getElementById("myForm").addEventListener("submit", saveBookmark);

/// SAVE BOOKMARK
function saveBookmark(e) {
  var siteName = document.getElementById("siteName");
  console.log(siteName);
  // prevent form from submitting
  e.preventDefault();
}

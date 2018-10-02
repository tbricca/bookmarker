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

  console.log(bookmark);
  // prevent form from submitting
  e.preventDefault();
}

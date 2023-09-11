$(document).ready(function () {
  // Load blog articles when the page loads
  loadBlogArticles();

  function loadBlogArticles() {
    $.ajax({
      url: "../blog-data.html", // Replace with the URL of your HTML data file
      type: "GET",
      dataType: "html",
      success: function (data) {
        // Update the #overview section with the loaded content
        $("#overview").html(data);
      },
      error: function (error) {
        console.error("Error loading blog articles:", error);
      },
    });
  }
});

$(document).ready(function () {
  // Handle form submission for adding a new blog article

  $("#blogForm").submit(function (e) {
    e.preventDefault();
    const formData = $(this).serialize(); // Serialize the form data

    $.ajax({
      url: "../submit-article.php", // Replace with the URL where you handle form submission on the server
      type: "POST", // Use POST method to send data
      data: formData,
      dataType: "json", // You can adjust the data type as needed
      success: function (response) {
        if (response.success) {
          // Clear the form and display a success message
          $("#blogForm")[0].reset();
          alert("Blog article added successfully!");
        } else {
          alert("Failed to add the blog article. Please try again.");
        }
      },
      error: function (error) {
        console.error("Error submitting blog article:", error);
        alert("An error occurred. Please try again later.");
      },
    });
  });
});

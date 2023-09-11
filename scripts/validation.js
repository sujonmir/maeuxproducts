document.addEventListener("DOMContentLoaded", function () {
  const blogForm = document.getElementById("blogForm");

  blogForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate title
    const titleInput = document.getElementById("title");
    const titleValue = titleInput.value.trim();
    if (titleValue === "") {
      alert("Please enter a title.");
      return;
    }

    // Validate author
    const authorInput = document.getElementById("author");
    const authorValue = authorInput.value.trim();
    if (authorValue === "") {
      alert("Please enter an author name.");
      return;
    }

    // Validate publication date
    const publicationDateInput = document.getElementById("publicationDate");
    const publicationDateValue = publicationDateInput.value.trim();
    if (publicationDateValue === "") {
      alert("Please select a publication date.");
      return;
    }

    // Validate content
    const contentTextarea = document.getElementById("content");
    const contentValue = contentTextarea.value.trim();
    if (contentValue === "") {
      alert("Please enter the article content.");
      return;
    }

    // If all fields are valid, you can proceed with submitting the form or AJAX request
    // Here, you might want to submit the form using AJAX to add the article to your database

    // Reset the form
    blogForm.reset();
  });
});

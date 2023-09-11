$(document).ready(function () {
  // Animation for the "Back to Overview" link
  $("#overview")
    .on("mouseenter", "a", function () {
      $(this).animate(
        {
          fontSize: "20px", // Increase font size on hover
          fontWeight: "bold", // Make the text bold
        },
        300
      );
    })
    .on("mouseleave", "a", function () {
      $(this).animate(
        {
          fontSize: "16px", // Restore original font size
          fontWeight: "normal", // Restore normal font weight
        },
        300
      );
    });

  // You can add more animations as needed for other elements on your pages.
});

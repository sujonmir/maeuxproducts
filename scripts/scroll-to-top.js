$(document).ready(function () {
  // Show the scroll-to-top button when the user scrolls down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  // Scroll to the top of the page when the button is clicked
  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

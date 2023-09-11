<?php
// Handle the POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $title = $_POST["title"];
    $author = $_POST["author"];
    $publicationDate = $_POST["publicationDate"];
    $content = $_POST["content"];

    // Perform database insertion (replace with your database code)
    // Example: $result = insertArticle($title, $author, $publicationDate, $content);

    if ($result) {
        // Success response
        $response = array("success" => true);
        echo json_encode($response);
    } else {
        // Error response
        $response = array("success" => false);
        echo json_encode($response);
    }
} else {
    // Handle non-POST requests if necessary
    http_response_code(405); // Method Not Allowed
}
?>

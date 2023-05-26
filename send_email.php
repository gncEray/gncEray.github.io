<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Get the form fields
   $name = $_POST["contactName"];
   $email = $_POST["contactEmail"];
   $subject = $_POST["contactSubject"];
   $message = $_POST["contactMessage"];

   // Create the email content
   $emailContent = "Name: $name\n";
   $emailContent .= "Email: $email\n";
   $emailContent .= "Subject: $subject\n\n";
   $emailContent .= "Message:\n$message";

   // Set up the email headers
   $headers = "From: $email\r\n";
   $headers .= "Reply-To: $email\r\n";

   // Send the email
   $to = "eraygenconline@gmail.com"; 
   $subject = "New Contact Form Submission";
   if (mail($to, $subject, $emailContent, $headers)) {
      echo "Email sent successfully!";
   } else {
      echo "Failed to send email.";
   }
}
?>

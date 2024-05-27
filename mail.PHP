<?php
header("location: ../contact.html");

$name = isset($_POST['name']) ? $_POST['name'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$subject = isset($_POST['subject']) ? $_POST['subject'] : "";
$message = isset($_POST['message']) ? $_POST['message'] : "";

$email_message = "
Name: ".$name."
Email: ".$email."
Phone: ".$phone."
Subject: ".$subject."
Message: ".$message."
";

mail("name@youremail.com", "New Message", $email_message);
?>

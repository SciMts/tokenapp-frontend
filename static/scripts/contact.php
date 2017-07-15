<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactphone'])) {
	$to = 'your@email.com'; // Your e-mail address here.
	$body = "Name: {$_POST['contactname']}\n\nEmail: {$_POST['contactemail']}\n\nPhone: {$_POST['contactphone']}\n\n{$_POST['contactmessage']}";
	mail($to, "Booking from yoursite.com", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>
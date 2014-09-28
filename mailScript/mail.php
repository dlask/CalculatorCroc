<?php

function spamcheck($field) {
  // Sanitize e-mail address
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
  // Validate e-mail address
  if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
    return TRUE;
  } else {
    return FALSE;
  }
}


if($_POST['validate'] == 'true'){
    
    $mailcheck = spamcheck(htmlspecialchars($_POST["yourEmail"]));
    if ($mailcheck==FALSE) {
      echo "Invalid Email.";
    } 
    else {
      $from = htmlspecialchars($_POST["yourEmail"]); // sender
      $name = htmlspecialchars($_POST["name"]);
      $subject = htmlspecialchars($_POST["subject"]);
      $message = htmlspecialchars($_POST["message"]);
      // message lines should not exceed 70 characters (PHP rule), so wrap it
      $message = wordwrap($message, 70);
      // send mail
      mail("contact@calculatorcroc.com",$subject,$message,"From: $from\n $name\n");
      echo "<p id='status'>Thank you for sending us feedback!</p>";
    }
    
}
?>
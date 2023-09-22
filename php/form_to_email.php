<?php
header('Access-Control-Allow-Origin: *');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $surname = $_POST['surname']
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject']
  $message = $_POST['message'];

  $cabeceras = "From: $email\r\n";
  $cabeceras .= "Reply-To: $email\r\n";
  $cabeceras .= "X-Mailer: HP/" . phpversion();

  if(mail($visitor_email, $subject, $message, $cabeceras)){
    echo "El correo se ha enviado con exito";
  }
  else {
    echo "Error al enviar el correo";
  }
}

?>
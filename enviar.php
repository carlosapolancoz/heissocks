<?php
$asunto = $_POST['asuntos'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$carta = "<h3 style='text-align:center;'>Mensaje para cotización de calcetines Heiss</h3>";
$carta .= "<strong>De:</strong> $nombre <br>";
$carta .= "<strong>Correo:</strong> $correo <br>";
$carta .= "<strong>Telefono:</strong> $telefono <br>";
$carta .= "<strong>Mensaje:</strong> $mensaje";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.supremecluster.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ventasonline@textilviso.com';                     //SMTP username
    $mail->Password   = 'onLineTVISO*159';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($correo ,'Heissocks.com');
    $mail->addAddress('ventasonline@textilviso.com',);     //Add a recipient
    // PARA AGREGAR MAS A LOS QUE SE LES ENVIA EL CORRERO
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // //Attachments PARA ARCHIVOS Y VIDEOS
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $asunto;
    $mail->Body    = $carta;
    $mail->AltBody = 'Correo de prueba Cotizar Heiss';
    // PARA RECONOCER TILDES Y OTROS SIMBOLOS
    $mail->CharSet = 'UTF-8';

    $mail->send();
    echo '<Script> alert("EL MENSAJE PARA LA COTIZACIÓN SE ENVIO CORRECTAMENTE");    
    </Script>';
    echo '<Script>location.href = "javascript:window.history.back();"</Script>';
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
    echo '<Script> alert("NO SE PUDO ENVIAR EL MENSAJE, VERIFIQUE QUE LOS CAMPOS"); 
    location.href = "javascript:window.history.back();"</Script>';
}
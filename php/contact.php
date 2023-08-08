<?php
// Récupérer les données du formulaire
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Valider les données (effectuez les validations appropriées selon vos besoins)

// Envoyer l'email de contact (exemple basique)
$to = 'vanelzoltan@gmail.com';
$subject = 'Nouveau message de contact';
$body = "Nom : $name\n\nEmail : $email\n\nMessage :\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  $response = array('message' => 'Votre message a été envoyé avec succès.');
} else {
  $response = array('message' => 'Une erreur s\'est produite. Veuillez réessayer.');
}

// Renvoyer la réponse au format JSON
header('Content-Type: application/json');
echo json_encode($response);
?>

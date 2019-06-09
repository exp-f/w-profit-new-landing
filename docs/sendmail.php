<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './mailer/Exception.php';
require './mailer/PHPMailer.php';
require './mailer/SMTP.php';

if (empty($_POST)) exit('no data');

if (!(array_key_exists('first_name', $_POST)
    && array_key_exists('last_name', $_POST)
    && array_key_exists('email', $_POST)
    && array_key_exists('company_name', $_POST)
    && array_key_exists('industry_country', $_POST)
    && array_key_exists('budget', $_POST)
    && array_key_exists('comment', $_POST)
)) {
    http_response_code(500);
    exit('missing keys');
}

$mailer = new PHPMailer(true);
try {
    $mailer->SMTPDebug = 2;
    $mailer->isSMTP();
    $mailer->CharSet = 'UTF-8';
    $mailer->Host = 'smtp.gmail.com';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'noreply@w-profit.com';
    $mailer->Password = 'RVJ2rJevHsWL';
    $mailer->SMTPSecure = 'tls';
    $mailer->Port = 587;
    echo $mailer->Password;
    //Recipients
    $mailer->setFrom('noreply@w-profit.com', 'Noreply Noreply');
    $mailer->addAddress('hello@w-profit.com');
    // Content
    $mailer->isHTML(true);
    $mailer->Subject = 'Новый запрос демо';
    $mailer->Body = "<div><b>Имя:</b> {$_POST['first_name']} {$_POST['last_name']}</div>
<div><b>Почта:</b> <a href='mailto:{$_POST["email"]}'>{$_POST["email"]}</a></div>
<div><b>Название компании:</b> {$_POST["company_name"]}</div>
<div><b>Сфера деятельности и страна:</b> {$_POST["industry_country"]}</div>
<div><b>Бюджет:</b> {$_POST["budget"]}$</div>
<div><b>Дополнительно:</b> {$_POST["comment"]}</div>";
    $mailer->AltBody = "Имя: {$_POST["first_name"]} {$_POST["last_name"]}\nПочта: {$_POST["email"]}\nНазвание компании: {$_POST["company_name"]}\nСфера деятельности и страна:{$_POST["industry_country"]}\nБюджет: {$_POST["budget"]}$\nДополнительно: {$_POST["comment"]}";

    $mailer->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    http_response_code(500);
    echo "Message could not be sent. Mailer Error: {$mailer->ErrorInfo}";
}
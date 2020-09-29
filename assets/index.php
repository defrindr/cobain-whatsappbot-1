<?php
require __DIR__ . '/../vendor/autoload.php';

use GDText\Box;
use GDText\Color;

header("Content-Type: application/json; charset=UTF-8");

// header('Content-type: image/jpeg');
// header('Content-type: json');

function get_image_url()
{
    $html = request('https://source.unsplash.com/random/480x720');
    $link = explode('"', explode('href="', $html)[1])[0];
    $link = str_replace('&amp;', '&', $link);
    $raw = request($link);
    // delete exist image
    system("rm image.png");
    // save new image
    $fp = fopen('image.png', 'x');
    fwrite($fp, $raw);
    fclose($fp);
}

function request($url)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($curl);
    curl_close($curl);

    return $response;
}

get_image_url();

$text = isset($_GET['text']) ? $_GET['text'] : "Hidup berawal dari mimpi";
$author = isset($_GET['author']) ? $_GET['author'] : "key bot";

$im = @imagecreatefromjpeg('image.png');
$overlay = @imagecreatefrompng('overlay.png');

imagecopymerge($im, $overlay, 0, 0, 0, 0, 480, 720, 70);

$textbox = new Box($im);
$textbox->setFontSize(25);
$textbox->setFontFace('font/Astronauta Script.ttf');
$textbox->setFontColor(new Color(255, 255, 255)); // white
$textbox->setBox(20, 0, imagesx($im)-40, imagesy($im));
$textbox->setTextAlign('center', 'center');

$textbox->draw($text);

$box = new Box($im);
$box->setFontSize(30);
$box->setFontFace('font/HelloKetta-d99oX.ttf');
$box->setFontColor(new Color(190, 190, 190));
$box->setBox(0, -20, imagesx($im), imagesy($im));
$box->setTextAlign('center', 'bottom');

$box->draw($author);

$filename = "image/" . time() . "_" . time() . ".png";

imagepng($im, $filename);
imagedestroy($im);

$response = (object) [];

$response->link = "./assets/$filename";
$response->success = true;

echo json_encode($response);

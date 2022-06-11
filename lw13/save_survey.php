<?php

header('Content-type: application/json');

$inputJSON = file_get_contents('php://input'); // забираем данные
$input = json_decode($inputJSON, true); //

$email = strtolower($input['email']);
$name = $input['first_name'];
$activity = $input['activity'];
$agreement = $input['agreement'];

if ($email === '') {
    $response = ['status' => 500, 'message' => 'Invalid email'];
    echo json_encode($response);
    exit;
}

if ($name === '') {
    $response = ['status' => 500, 'message' => 'Invalid name'];
    echo json_encode($response);
    exit;
}

if ($name === 'Слава') {
    $response = ['status' => 500, 'message' => 'something error'];
    echo json_encode($response); 
    exit;
}



$pathFile = 'data/' . $email . '.txt';
$content = 'Ваше имя: ' . $name . PHP_EOL . // универсальный переход на новую строку
    'Email: ' . $email . PHP_EOL . 
    'Деятельность: ' . $activity . PHP_EOL . 
    'Согласие на рассылку: ' . $agreement . PHP_EOL;
file_put_contents($pathFile, $content); //загружаем по пути 

$response = ['status' => 200, 'message' => 'OK'];
echo json_encode($response);

// 1 задание
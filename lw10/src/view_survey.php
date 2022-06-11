<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset='utf-8'>
    <link rel='stylesheet' type='text/css' href='../css/style.css'>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Roboto+Condensed&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="survey-request">
    <?php

    function getPostParameter(string $name): ?string
    {
        return isset($_POST[$name]) ? $_POST[$name] : null;
    }

    $email = getPostParameter('email');

    if (empty($email))
    {
        echo 'Введите email';
      exit();
    }

    $file = '../data/' . $email . '.txt';
    if (file_exists($file)) 
    {
        $tempArray = file($file);
        for ($count = 0; $count < 3; $count++)
        {
            echo "<div> $tempArray[$count] </div>"; 
        }
    }
    else
    {
        echo 'Данного файла не существует';
    }
    ?>
    </div>
  </body>
</html>
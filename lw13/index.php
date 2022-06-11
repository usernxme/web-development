<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset='UTF-8'>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="lw13">
	<title>Don't do it</title>
	<link rel='stylesheet' type='text/css' href='css/min-style.css'>
        <link rel="preconnect" href="https://fonts.googleapis.com/%22%3E">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Roboto+Condensed&display=swap" rel="stylesheet">
</head>
<body>
	<div class="popup btnoff"></div>
	<?php include 'form.php'; ?>

	<div class="header">
		<div class="header__logo"></div>
		<div class="header-right-content">
			<nav class="header__navigation">
				<a class="navigation-text" href="#">Что будет на курсе?</a>
				<a class="navigation-text" href="#">Вопросы</a>
				<a class="navigation-text" href="#">Автор</a>
			</nav>		
			<a class="button-registration btn" href="#">
				<p class="header__button-registration">Записаться на курс</p> 
			</a>
		</div>		
	</div>

	<div class="main">
		<div class="main__front-page">
			<div class="front-page__info">
				<p class="info__headline">Не <span class="text_extra">делай</span> это</p>
				<p class="info__about">Онлайн-курс для творческих людей, о том, как управлять своим временем</p>
				<a class="button-registration btn" href="#">
					<p class="info__button-registration">Записаться на курс</p>
				</a>
			</div>
			<img class="front-page__image" src="img/busy.webp" alt="Занятой" loading="auto" width="762px" height="637px">
		</div>

		<div class="main__short-description">
			<div class="short-description__panel">
				<div class="panel__time">
					<div class="time__image"></div>
					<p class="time__text">Для тех, у кого слишком много идей и слишком мало времени</p>					
				</div>
				<div class="panel__notebook">
					<div class="notebook__image"></div>
					<p class="notebook__text">Метод «списка не дел», который позволит успевать и реализовывать</p>					
				</div>
				<div class="panel__target">
					<div class="target__image"></div>
					<p class="target__text">Курс научит творческих людей сосредоточиваться</p>					
				</div>
			</div>
		</div>

		<div class="main__deadline">
			<div class="deadline__fail">
				<img class="fail__image" src="img/finances.webp" alt="Финансы" loading="auto" width="538px" height="476px">
				<div class="fail__paragrph">
					<p class="fail__headline deadline-headline">Ты не успеешь</p>
					<p class="fail__text deadline-text">Всех творческих людей объединяет одна проблема - отсутствие времени на реализацию идей. Как прибавить суткам часы, рассмотрим в нашем курсе.</p>
				</div>				
			</div>
			<div class="deadline__again">				
				<div class="again__paragrph">
					<p class="again__headline deadline-headline">Опять дедлайн</p>
					<p class="again__text deadline-text">В мире, где столько всего интересного, когда же успевать жить?</p>				
				</div>
				<img class="again__image" src="img/mind_blowing.webp" alt="Сногсшибательный" loading="auto" width="377px" height="620px">				
			</div>
		</div>

		<div class="main__opportunities">
			<p class="opportunities__headline">На курсе ты <span class="text_extra">сможешь</span></p>
			<div class="opportunities-content_flex">
				<div class="opportunities__first block-opportunities">
					<div class="opportunities-content__first">
						<div class="opportunities__first-image"></div>
						<p class="opportunities__first-text opportunities-text">Понять, что нужно делать, а что делать не стоит.</p>
					</div>				
				</div>
				<div class="opportunities__second block-opportunities">
					<div class="opportunities-content__second">
						<div class="opportunities__second-image"></div>
						<p class="opportunities__second-text opportunities-text">Перестать себя искусственно ограничивать.</p>
					</div>
				</div>
				<div class="opportunities__third block-opportunities">
					<div class="opportunities-content__third">
						<div class="opportunities__third-image"></div>
						<p class="opportunities__third-text opportunities-text">Определить сильные стороны<br>и начать использовать слабые.</p>
					</div>
				</div>
				<div class="opportunities__fourth block-opportunities">
					<div class="opportunities-content__fourth">
						<div class="opportunities__fourth-image"></div>
						<p class="opportunities__fourth-text opportunities-text">Научиться достигать любой цели<br>в 3 понятных шага.</p>
					</div>
				</div>
				<div class="opportunities__fifth block-opportunities">
					<div class="opportunities-content__fifth">
						<div class="opportunities__fifth-image"></div>
						<p class="opportunities__fifth-text opportunities-text">Сотрудничать эффективно<br>и с правильными людьми.</p>
					</div>
				</div>
				<div class="opportunities__sixth block-opportunities">
					<div class="opportunities-content__sixth">
						<div class="opportunities__sixth-image"></div>
						<p class="opportunities__sixth-text opportunities-text">Оптимизировать общение с клиентами и проведение совещаний.</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>

	<div class="footer">
		<div class="footer__logo"></div>
	</div>
	
	<script src="script/min-script.js" defer></script>

</body>
</html>
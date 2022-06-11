USE university;

INSERT INTO faculty (name)
VALUE 	('ФИиВТ'),
		('ИВТ'),
        ('БИС');

INSERT INTO `group` (name, id_faculty)
VALUE 	('ПС-11', 1),
		('ПС-12', 1),
        ('ПС-13', 1),
		('ИВТ-11', 2),
        ('ИВТ-12', 2),
        ('ИВТ-13', 2),
        ('БИС-11', 3),
        ('БИС-12', 3),
        ('БИС-13', 3);

INSERT INTO student (name, surename, id_group, age)
VALUE 	('Иван',		'Иванов',		1, 19),
		('Елизавета',	'Грачева',		1, 18),
        ('Софья',		'Коновалова',	1, 17),
        ('Илья',		'Захаров',		1, 18),
        ('Татьяна',		'Абрамова',		1, 18),
        ('Дмитрий',		'Шилов',		2, 19),
        ('Екатерина',	'Степановна',	2, 19),
        ('Ангелина',	'Басова',		2, 21),
        ('Александра',	'Соловьёва',	2, 20),
        ('Анастасия',	'Филиппова',	2, 20),
        ('Демид',		'Еремеев',		3, 21),
        ('Павел',		'Чухланцев',	3, 18),
        ('Демид',		'Федотов',		3, 18),
        ('Тимур',		'Антонов',		3, 19),
        ('Юлия',		'Баранова',		3, 19),
        ('Софья', 		'Петрова',		4, 19),
        ('Демид',		'Андреев',		4, 20),
        ('Мария',		'Кузнецова',	4, 17),
        ('Карина',		'Львова',		4, 17),
        ('Виктор',		'Козлов',		4, 18),
        ('Матвей',		'Федотов',		5, 18),
        ('Иван',		'Фролов',		5, 18),
        ('Макар',		'Пономарев',	5, 19),
        ('Иван',		'Овсяников',	5, 19),
        ('Максим',		'Семенов',		5, 19),
        ('Елизавета',	'Латышева',		6, 20),
        ('Арсений',		'Пирогов',		6, 20),
        ('Ярослав',		'Яковлев',		6, 21),
        ('Тимовей',		'Андреев',		6, 21),
        ('Платон',		'Захаров',		6, 18),
        ('Ярослав',		'Степанов',		7, 18),
        ('Злата',		'Антонова',		7, 18),
        ('Кристина',	'Широкова',		7, 18),
        ('Андрей',		'Корнеев',		7, 17),
        ('Кирилл',		'Кулаков',		7, 17),
        ('Майя',		'Игнатова',		8, 19),
        ('Михаил',		'Соколов',		8, 19),
        ('Роман',		'Барсуков',		8, 18),
        ('Марьям',		'Котова',		8, 18),
        ('Алиса',		'Столярова',	8, 17),
        ('Николь',		'Ефимова',		9, 20),
        ('Роберт',		'Севастьянов',	9, 21),
        ('Сергей',		'Белов',		9, 19),
        ('Аделина',		'Павлова',		9, 19),
        ('Никита',		'Булатов',		9, 19);

-- SELECT * FROM faculty;
-- SELECT * FROM class;
-- SELECT * FROM student;
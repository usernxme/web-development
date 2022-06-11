USE university;

SELECT
	g.name AS `Group`,
    f.name AS Faculty
FROM
	student s
LEFT JOIN `group` g ON s.id_group = g.id
LEFT JOIN faculty f ON g.id_faculty = f.id
WHERE
	s.name = 'Павел' AND s.surename = 'Чухланцев';

-- для проверки можно искать Павел Чухланцев
						  -- Иван  Иванов 
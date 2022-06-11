USE university;

SELECT
	s.name AS Name,
    s.surename AS Surename,
    s.age AS Age, 
    g.name AS `Group`
FROM
	student s
LEFT JOIN `group` g ON s.id_group = g.id
WHERE
	g.name = 'ПС-13';
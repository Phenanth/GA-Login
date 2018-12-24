update user set user_sex = CASE
	WHEN user_id='alice' THEN 'F'
	WHEN user_id='honey' THEN 'F'
	ELSE 'M'
END;

update user set user_sex = 'M';

ALTER TABLE user ADD user_secret char(20) DEFAULT NULL;

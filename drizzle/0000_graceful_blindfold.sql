CREATE TABLE `users` (
	`user_id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	CONSTRAINT `users_user_id` PRIMARY KEY(`user_id`)
);

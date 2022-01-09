#!/bin/bash
mysql -u <USER> -p<PASSWORD> <<EOF
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>'
CREATE DATABASE `todo-app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
use todo-app
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `message` varchar(45) DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
EOF
cd server
npm run dev


const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME
});

//Connection start
connection.connect();

//Initialize database
connection.query(`
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
`)

connection.query(`
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
`)

connection.query(`
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
`)

connection.query(`
CREATE SCHEMA IF NOT EXISTS membership_todo DEFAULT CHARACTER SET utf8 ;
`)

connection.query(`
USE membership_todo;
`)

connection.query(`
DROP TABLE IF EXISTS user;
`)

connection.query(`
CREATE TABLE IF NOT EXISTS membership_todo.user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    name VARCHAR(20) NOT NULL,
    is_admin TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    UNIQUE INDEX user_UNIQUE (user ASC))
  ENGINE = InnoDB;
`)

connection.query(`
DROP TABLE IF EXISTS permission;
`)

connection.query(`
CREATE TABLE IF NOT EXISTS membership_todo.permission (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    grant_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    INDEX fk_permission_user_idx (user_id ASC),
    INDEX fk_permission_user1_idx (grant_id ASC),
    CONSTRAINT fk_permission_user
      FOREIGN KEY (user_id)
      REFERENCES membership_todo.user (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
    CONSTRAINT fk_permission_user1
      FOREIGN KEY (grant_id)
      REFERENCES membership_todo.user (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE)
  ENGINE = InnoDB;
`);

connection.query(`
DROP TABLE IF EXISTS permissionType;
`)

connection.query(`
CREATE TABLE IF NOT EXISTS membership_todo.permissionType (
    permission_id INT UNSIGNED NOT NULL,
    read_permission TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
    write_permission TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
    PRIMARY KEY (permission_id),
    CONSTRAINT fk_permissionType_permission1
      FOREIGN KEY (permission_id)
      REFERENCES membership_todo.permission (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE)
  ENGINE = InnoDB;
`)

connection.query(`
DROP TABLE IF EXISTS toDo;
`)

connection.query(`
CREATE TABLE IF NOT EXISTS membership_todo.toDo (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  is_open TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  INDEX fk_toDo_user1_idx (user_id ASC),
  CONSTRAINT fk_toDo_user1
    FOREIGN KEY (user_id)
    REFERENCES membership_todo.user (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;
`)

connection.query(`
DROP TABLE IF EXISTS section;
`)

connection.query(`
CREATE TABLE IF NOT EXISTS membership_todo.section (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    toDo_id INT UNSIGNED NOT NULL,
    name VARCHAR(20) NOT NULL,
    sort INT NOT NULL,
    PRIMARY KEY (id),
    INDEX fk_section_toDo1_idx (toDo_id ASC),
    CONSTRAINT fk_section_toDo1
      FOREIGN KEY (toDo_id)
      REFERENCES membership_todo.toDo (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE)
  ENGINE = InnoDB;
`)

connection.query(`
DROP TABLE IF EXISTS card;
`)

connection.query(`
CREATE TABLE IF NOT EXISTS membership_todo.card (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    section_id INT UNSIGNED NOT NULL,
    writer VARCHAR(20) NOT NULL,
    content VARCHAR(500) NOT NULL,
    sort INT NOT NULL,
    fileURL TEXT(65536) NULL,
    imageURL TEXT(65536) NULL,
    PRIMARY KEY (id),
    INDEX fk_card_section1_idx (section_id ASC),
    CONSTRAINT fk_card_section1
      FOREIGN KEY (section_id)
      REFERENCES membership_todo.section (id)
      ON DELETE CASCADE
      ON UPDATE CASCADE)
  ENGINE = InnoDB;
`)

connection.query(`
SET SQL_MODE=@OLD_SQL_MODE;
`)

connection.query(`
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
`)

connection.query(`
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
`)

//Insert dummy data
connection.query(`
    INSERT INTO membership_todo.user
    (user,
    password,
    salt,
    name,
    is_admin)
    VALUES
    ('admin',
    'GuCavBEgRo7QJxOH4KXsPE/O7CfCN6QB9kUcy00DStzRYVJgBKG0VAaVx3MEw1+Q5SQ1GASMjDGCbHNOZf547g==',
    'z490wC8KvuixXQZ8gx3LAkfGxPSt7PjYmdtjyKOWXYpHE33Hc3luWixkxwsnxDL132djCzOhR4pFE6jNkdB6eA==',
    '김한비',
    1);
`)

connection.query(`
    INSERT INTO membership_todo.user
    (user,
    password,
    salt,
    name,
    is_admin)
    VALUES
    ('user',
    '6Wf4YWo3LJWYBNQHiiDld2nbEBSJAksrTVhJ9Csuj7qz3dx/fdFwnmqTpw8/IFpA9k2JzBx1tKyx5Yj0ZlC0+Q==',
    'LUIrdsJocpT4ZFgkoyrNFWqoQSip3unogef/vZbnJX8bOhZ2qmVmWBoYRHmTKP8yXVgy1KpuzwP6x5NNieJKFw==',
    '이재인',
    0);
`)

connection.query(`
    INSERT INTO toDo
    (user_id, is_open)
    VALUES
    (1, 1);
`)

connection.query(`
    INSERT INTO toDo
    (user_id, is_open)
    VALUES
    (2, 1);
`)

//Connection end
connection.end();
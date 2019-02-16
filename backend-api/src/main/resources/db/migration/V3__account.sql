CREATE TABLE account (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  email varchar(100) NOT NULL,
  age int(11) NOT NULL,
  password varchar(50) DEFAULT NULL,
  confirm_password varchar(50) DEFAULT NULL,
  country varchar(50) DEFAULT NULL,
  terms varchar(50) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY UK_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
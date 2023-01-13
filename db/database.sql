CREATE DATABASE IF NOT EXISTS farmaciadb;

USE farmaciadb;

CREATE TABLE vendedor (
    idVendedor INT(11) NOT NULL AUTO_INCREMENT,
    nameVendedor VARCHAR(45) DEFAULT NULL,
    salaryVendedor INT(5) DEFAULT NULL,
    PRIMARY KEY (idVendedor)
);

DESCRIBE vendedor;

INSERT INTO vendedor VALUES
  (1, 'Sophi', 1000),
  (2, 'Harry', 2000),
  (3, 'Charli', 2500),
  (4, 'Max', 1500);

CREATE TABLE proveedor (
    idProveedor INT(11) NOT NULL AUTO_INCREMENT,
    nameProveedor VARCHAR(45) DEFAULT NULL,
    salaryProveedor INT(5) DEFAULT NULL,
    PRIMARY KEY (idProveedor)
);

DESCRIBE proveedor;

INSERT INTO proveedor VALUES
  (1, 'Lee', 4000),
  (2, 'Hope', 3000),
  (3, 'Martha', 1500),
  (4, 'July', 1100);

CREATE TABLE producto (
    idProducto INT(11) NOT NULL AUTO_INCREMENT,
    nameProducto VARCHAR(45) DEFAULT NULL,
    priceProducto INT(5) DEFAULT NULL,
    PRIMARY KEY (idProducto)
);

DESCRIBE producto;

INSERT INTO producto VALUES
  (1, 'Omeprazol', 100),
  (2, 'Treda', 159),
  (3, 'Naproxeno', 50),
  (4, 'Loratadina', 60);
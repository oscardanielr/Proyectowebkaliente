DROP DATABASE IF EXISTS db_proyecto_web;

CREATE DATABASE db_proyecto_web;

USE db_proyecto_web;


CREATE TABLE admon(
    id INT(12) NOT NULL,
    username VARCHAR (28) NOT NULL,
    password VARCHAR (60) NOT NULL,
    fullname VARCHAR (100) NOT NULL
);

ALTER TABLE admon 
    ADD PRIMARY KEY (id);

ALTER TABLE admon 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ;

CREATE TABLE biografia(
    id INT(12) NOT NULL,
    origen VARCHAR (50) NOT NULL,
    genero VARCHAR (60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    parrafo_1 TEXT,
    parrafo_2 TEXT,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_biografia FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE biografia 
    ADD PRIMARY KEY (id);

ALTER TABLE biografia 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ;    

CREATE TABLE album(
    id INT(12) NOT NULL,
    url VARCHAR (100) NOT NULL,
    nombre VARCHAR (60) NOT NULL,
    description TEXT,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_album FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE album 
    ADD PRIMARY KEY (id);

ALTER TABLE album 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ; 

CREATE TABLE evento(
    id INT(12) NOT NULL,
    titulo VARCHAR (60) NOT NULL,
    descripcion TEXT,
    url VARCHAR(200) NOT NULL,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_evento FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE evento 
    ADD PRIMARY KEY (id);

ALTER TABLE evento 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ; 

CREATE TABLE galeria(
    id INT(12) NOT NULL,
    titulo VARCHAR (60) NOT NULL,
    url VARCHAR(200) NOT NULL,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_galeria FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE galeria 
    ADD PRIMARY KEY (id);

ALTER TABLE galeria 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ;     

CREATE TABLE contactanos(
    id INT(12) NOT NULL,
    direccion VARCHAR (80) NOT NULL,
    telefono_1 TEXT NOT NULL,
    telefono_2 TEXT ,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_contactanos FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE contactanos 
    ADD PRIMARY KEY (id);

ALTER TABLE contactanos 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ;     

CREATE TABLE historia(
    id INT(12) NOT NULL,
    titulo VARCHAR (50) NOT NULL,
    descripcion TEXT,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_historia FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE historia 
    ADD PRIMARY KEY (id);

ALTER TABLE historia 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ; 


CREATE TABLE artistas(
    id INT(12) NOT NULL,
    url TEXT NOT NULL,
    nombre VARCHAR (80) NOT NULL,
    email VARCHAR(100) NOT NULL,
    descripcion TEXT,
    admon_id INT(12),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_artistas FOREIGN KEY (admon_id) REFERENCES admon(id)
);

ALTER TABLE artistas 
    ADD PRIMARY KEY (id);

ALTER TABLE artistas 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ;


CREATE TABLE mensajes(
    id INT(12) NOT NULL,
    nombre VARCHAR (80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    asunto VARCHAR(30) NOT NULL,
    mensaje TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE mensajes 
    ADD PRIMARY KEY (id);

ALTER TABLE mensajes 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2;     



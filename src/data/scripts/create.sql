create database PetShop;
use PetShop;

create table pets (
	idPet BigInt primary key auto_increment,
    especie varchar(20), 
    image varchar(100) unique,
    name varchar(100) unique,
    color varchar(100),
    sexo varchar(10)
);

insert into pets (especie, image, name, color, sexo) values ('dog', 'zwergspitz.jpg', 'Zwergspitz', 'Amarelo', 'Feminino');


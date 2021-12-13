drop database if exists PetShop;  
create database PetShop;
use PetShop;

create table pets(
    idPet int primary key auto_increment,
    type varchar(10),
    image varchar(50) unique,
    especie varchar(50),
    name varchar(100) unique,
    color varchar(50),
    sexo varchar(10)
); 

insert into pets(type, image, especie, name, color, sexo) 
    values ('dog', 'pastor-alemao.jpg', 'cachorro', 'Pastor-alemão', 'Amarelo e Preto', 'Masculino'),
    ('dog', 'labrador.jpg', 'cachorro', 'Labrador-retriever', 'Branco', 'Masculino'),
    ('dog', 'zwergspitz.jpg', 'cachorro', 'Zwergspitz', 'Amarelo', 'Feminino')
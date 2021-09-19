create database PetShop;
use PetShop;

create table pets(
    idPet int primary key auto_increment,
    type varchar(10),
    image varchar(50) unique,
    name varchar(100) unique,
    color varchar(50),
    sex varchar(10)
); 

insert into pets(type, image, name, color, sex) 
    values ('dog', 'pastor-alemao.jpg', 'Pastor-alemão', 'Amarelo e Preto', 'Masculino'),
    ('dog', 'labrador.jpg', 'Labrador-retriever', 'Branco', 'Masculino'),
    ('dog', 'zwergspitz.jpg', 'Zwergspitz', 'Amarelo', 'Feminino')
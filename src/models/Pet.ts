import { Model, DataTypes } from "sequelize";
import { sequelize } from "../scripts/mysql";

type PetType = 'dog' | 'cat' | 'fish';
export interface PetInstance extends Model {
    type: PetType;
    image: string;
    name: string;
    color: string;
    sexo: 'Masculino' | 'Feminino';
}

export const Pet = sequelize.define<PetInstance>("Pet",
    {
        idPet: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        especie: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        sexo: {
            type: DataTypes.STRING,
            defaultValue: 'MASCULINO'
        }
    },
    {
        tableName: 'pets',
        timestamps: false
    }
);



    // getAll: (): Pet[] => {
    //     return data;
    // },
    // getFromType: (type: PetType): Pet[] => {
    //     return data.filter(item => item.type === type);
    // },
    // getFromName: (name: string): Pet[] => {
    //     return data.filter(item => 
    //         (item.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
    // }


// const data: Pet[] = [
//     {
//         type: 'dog',
//         image: 'pastor-alemao.jpg',
//         name: 'Pastor-alemão',
//         color: 'Amarelo e Preto',
//         sex: 'Masculino'
//     },
//     {
//         type: 'dog',
//         image: 'labrador.jpg',
//         name: 'Labrador-retriever',
//         color: 'Branco',
//         sex: 'Masculino'
//     },
//     {
//         type: 'dog',
//         image: 'zwergspitz.jpg',
//         name: 'Zwergspitz',
//         color: 'Amarelo',
//         sex: 'Feminino'
//     },
//     {
//         type: 'dog',
//         image: 'husky.jpg',
//         name: 'Husky Siberiano',
//         color: 'Branco e Preto',
//         sex: 'Masculino'
//     },
//     {
//         type: 'dog',
//         image: 'golden.jpg',
//         name: 'Golden Retriever',
//         color: 'Amarelo',
//         sex: 'Masculino'
//     },
//     {
//         type: 'dog',
//         image: 'poodle.jpg',
//         name: 'Poodle',
//         color: 'Branco',
//         sex: 'Feminino'
//     },
//     {
//         type: 'dog',
//         image: 'bulldog.jpg',
//         name: 'Bulldog',
//         color: 'Branco e Amarelo',
//         sex: 'Masculino'
//     },
//     {
//         type: 'cat',
//         image: 'persa.jpg',
//         name: 'Persa',
//         color: 'Amarelo',
//         sex: 'Masculino'
//     },
//     {
//         type: 'cat',
//         image: 'mainecoon.jpg',
//         name: 'Maine Coon',
//         color: 'Preto e Branco',
//         sex: 'Masculino'
//     },
//     {
//         type: 'cat',
//         image: 'bengal.jpg',
//         name: 'Bengal',
//         color: 'Branco, Preto e Amarelo',
//         sex: 'Feminino'
//     },
//     {
//         type: 'cat',
//         image: 'siames.jpg',
//         name: 'Siamês',
//         color: 'Amarelo e Preto',
//         sex: 'Masculino'
//     },
//     {
//         type: 'cat',
//         image: 'sphynx.jpg',
//         name: 'Sphynx',
//         color: 'Branco',
//         sex: 'Masculino'
//     },
//     {
//         type: 'fish',
//         image: 'neon.jpg',
//         name: 'Tetra Neon',
//         color: 'Vermelho e Azul',
//         sex: 'Masculino'
//     },
//     {
//         type: 'fish',
//         image: 'matogrosso.jpg',
//         name: 'Mato Grosso',
//         color: 'Laranja',
//         sex: 'Masculino'
//     },
//     {
//         type: 'fish',
//         image: 'limpavidro.jpg',
//         name: 'Limpa Vidro',
//         color: 'Verde e Branco',
//         sex: 'Masculino'
//     },
//     {
//         type: 'fish',
//         image: 'tanictis.jpg',
//         name: 'Tanictis',
//         color: 'Vermelho',
//         sex: 'Masculino'
//     },
//     {
//         type: 'fish',
//         image: 'acara.jpg',
//         name: 'Acará Bandeira',
//         color: 'Preto',
//         sex: 'Masculino'
//     },
// ]

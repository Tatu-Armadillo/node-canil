import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const home = async (req: Request, res: Response) => {
    console.log('Conexão estabelecida');
    let list = await Pet.findAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Titulo provisorio',
            background: 'Background provisorio'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Titulo dogs',
            background: 'Background provisorio de cachorros'
        },
    });
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Titulo cats',
            background: 'Background provisorio de gatos'
        },
    });
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Titulo fishes',
            background: 'Background provisorio de peixes'
        },
    });
}

export const novosAnimais = async (req: Request, res: Response) => {
    let { especie, image, name, color, sexo } = req.body;

    const pet = await Pet.create({
        especie: especie,
        image: image,
        name: name,
        color: color,
        sexo: sexo
    });
    res.redirect('/');
}
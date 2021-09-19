import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const home = async (req: Request, res: Response) => {

    console.log('Conexão estabelecida');
    let list = await Pet.findAll();
    console.log(list);

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

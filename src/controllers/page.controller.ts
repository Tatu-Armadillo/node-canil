import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pets } from "../models/Pet";

export const home = async (req: Request, res: Response) => {
    let list = await Pets.findAll();
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
    // let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Titulo dogs',
            background: 'Background provisorio de cachorros'
        },
        // list
    });
}
export const cats = (req: Request, res: Response) => {
    // let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Titulo cats',
            background: 'Background provisorio de gatos'
        },
        // list
    });
}
export const fishes = (req: Request, res: Response) => {
    // let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Titulo fishes',
            background: 'Background provisorio de peixes'
        },
        // list
    });
}

export const novosAnimais = async (req: Request, res: Response) => {

    console.log(req.body.especie == undefined);
    
    let { especie } = req.body
    if (!especie) {
        console.log('undefined.');
        return;
    }
    console.log(especie);
    // const pet = await Pets.create({
    //     especie: especie,
    //     image: image,
    //     name: name,
    //     color: color,
    //     sexo: sexo
    // });
    res.redirect('/');
}

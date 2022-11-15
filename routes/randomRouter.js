import { Router } from "express";

export const randomRouter = Router();

randomRouter.get('/', async (req, res) => {

    const forkedRandom = fork('../utils/random.js');
    const username = req.session.username || '';

    forkedRandom.on('message', msg => {

        const cant = Number(req.query.cant) || 100000000;

        if (msg === 'init') {
            forkedRandom.send(cant);
        } else {
            const randomNumbers = { ...msg };
            delete randomNumbers[0];

            res.render("random",
                { randomNumbers, username }
            );

        }

    });

});
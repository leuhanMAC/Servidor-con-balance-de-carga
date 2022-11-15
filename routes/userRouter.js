import { Router } from "express";
import passport from "passport";

export const userRouter = Router();

userRouter.post(
    '/login',
    passport.authenticate('login', { failureRedirect: '/faillogin' }),
    async (req, res) => {
        const { username } = req.body;

        req.session.username = username;
        req.session.login = 'logged';

        res.redirect('/');
    }
);

userRouter.post(
    '/register',
    passport.authenticate('signup', { failureRedirect: '/failregister' }),
    async (req, res) => {
        const { username, firstName, lastName } = req.body;

        req.session.username = username;
        req.session.firstName = firstName;
        req.session.lastName = lastName;

        res.redirect('/');
    }
)
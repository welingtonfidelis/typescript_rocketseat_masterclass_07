import { Request, Response } from "express";
import { EmailService } from "../../services/EmailService";

const users = [
    { name: 'user1', email: 'user@email.com' }
]

const UserController = {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'teste1', email: 'teste1@email.com' },
            message: { subject: 'Bem-vindo(a) ao sistema', body: 'Seja bem-vindo(a)' }
        });

        return res.send();
    }
}

export {
    UserController
}
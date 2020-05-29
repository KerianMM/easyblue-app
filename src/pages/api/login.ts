import {NextApiRequest, NextApiResponse} from "next";

import {LoginResponseBadArgumentError, LoginResponseError, LoginResponseSuccess} from "@/interfaces/response/login";
import {UserInterface} from "@/models/User";
import {userRepository} from "@/services/db";
import {UserService} from "@/services/user";
import {EmailValidator} from "@/easyblue-app/src/utils/validators/email";

const rejectWith405 = (res: NextApiResponse<LoginResponseError>) => res
    .status(405)
    .send({
        valid: false,
        error: 'La méthode attendue est POST'
    });

const rejectWith400BadFormat = (res: NextApiResponse<LoginResponseError>) => res
    .status(400)
    .send({
        valid: false,
        error: 'L\'adresse mail et le mot de passe doivent être des chaines de caractère'
    });

const rejectWith400EmailInvalid = (res: NextApiResponse<LoginResponseBadArgumentError>) => res
    .status(400)
    .send({
        valid: false,
        field: 'email',
        error: 'L\'adresse mail n\'est pas valide'
    });

const rejectWith404 = (res: NextApiResponse<LoginResponseBadArgumentError>) => res
    .status(404)
    .send({
        valid: false,
        field: 'email',
        error: 'L\'adresse mail ne correspond à aucun utilisateur'
    });

const rejectWith400PasswordInvalid = (res: NextApiResponse<LoginResponseBadArgumentError>) => res
    .status(400)
    .send({
        valid: false,
        field: 'password',
        error: 'Le mot de passe n\'est pas valide'
    });

export default (req: NextApiRequest, res: NextApiResponse<LoginResponseSuccess | LoginResponseError | LoginResponseBadArgumentError>) => {
    if (req.method !== 'POST') {
        return rejectWith405(res);
    } else if (typeof req.body.email !== "string" || typeof req.body.password !== "string") {
        return rejectWith400BadFormat(res);
    } else if (!EmailValidator.isValid(req.body.email)) {
        return rejectWith400EmailInvalid(res);
    } else {
        const user: UserInterface | undefined = userRepository.findOneBy([{key: "email", value: req.body.email}]);

        if (typeof user === "undefined") {
            return rejectWith404(res);
        } else if (!UserService.checkPassword(req.body.password, user)) {
            return rejectWith400PasswordInvalid(res);
        } else {
            return res.json({valid: true});
        }
    }
}

import {NextApiRequest, NextApiResponse} from "next";
import {UserService} from "../../service/user";
import {UserInterface} from "../../models/User";
import {LoginResponseBadArgumentError, LoginResponseError, LoginResponseSuccess} from "../../interfaces/response/login";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     // ...
// };

export default (req: NextApiRequest, res: NextApiResponse<LoginResponseSuccess | LoginResponseError | LoginResponseBadArgumentError>) => {
    if (req.method !== 'POST') {
        return res
            .status(405)
            .send({
                valid: false,
                error: 'La méthode attendue est POST'
            });
    } else /* BODY INCOMPLET */
        if (typeof req.body.email !== "string" || typeof req.body.password !== "string") {
        return res
            .status(400)
            .send({
                valid: false,
                error: 'L\'adresse mail et le mot de passe doivent être des chaines de caractère'
            });
    } else /* EMAIL INCORRECT */
        if (!UserService.isValidEmail(req.body.email)) {
        return res
            .status(400)
            .send({
                valid: false,
                field: 'email',
                error: 'L\'adresse mail n\'est pas valide'
            });
    } else {
        const user : UserInterface | undefined = UserService.getOneByEmail(req.body.email);

        /* USER INCONNU */
        if (typeof user === "undefined") {
            return res
                .status(404)
                .send({
                    valid: false,
                    field: 'email',
                    error: 'L\'adresse mail ne correspond à aucun utilisateur'
                });
        } else /* PASSWORD INCORRECT */
            if (!UserService.checkPassword(req.body.password, user)) {
            return res
                .status(400)
                .send({
                    valid: false,
                    field: 'password',
                    error: 'Le mot de passe n\'est pas valide'
                });
        } else { /* OK */
            return res.json({valid: true});
        }
    }
}

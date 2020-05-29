import {NextApiRequest, NextApiResponse} from "next";

import {ErrorResponseInterface} from "@/interfaces/response/error";
import {UserInterface} from "@/models/User";
import {userRepository} from "@/services/db";
import {EmailValidator} from "@/easyblue-app/src/utils/validators/email";

const rejectWith405 = (res: NextApiResponse<ErrorResponseInterface>) => res
    .status(405)
    .send({
        error: 'La méthode attendue est GET'
    });

const rejectWith401 = (res: NextApiResponse<ErrorResponseInterface>) => res
    .status(401)
    .send({
        error: 'Veuillez vous authentifier'
    });

export default (req: NextApiRequest, res: NextApiResponse<UserInterface | ErrorResponseInterface>) => {
    if (req.method !== 'GET') {
        return rejectWith405(res);
    } else if (typeof req.headers.authorization !== "string" || !EmailValidator.isValid(req.headers.authorization)) {
        return rejectWith401(res);
    } else {
        const user: UserInterface | undefined = userRepository.findOneBy([{key: "email", value: req.headers.authorization}]);

        if (typeof user === "undefined") {
            return rejectWith401(res);
        } else {
            return res.json(user);
        }
    }
}

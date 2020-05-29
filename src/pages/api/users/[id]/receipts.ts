import {NextApiRequest, NextApiResponse} from "next";

import {ErrorResponseInterface} from "@/interfaces/response/error";
import {ReceiptInterface} from "@/models/Receipt";
import {UserInterface} from "@/models/User";
import {receiptRepository, userRepository} from "@/services/db";

const rejectWith405 = (res: NextApiResponse<ErrorResponseInterface>) => res
    .status(405)
    .send({
        error: 'La méthode attendue est GET'
    });

const rejectWith404 = (res: NextApiResponse<ErrorResponseInterface>) => res
    .status(404)
    .send({
        error: 'Données intouvables'
    });

export default (req: NextApiRequest, res: NextApiResponse<ReceiptInterface[] | ErrorResponseInterface>) => {
    if (req.method !== 'GET') {
        return rejectWith405(res);
    } else if (typeof req.query.id !== "string") {
        return rejectWith404(res);
    } else {
        const user: UserInterface | undefined = userRepository.find(req.query.id);

        if (typeof user === "undefined") {
            return rejectWith404(res);
        } else {
            const receipts: ReceiptInterface[] = receiptRepository.findBy([{
                key: "userId",
                value: user?.id
            }]);

            return res.json(receipts);
        }
    }
}

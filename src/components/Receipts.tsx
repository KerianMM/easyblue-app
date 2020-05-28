import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {ReceiptInterface} from "../models/Receipt";

interface Props {
    receipts: ReceiptInterface[];
}

/**
 * TODO: receipt must have an assurance field
 *
 * @param receipts
 * @constructor
 */
const Receipts: React.FC<Props> = ({receipts}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    const lastReceipt: () => JSX.Element | string = () => {
        const item: ReceiptInterface | undefined = receipts.length ? receipts[0] : undefined

        if (typeof item === "undefined") {
            return '';
        } else {
            return (
                <div className="receipt">
                    <p>{item?.date}</p>
                </div>
            )
        }
    }

    return (
        <>
            <Grid id="receipts">
                <Paper>
                    <p>Mes dernières quittances</p>
                    <div id="receipts">
                        {lastReceipt()}
                    </div>
                    <a onClick={handleClick}>Afficher toutes mes quittances</a>
                </Paper>
            </Grid>
        </>
    )
};

export default Receipts;
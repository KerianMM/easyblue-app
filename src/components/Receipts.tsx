import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {ReceiptInterface} from "@/models/Receipt";
import {CircularProgress} from "@/easyblue-app/node_modules/@material-ui/core";

interface Props {
    receipts: ReceiptInterface[] | null | undefined;
}

const Receipts: React.FC<Props> = ({receipts}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    const lastReceipt: () => JSX.Element | string = () => {
        if (receipts === null || typeof receipts === "undefined") {
            return <CircularProgress className="m-auto"/>;
        } else {
            return (!receipts.length) ? <span>Aucune quittance</span> : (
                <div className="receipt">
                    <span>{receipts[0].date}</span><br/>
                    <span>{receipts[0].name}</span>
                </div>
            )
        }
    };

    return (
        <Grid>
            <Paper className="p-m">
                <span>Mes dernières quittances</span>
                <div>
                    {lastReceipt()}
                </div>
                <a onClick={handleClick}>Afficher toutes mes quittances</a>
            </Paper>
        </Grid>
    )
};

export default Receipts;
import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {PaymentInterface} from "@/models/Payment";
import {CircularProgress} from "@/easyblue-app/node_modules/@material-ui/core";

interface Props {
    payment: PaymentInterface | null | undefined;
}

const PaymentMode: React.FC<Props> = ({payment}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    return (
        <>
            <Grid id="payment">
                <Paper className="p-m mb-m">
                    <span>Mon mode de paiement</span><br/>
                    <div>{payment === null || typeof payment === "undefined" ? (<CircularProgress className="m-auto"/>) : (
                        <>
                            <span>{payment.mode}</span><br/>
                            <span>{payment.code}</span><br/>
                        </>
                    )}</div>
                    <a onClick={handleClick}>Editer mon mode de paiement</a>
                </Paper>
            </Grid>
        </>
    )
};

export default PaymentMode;
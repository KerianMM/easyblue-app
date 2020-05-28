import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {PaymentInterface} from "../models/Payment";

interface Props {
    payment: PaymentInterface;
}

const PaymentMode: React.FC<Props> = ({payment}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    return (
        <>
            <Grid id="payment">
                <Paper>
                    <p>Mon mode de paiement</p>
                    <span>{payment.mode}</span>
                    <span>**** **** ****</span>
                    <a onClick={handleClick}>Editer mon mode de paiement</a>
                </Paper>
            </Grid>
        </>
    )
};

export default PaymentMode;
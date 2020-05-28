import React from "react";
import {CompanyInterface} from "../models/Company";
import {Grid, Paper} from "@material-ui/core";

interface Props {
    company: CompanyInterface;
}

const Company: React.FC<Props> = ({company}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    return (
        <>
            <Grid id="company">
                <Paper>
                    <p>Moi et ma société</p>
                    <span>{company.location.address}</span>
                    <span>{company.location.code} {company.location.city}, {company.location.country}</span>
                    <a onClick={handleClick}>Voir mes informations</a>
                </Paper>
            </Grid>
        </>
    )
};

export default Company;
import React from "react";
import {CompanyInterface, LocationInterface} from "../models/Company";
import {Grid, Paper} from "@material-ui/core";

interface Props {
    company: CompanyInterface | undefined;
}

const Company: React.FC<Props> = ({company}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    const location: LocationInterface = (typeof company !== "undefined") ? company.location : {
        address: '',
        city: '',
        code: '',
        country: ''
    };

    return (
        <>
            <Grid id="company">
                <Paper>
                    <p>Moi et ma société</p>
                    <span>{location.address}</span>
                    <span>{location.code} {location.city}, {location.country}</span>
                    <a onClick={handleClick}>Voir mes informations</a>
                </Paper>
            </Grid>
        </>
    )
};

export default Company;
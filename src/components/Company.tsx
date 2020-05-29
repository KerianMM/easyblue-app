import React from "react";
import {CompanyInterface} from "@/models/Company";
import {CircularProgress, Grid, Paper} from "@material-ui/core";

interface Props {
    company: CompanyInterface | null | undefined;
}

const Company: React.FC<Props> = ({company}) => {
    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
    };

    return (
        <Grid id="company">
            <Paper className="p-m mb-m">
                <span>Moi et ma société</span><br/>
                <div>{company === null || typeof company === "undefined" ? (<CircularProgress className="m-auto"/>) : (
                    <>
                        <span>{company.location.address}</span><br/>
                        <span>{company.location.code} {company.location.city}, {company.location.country}</span><br/>
                    </>
                )}</div>
                <a onClick={handleClick}>Voir mes informations</a>
            </Paper>
        </Grid>
    )
};

export default Company;
import React from "react";
import {Grid} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {FormError, FormErrorContainer} from "../interfaces/form/error";

interface Props {
    formErrors: FormErrorContainer;
}

const FormErrors: React.FC<Props> = ({formErrors}) => {
    const mapFunction = (error: FormError, i: number) => (
        <Alert severity="error" key={i} className="w-full">{error.message}</Alert>
    );

    return (
        <Grid container className="raw">
            {formErrors.errors.map<JSX.Element>(mapFunction)}
        </Grid>
    );
};

export default FormErrors;

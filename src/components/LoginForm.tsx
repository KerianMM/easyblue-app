import React from 'react';
import {Button, Grid, IconButton, InputAdornment, Paper, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {ReactSVG} from "react-svg";
import {useRouter} from "next/router";
import {NextRouter} from "next/dist/next-server/lib/router/router";

import FormErrors from "./FormErrors";
import {UserService} from "../service/user";
import {FormErrorContainer} from "../interfaces/form/error";
import {LoginFormDatas, LoginState} from "../interfaces/form/login";
import {LoginResponse} from "../interfaces/response/login";
import {EmailValidator} from "../utils/validators/email";

const LoginForm: React.FC = () => {
    const router: NextRouter = useRouter();

    const [values, setValues] = React.useState<LoginState>({
        email: {
            value: '',
            error: false,
            helper: null
        },
        password: {
            value: '',
            error: false,
            helper: null,
            show: false
        },
    });

    const [formErrors, setFormErrors] = React.useState<FormErrorContainer>({errors: []});

    /**
     * Dispatch SetStateAction to add an error message
     */
    const addFormError = () => {
        setFormErrors({
            errors: [
                ...formErrors.errors,
                {message: 'Connexion impossible... Veuillez réessayer plus tard.'}
            ]
        });
    };

    /**
     * Dispatch SetStateAction to update fields values
     * Clear FormErrors
     */
    const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [prop]: {
                ...values[prop],
                value: event.target.value,
                error: false,
                helper: ''
            }
        });

        if (formErrors.errors.length) {
            setFormErrors({errors: []});
        }
    };

    /**
     * Dispatch SetStateAction to display or hide password value
     */
    const handleClickShowPassword = () => {
        setValues({...values, password: {...values.password, show: !values.password.show}});
    };

    /**
     * Dispatch SetStateAction to ignore password visibility click
     */
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    /**
     * Dispatch SetStateAction to add form field error
     */
    const handleInvalidField = (prop: keyof LoginState, helper: string) => {
        setValues({
            ...values,
            [prop]: {
                ...values[prop],
                error: true,
                helper: helper
            }
        });
    };

    /**
     * Log user and redirect to dashboard or add FormError
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData: LoginFormDatas = {
            email: values.email.value,
            password: values.password.value
        };

        if (!formData.email.length) {
            handleInvalidField('email', 'Champs requis');
        } else if (!formData.password.length) {
            handleInvalidField('password', 'Champs requis');
        } else if (!EmailValidator.isValid(formData.email)) {
            handleInvalidField('email', 'Format invalide');
        } else {
            try {
                const response: Response = await UserService.fetchLogin(formData);

                const datas: LoginResponse = await response.json();

                if (datas.valid) {
                    sessionStorage.setItem('email', formData.email);
                    router.push('/dashboard');
                } else if (typeof datas.field === "string" && typeof datas.error === "string") {
                    handleInvalidField((datas.field === 'email' ? 'email' : 'password'), datas.error);
                } else {
                    addFormError();
                }
            } catch (e) {
                addFormError();
            }
        }
    };

    return (
        <>
            <Paper id="login-card">
                <form onSubmit={handleSubmit}>
                    <Grid>
                        <div className="logo">
                            <ReactSVG src="/img/icons/logo.svg"/>
                        </div>
                    </Grid>

                    <Grid container id="login-form">
                        <FormErrors formErrors={formErrors}/>

                        <Grid container className="raw">
                            <TextField
                                label="Adresse e-mail"
                                error={values.email.error}
                                helperText={values.email.helper}
                                fullWidth
                                value={values.email.value}
                                onChange={handleChange('email')}
                            />
                        </Grid>
                        <Grid container className="raw">
                            <TextField
                                label="Mot de passe"
                                type={values.password.show ? 'text' : 'password'}
                                value={values.password.value}
                                error={values.password.error}
                                helperText={values.password.helper}
                                fullWidth
                                onChange={handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.password.show ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid container className="raw">
                            <div className="m-auto">
                                <Button size="small" type="submit">Connexion</Button>
                            </div>
                        </Grid>
                        <Grid container className="raw">
                            <div className="m-auto">
                                <Button size="small">Mot de passe oublié</Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </>
    );
};

export default LoginForm;

import React from 'react';
import {
    Button,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    TextField
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {ReactSVG} from "react-svg";

interface LoginState {
    email: string;
    password: string;
    showPassword: boolean;
}

const LoginForm: React.FC = () => {
    const [values, setValues] = React.useState<LoginState>({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Paper id="login-card">
                <Grid>
                    <div className="logo">
                        <ReactSVG src="/img/icons/logo.svg"/>
                    </div>
                </Grid>

                <Grid container id="login-form" >
                    <Grid container className="raw">
                        <FormControl fullWidth>
                            <TextField
                                label="Adresse e-mail"
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                    </Grid>
                    <Grid container className="raw">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="password">Mot de passe</InputLabel>
                            <Input
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid container className="raw">
                        <div className="m-auto">
                            <Button size="small">Connexion</Button>
                        </div>
                    </Grid>
                    <Grid container className="raw">
                        <div className="m-auto">
                            <Button size="small">Mot de passe oublié</Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <style jsx>{`
      h1{
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
      }
    `}</style>
        </>
    );
};

export default LoginForm;

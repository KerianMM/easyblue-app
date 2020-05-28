import React from "react";
import {AppProps} from "next/app";
import '../../assets/scss/style.scss';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;

export default MyApp;
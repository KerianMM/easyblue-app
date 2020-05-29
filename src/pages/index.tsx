import React, {useEffect} from 'react';
import Head from 'next/head'
import {useRouter} from "next/router";

import LoginForm from "@/components/LoginForm";

const Index: React.FC = () => {
    const router = useRouter();

    /**
     * Use to redirect on dashboard if email stored
     */
    useEffect(() => {
        if (sessionStorage.getItem('email')) {
            router.push('/dashboard');
        }
    });

    return (
        <>
            <Head>
                <title>Easyblue: Login</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <LoginForm/>
        </>
    );
};

export default Index;

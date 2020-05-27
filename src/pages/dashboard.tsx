import React, {useEffect} from 'react';
import Head from 'next/head'
import {useRouter} from "next/router";
import Title from '../components/Title';

const Dashboard: React.FC<{}> = () => {
    const router = useRouter();

    /**
     * Use to redirect on dashboard if email stored
     */
    useEffect(() => {
        if (!sessionStorage.getItem('email')) {
            router.push('/');
        }
    });

    return (
        <div className="container">
            <Head>
                <title>Easyblue: Dashboard</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Title text="Dashboard"/>
        </div>
    );
};

export default Dashboard;

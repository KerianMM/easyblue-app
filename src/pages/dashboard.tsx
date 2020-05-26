import React from 'react';
import Head from 'next/head'
import Title from '../components/Title';

const Dashboard: React.FC<{}> = () => {

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

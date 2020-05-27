import React from 'react';
import Head from 'next/head'
import Title from '../components/Title';

const Home: React.FC<{}> = () => (
    <div className="container">
        <Head>
            <title>Easyblue: test frontend</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Title text="Test frontend."/>
    </div>
);

export default Home

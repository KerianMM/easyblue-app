import React, {useEffect, useState} from 'react';
import {GetStaticProps} from "next";
import Head from 'next/head'
import {useRouter} from "next/router";
import {Grid} from "@material-ui/core";

import Navbar from "../components/Navbar";
import DashboardTitle from "../components/DashboardTitle";
import Company from "../components/Company";
import PaymentMode from "../components/PaymentMode";
import Receipts from "../components/Receipts";
import Activities from "../components/Activities";

import {UserInterface} from "../models/User";
import {CompanyInterface} from "../models/Company";
import {PaymentInterface} from "../models/Payment";
import {ReceiptInterface} from "../models/Receipt";
import {ActivityInterface} from "../models/Activity";

import {UserService} from "../service/user";

interface Props {
    user: UserInterface;
    company: CompanyInterface;
    payment: PaymentInterface;
    receipts: ReceiptInterface[];
    activities: ActivityInterface[];
}

export const getStaticProps: GetStaticProps = async () => {
    const props: Props = {
        user: {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        company: {
            id: '',
            name: '',
            userId: '',
            location: {
                address: '',
                city: '',
                code: '',
                country: ''
            }
        },
        payment: {
            id: '',
            mode: '',
            userId: ''
        },
        receipts: [],
        activities: []
    };

    return {props};
};

const Dashboard: React.FC<Props> = (props) => {
    const router = useRouter();

    const [state, setState] = useState<Props>(props);

    /**
     * Use to redirect on dashboard if email stored
     */
    useEffect(() => {
        const email: string | null = sessionStorage.getItem('email');

        if (!email) {
            router.push('/');
        } else if (!state.user.id.length) {
            UserService.getCurrent(email)
                .then((user: UserInterface | undefined) => {
                    if (typeof user === "undefined") {
                        console.log('Votre connexion a expirée... veuillez vous reconnecter');
                        sessionStorage.clear();
                        router.push('/');
                    } else {
                        setState({
                            ...state,
                            user
                        });
                    }
                });
        }
    });

    return (
        <>
            <Head>
                <title>Easyblue: Dashboard</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>
            <DashboardTitle user={state.user}/>

            <Grid container className="w-container m-auto">
                <Grid item className="p-m" sm={6}>
                    <Company company={state.company}/>
                    <PaymentMode payment={state.payment}/>
                    <Receipts receipts={state.receipts}/>
                </Grid>
                <Grid item className="p-m" sm={6}>
                    <Activities activities={state.activities}/>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;

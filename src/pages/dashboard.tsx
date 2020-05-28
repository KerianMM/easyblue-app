import React, {useEffect} from 'react';
import {GetStaticProps} from "next";
import Head from 'next/head'
import {useRouter} from "next/router";
import Navbar from "../components/Navbar";
import DashboardTitle from "../components/DashboardTitle";
import {UserInterface} from "../models/User";
import {CompanyInterface} from "../models/Company";
import {Grid} from "@material-ui/core";
import Company from "../components/Company";
import PaymentMode from "../components/PaymentMode";
import {PaymentInterface} from "../models/Payment";
import Receipts from "../components/Receipts";
import {ReceiptInterface} from "../models/Receipt";
import Activities from "../components/Activities";
import {ActivityInterface} from "../models/Activity";

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

const Dashboard: React.FC<Props> = ({user, company, payment, receipts, activities}) => {
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

            <Navbar/>
            <DashboardTitle user={user}/>

            <Grid container>
                <Grid item container>
                    <Company company={company}/>
                    <PaymentMode payment={payment}/>
                    <Receipts receipts={receipts}/>
                </Grid>
                <Grid item container>
                    <Activities activities={activities}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;

import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import {useRouter} from "next/router";
import {Grid} from "@material-ui/core";

import Navbar from "@/components/Navbar";
import DashboardTitle from "@/components/DashboardTitle";
import Company from "@/components/Company";
import PaymentMode from "@/components/PaymentMode";
import Receipts from "@/components/Receipts";
import Activities from "@/components/Activities";

import {UserInterface} from "@/models/User";
import {CompanyInterface} from "@/models/Company";
import {PaymentInterface} from "@/models/Payment";
import {ReceiptInterface} from "@/models/Receipt";
import {ActivityInterface} from "@/models/Activity";

import {UserService} from "@/services/user";
import {CompanyService} from "@/services/company";
import {PaymentService} from "@/services/payment";
import {ReceiptService} from "@/services/receipt";
import {ActivityService} from "@/services/activity";

interface InitialState {
    user: UserInterface | null;
    company: CompanyInterface | null;
    payment: PaymentInterface | null;
    receipts: ReceiptInterface[] | null;
    activities: ActivityInterface[] | null;
}

const Dashboard: React.FC = () => {
    const router = useRouter();

    const initialState: InitialState = {
        user: null,
        company: null,
        payment: null,
        receipts: null,
        activities: null
    };

    const [initialized, setInitialized] = useState<boolean>(false);
    const [state, setState] = useState<InitialState>(initialState);

    /**
     * Use to redirect on dashboard if email stored
     */
    useEffect(() => {
        const email: string | null = sessionStorage.getItem('email');

        if (!email) {
            router.push('/');
        } else if (!initialized) {
            setInitialized(true);

            UserService.getCurrent(email)
                .then((user: UserInterface | undefined) => {
                    if (typeof user === "undefined") {
                        console.log('Votre connexion a expirée... veuillez vous reconnecter');
                        sessionStorage.clear();
                        router.push('/');
                    } else {
                        const toState: {
                            user: UserInterface,
                            company?: CompanyInterface,
                            payment?: PaymentInterface,
                            receipts?: ReceiptInterface[],
                            activities?: ActivityInterface[],
                        } = {user};

                        const promises: [
                            Promise<CompanyInterface | undefined>,
                            Promise<PaymentInterface | undefined>,
                            Promise<ReceiptInterface[] | undefined>,
                            Promise<ActivityInterface[] | undefined>,
                        ] = [
                            CompanyService.getOneByUser(user),
                            PaymentService.getOneByUser(user),
                            ReceiptService.getOneByUser(user),
                            ActivityService.getOneByUser(user),
                        ];

                        Promise.all(promises).then(([company, payment, receipts, activities]) => {

                            if (typeof company !== "undefined") toState['company'] = company;
                            if (typeof payment !== "undefined") toState['payment'] = payment;
                            if (typeof receipts !== "undefined") toState['receipts'] = receipts;
                            if (typeof activities !== "undefined") toState['activities'] = activities;

                            setState({...state, ...toState});
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

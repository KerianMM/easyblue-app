import React from 'react';
import Head from 'next/head'
import LoginForm from "../components/LoginForm";
import '../../assets/scss/login.scss';

const Index: React.FC = () => {
    // const router = useRouter();
    //
    // const handleSubmit = useCallback((e) => {
    //     e.preventDefault();
    //
    //     fetch('/api/login', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             /* Form data */
    //         }),
    //     }).then((res) => {
    //         // Do a fast client-side transition to the already prefetched dashboard page
    //         if (res.ok) router.push('/dashboard')
    //     })
    // }, []);
    //
    // useEffect(() => {
    //     router.prefetch('/dashboard')
    // }, []);

    return (
        <div className="container">
            <Head>
                <title>Easyblue: Login</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <LoginForm/>
        </div>
    );
};

export default Index;

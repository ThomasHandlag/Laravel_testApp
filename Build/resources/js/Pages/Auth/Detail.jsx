import React from 'react';
import Header from '@/Components/Header';
import Head from '@inertiajs/inertia-react';

export default function Detail(props){
    return (
        <>
            <Head title="Shopping" />
            <Header active={"shopping"} />
        </>
    )
}
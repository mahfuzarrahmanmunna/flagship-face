import React from 'react';
import Banner from '../../Components/Banner/Banner';
import PhonesContainer from '../../Components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <Banner />
            <PhonesContainer data={data} />
        </>
    );
};

export default Home;
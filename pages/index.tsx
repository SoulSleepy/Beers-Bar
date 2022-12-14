import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from 'components/Header';
import { BeerList } from 'components/BeerList';
import { Paginator } from 'components/Paginator/Paginator';
import { useAppSelector } from 'redux/hooks';


const Home: NextPage = () => {
    const { currentPage } = useAppSelector((store) => store.pageNumber);

    return (
        <div>
            <Head>
                <title>Beers-Bar</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <BeerList />
            <Paginator pageNumber={currentPage} />
        </div>
    );
};

// Для создания стилей можно использовать bootstrap или написать что то своё на scss что будет плюсом.

export default Home;

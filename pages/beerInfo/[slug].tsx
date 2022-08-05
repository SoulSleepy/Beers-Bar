import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { beerItem, useGetSelectedBeerQuery } from 'redux/apiBeer/apiBeer'
import noBeer from 'images/noBeer.png'
import Image from 'next/image'
import { Header } from 'components/Header'
import styles from './beerInfo.module.scss'

const BeerInfo: NextPage = () => {
    const { query } = useRouter()
    const { data, isLoading } = useGetSelectedBeerQuery(Number(query.slug))
    if (!data || isLoading) return <div></div> 
    return (
        <a>
            <Header />
            <div className={styles.beerContainer}>
                <div className={styles.beerImg}>
                    <Image
                        src={data[0].image_url || noBeer}
                        width={75}
                        height={200}
                        layout={'fixed'}
                    />
                </div>
                <div className={styles.beerInfo}>
                    <h3>{data[0].name}</h3>
                    <div><strong>Tagline:</strong> {data[0].tagline}</div>
                    <p><strong>Description:</strong> {data[0].description}</p>
                    <p><strong>Beer strength:</strong> {data[0].abv}</p>
                    <p><strong>Food pairing:</strong> {data[0].food_pairing}</p>
                </div>
            </div>
        </a>
    )
}

export default BeerInfo

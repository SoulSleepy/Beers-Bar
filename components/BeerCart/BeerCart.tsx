import lengthDes140 from 'helps/miniFunctions';
import Link from 'next/link';
import { FC } from 'react';
import { IBeer } from 'types/apiBeerTypes';
import styles from './BeerCart.module.scss';
import noBeer from 'images/noBeer.png';
import Image from 'next/image';

export const BeerCart: FC<IBeer> = (props) => {
    const { image_url, name, description, id } = props;

    return (
        <Link href={`/beerInfo/${encodeURIComponent(id)}`}>
            <a className={styles.beerCart}>
                <div className={styles.img}>
                    <Image src={image_url || noBeer} width={75} height={200} layout={'fixed'}/>
                </div>
                <h3 className={styles.nameBeer}>{name}</h3>
                <p className={styles.infoBeer}>{lengthDes140(description)}</p>
            </a>
        </Link>
    );
};

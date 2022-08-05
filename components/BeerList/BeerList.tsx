import { BeerCart } from 'components/BeerCart';
import { useGetBeerItemsQuery } from 'redux/apiBeer/apiBeer';
import { useAppSelector } from 'redux/hooks';
import { IBeer } from 'types/apiBeerTypes';
import styles  from './BeerList.module.scss';

export const BeerList = () => {
    const { currentPage } = useAppSelector((store) => store.pageNumber);
    const { data, error, isLoading } = useGetBeerItemsQuery(currentPage);
    if (isLoading) return <div> Loading </div>;
    return (
        <div className={styles.beerItems}>
            {data?.map((item) => (
                <BeerCart key={item.id} {...item} />
            ))}
        </div>
    );
};

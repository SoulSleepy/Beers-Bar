import cn from 'classnames'
import { FC, MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { selectedPage } from 'redux/slices/sliceNumberPage'
import styles from './Paginator.module.scss'

const maxBeers = 325

type SearchParamsType = {
    pageNumber: number
    pageCount?: number
}

export const Paginator: FC<SearchParamsType> = (props) => {
    const { pageNumber, pageCount = 20 } = props
    const buttonCount: number = Math.ceil(maxBeers / pageCount)
    const dispatch = useAppDispatch()
    const { currentPage } = useAppSelector((store) => store.pageNumber)
    const arrPages: number[] = [...Array(buttonCount + 1).keys()].slice(1)
    const setCurrentPage = ({
        currentTarget,
    }: MouseEvent<HTMLButtonElement>) => {
        dispatch(selectedPage(Number(currentTarget.textContent)))
    }
    return (
        <div className={styles.paginator}>
            {arrPages.map((item, i) => (
                <button
                    key={i}
                    className={cn({[styles.activePage]: currentPage == i + 1,})}
                    onClick={setCurrentPage}
                >{item}
                </button>
            ))}
        </div>
    )
}

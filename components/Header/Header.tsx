import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useLazyGetBeerNameQuery } from 'redux/apiBeer/apiBeer'
import { useRouter } from 'next/router'
import { IBeer } from 'types/apiBeerTypes'
import styles from './header.module.scss'
import searchIcon from 'images/search.png'
import Image from 'next/image';
import Link from 'next/link';
import { describe } from 'node:test'

export const Header = () => {
    const [value, setValue] = useState<string>('')
    const router = useRouter()
    const [getListSearch, { data, error, isLoading }] =
        useLazyGetBeerNameQuery()
    const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value)
    }
    const setSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        getListSearch(value)
    }

    useEffect(() => {
        if(data?.length===0){
            router.push(`/404`)
        }
        else if (!isLoading && data) {
            router.push(`/beerInfo/${data[0]?.id}`)
        }
    }, [isLoading, data])
    return (
        <header>
            <div className={styles.search}>
                <form onSubmit={setSubmitSearch}>
                    <input
                        type="text"
                        onChange={handlerChange}
                        placeholder="search by beer name..."
                        value={value}
                    /> 
                    <button type="submit"><Image src={searchIcon}/></button>
                </form>
                <Link href={'/'}><h2>Beers-Bar</h2></Link>
            </div>
        </header>
    )
}

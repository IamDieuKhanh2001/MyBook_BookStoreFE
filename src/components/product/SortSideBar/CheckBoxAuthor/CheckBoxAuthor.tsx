'use client'
import React, { useState } from 'react'
import styles from './CheckBoxAuthor.module.scss'
import ShowMoreLess from '../ShowMoreLess/ShowMoreLess'
import { IBookFilter } from '../../../../../types/IBookFilter'
import LoadingFilter from '../LoadingFilter/LoadingFilter'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'

interface ICheckBoxAuthorProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CheckBoxAuthor = (props: ICheckBoxAuthorProps) => {
    const { filters, setFilters } = props
    const [isShowMore, setIsShowMore] = useState<boolean>(false)
    const { getAuthorListPaginated } = useAPIGuest()
    const { paginatedData: authorList, isLoading } = getAuthorListPaginated('999999')

    const handleAuthorRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            const authorSelected = authorList.find((item) => item.id === parseInt(value, 10));
            setFilters((prevFilters) => ({
                ...prevFilters,
                author: authorSelected || null,
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                publisher: null,
            }));
        }
    }

    return (
        <div>
            <h5 className="px-3 py-2 border-bottom">Tác giả</h5>
            <div className={`py-2 px-3 ${styles.checkBoxContent} ${isShowMore ? styles.showFull : styles.showLess}`}>
                {!isLoading ? (
                    authorList.map((author) => (
                        <div key={author.id} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name='checkbox_author'
                                id={`author_id_${author.id}`}
                                value={author.id}
                                checked={filters?.author?.id === author.id}
                                onChange={handleAuthorRadioChange}
                            />
                            <label className="form-check-label" htmlFor={`author_id_${author.id}`}>
                                {author.author_name}
                            </label>
                        </div>
                    ))
                ) : (
                    <LoadingFilter />
                )}

            </div>
            <ShowMoreLess
                isShowMore={isShowMore}
                setIsShowMore={setIsShowMore}
            />
        </div>
    )
}

export default CheckBoxAuthor

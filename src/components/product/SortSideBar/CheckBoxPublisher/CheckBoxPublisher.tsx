'use client'
import React, { useState } from 'react'
import styles from './CheckBoxPublisher.module.scss'
import ShowMoreLess from '../ShowMoreLess/ShowMoreLess'
import useAPIBookPublisher from '@/lib/hooks/api/useAPIBookPublisher'
import { IBookFilter } from '../../../../../types/IBookFilter'
import LoadingFilter from '../LoadingFilter/LoadingFilter'

interface ICheckBoxPublisherProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CheckBoxPublisher = (props: ICheckBoxPublisherProps) => {
    const { filters, setFilters } = props
    const [isShowMore, setIsShowMore] = useState<boolean>(false)
    const { getPublisherListPaginated } = useAPIBookPublisher()
    const { paginatedData: publisherList, isLoading } = getPublisherListPaginated('999999')

    const handlePublisherRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            const publisherSelected = publisherList.find((item) => item.id === parseInt(value, 10));
            setFilters((prevFilters) => ({
                ...prevFilters,
                publisher: publisherSelected || null,
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
            <h5 className="px-3 py-2 border-bottom">Nhà xuất bản</h5>
            <div className={`py-2 px-3 ${styles.checkBoxContent} ${isShowMore ? styles.showFull : styles.showLess}`}>
                {!isLoading ? (
                    publisherList.map((publisher) => (
                        <div key={publisher.id} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name='checkbox_publisher'
                                id={`publisher_id_${publisher.id}`}
                                value={publisher.id}
                                checked={filters?.publisher?.id === publisher.id}
                                onChange={handlePublisherRadioChange}
                            />
                            <label className="form-check-label" htmlFor={`publisher_id_${publisher.id}`}>
                                {publisher.name}
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

export default CheckBoxPublisher

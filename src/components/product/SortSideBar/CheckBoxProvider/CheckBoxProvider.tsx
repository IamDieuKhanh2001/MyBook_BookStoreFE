'use client'
import React, { useState } from 'react'
import styles from './CheckBoxProvider.module.scss'
import ShowMoreLess from '../ShowMoreLess/ShowMoreLess'
import { IBookFilter } from '../../../../../types/IBookFilter'
import LoadingFilter from '../LoadingFilter/LoadingFilter'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'

interface ICheckBoxProviderProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CheckBoxProvider = (props: ICheckBoxProviderProps) => {
    const { filters, setFilters } = props
    const [isShowMore, setIsShowMore] = useState<boolean>(false)
    const { getProviderListPaginated } = useAPIGuest()
    const { paginatedData: providerList, isLoading } = getProviderListPaginated('999999')

    const handleProviderRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            const providerSelected = providerList.find((item) => item.id === parseInt(value, 10));
            setFilters((prevFilters) => ({
                ...prevFilters,
                provider: providerSelected || null,
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                provider: null,
            }));
        }
    }

    return (
        <div>
            <h5 className="px-3 py-2 border-bottom">Nhà cung cấp</h5>
            <div className={`py-2 px-3 ${styles.checkBoxContent} ${isShowMore ? styles.showFull : styles.showLess}`}>
                {!isLoading ? (
                    providerList.map((provider) => (
                        <div key={provider.id} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name='checkbox_provider'
                                id={`provider_id_${provider.id}`}
                                value={provider.id}
                                checked={filters?.provider?.id === provider.id}
                                onChange={handleProviderRadioChange}
                            />
                            <label className="form-check-label" htmlFor={`provider_id_${provider.id}`}>
                                {provider.name}
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

export default CheckBoxProvider

'use client'
import useAPIBookLanguage from '@/lib/hooks/api/useAPIBookLanguage';
import React from 'react'
import { IBookLanguage } from '../../../../../types/IBookLanguage';
import LoadingFilter from '../LoadingFilter/LoadingFilter';

interface ICheckBoxLanguageProps {
    filters: {
        limit: string;
        search: string;
        minPrice: string;
        maxPrice: string;
        orderBy: string;
        langId: string,
        authorId: string,
        ccategoryId: string,
        publisherId: string,
        providerId: string,
        bookFormId: string,
    }
    setFilters: React.Dispatch<React.SetStateAction<{
        limit: string;
        search: string;
        minPrice: string;
        maxPrice: string;
        orderBy: string;
        langId: string,
        authorId: string,
        ccategoryId: string,
        publisherId: string,
        providerId: string,
        bookFormId: string,
    }>>
}
const CheckBoxLanguage = (props: ICheckBoxLanguageProps) => {
    const { filters, setFilters } = props
    const { getLanguageList } = useAPIBookLanguage()
    const { data, isLoading } = getLanguageList()
    const handleLanguageRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                langId: value,
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                langId: '',
            }));
        }
    }

    return (
        <div>
            <h5 className="px-3 py-2 border-bottom">Ngôn ngữ</h5>
            <div className='py-2 px-3'>
                {!isLoading ? (
                    data.map((checkboxItem: IBookLanguage) => (
                        <div key={checkboxItem.id} className="form-check mb-1">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name={'checkbox_lang'}
                                id={`lang_id_${checkboxItem.id.toString()}`}
                                value={checkboxItem.id}
                                checked={filters.langId === `${checkboxItem.id}`}
                                onChange={handleLanguageRadioChange}
                            />
                            <label className="form-check-label" htmlFor={`lang_id_${checkboxItem.id.toString()}`}>
                                {checkboxItem.language_name}
                            </label>
                        </div>
                    ))
                ) : (
                    <LoadingFilter />
                )}
            </div>
        </div>
    )
}

export default CheckBoxLanguage

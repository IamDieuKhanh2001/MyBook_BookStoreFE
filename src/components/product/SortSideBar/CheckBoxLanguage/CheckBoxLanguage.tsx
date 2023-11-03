'use client'
import useAPIBookLanguage from '@/lib/hooks/api/useAPIBookLanguage';
import React from 'react'
import { IBookLanguage } from '../../../../../types/IBookLanguage';
import LoadingFilter from '../LoadingFilter/LoadingFilter';
import { IBookFilter } from '../../../../../types/IBookFilter';

interface ICheckBoxLanguageProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CheckBoxLanguage = (props: ICheckBoxLanguageProps) => {
    const { filters, setFilters } = props
    const { getLanguageList } = useAPIBookLanguage()
    const { data, isLoading } = getLanguageList()
    const handleLanguageRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            const langSelected = data.find((item:IBookLanguage) => item.id === parseInt(value, 10));
            setFilters((prevFilters) => ({
                ...prevFilters,
                language: langSelected,
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                language: null,
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
                                checked={filters.language?.id === checkboxItem.id}
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

'use client'
import React from 'react'
import LoadingFilter from '../LoadingFilter/LoadingFilter';
import { IBookFilter } from '../../../../../types/IBookFilter';
import useAPIGuest from '@/lib/hooks/api/useAPIGuest';

interface ICheckBoxFormProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CheckBoxForm = (props: ICheckBoxFormProps) => {
    const { filters, setFilters } = props
    const { getBookFormList } = useAPIGuest()
    const { data, isLoading } = getBookFormList()
    const handleFormRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            const formSelected = data.find((item:IBookForm) => item.id === parseInt(value, 10));
            setFilters((prevFilters) => ({
                ...prevFilters,
                bookForm: formSelected,
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                bookForm: null,
            }));
        }
    }

    return (
        <div>
            <h5 className="px-3 py-2 border-bottom">Hình thức</h5>
            <div className='py-2 px-3'>
                {!isLoading ? (
                    data.map((checkboxItem: IBookForm) => (
                        <div key={checkboxItem.id} className="form-check mb-1">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name={'checkbox_form'}
                                id={`form_id_${checkboxItem.id.toString()}`}
                                value={checkboxItem.id}
                                checked={filters.bookForm?.id === checkboxItem.id}
                                onChange={handleFormRadioChange}
                            />
                            <label className="form-check-label" htmlFor={`form_id_${checkboxItem.id.toString()}`}>
                                {checkboxItem.name}
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

export default CheckBoxForm

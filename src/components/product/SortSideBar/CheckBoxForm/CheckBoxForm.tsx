'use client'
import React from 'react'
import LoadingFilter from '../LoadingFilter/LoadingFilter';
import useAPIBookForm from '@/lib/hooks/api/useAPIBookForm';

interface ICheckBoxFormProps {
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
const CheckBoxForm = (props: ICheckBoxFormProps) => {
    const { filters, setFilters } = props
    const { getBookFormList } = useAPIBookForm()
    const { data, isLoading } = getBookFormList()
    const handleFormRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        if (checked === true) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                bookFormId: value,
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                bookFormId: '',
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
                                checked={filters.bookFormId === `${checkboxItem.id}`}
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

'use client'
import React from 'react'
import { IBookFilter } from '../../../../../types/IBookFilter'

interface ICheckboxPriceProps {
    filters: IBookFilter
    setFilters: React.Dispatch<React.SetStateAction<IBookFilter>>
}
const CheckboxPrice = (props: ICheckboxPriceProps) => {
    const { filters, setFilters } = props

    const checkboxPriceListItem = [
        {
            name: 'checkbox_price',
            id: 'checkbox_range_1',
            minPrice: '0',
            maxPrice: '150000',
            label: '0 - 150.000VND',
        },
        {
            name: 'checkbox_price',
            id: 'checkbox_range_2',
            minPrice: '150000',
            maxPrice: '300000',
            label: '150.000 - 300.000VND',
        },
        {
            name: 'checkbox_price',
            id: 'checkbox_range_3',
            minPrice: '300000',
            maxPrice: '500000',
            label: '300.000 - 500.000VND',
        },
        {
            name: 'checkbox_price',
            id: 'checkbox_range_4',
            minPrice: '500000',
            maxPrice: '700000',
            label: '500.000 - 700.000VND',
        },
        {
            name: 'checkbox_price',
            id: 'checkbox_range_5',
            minPrice: '700000',
            maxPrice: '',
            label: '700.000 - trở lên',
        },
    ]

    const handlePriceRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target
        const parts = value.split("-");
        if (checked === true) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                minPrice: parts[0],
                maxPrice: parts[1],
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                minPrice: '',
                maxPrice: '',
            }));
        }
    }

    return (
        <div>
            <h5 className="px-3 py-2 border-bottom">Giá</h5>
            <div className='py-2 px-3'>
                {checkboxPriceListItem.map((checkboxItem) => (
                    <div key={checkboxItem.id} className="form-check mb-1">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={checkboxItem.name}
                            id={checkboxItem.id}
                            value={`${checkboxItem.minPrice}-${checkboxItem.maxPrice}`}
                            checked={filters.minPrice === `${checkboxItem.minPrice}` && filters.maxPrice === `${checkboxItem.maxPrice}`}
                            onChange={handlePriceRadioChange}
                        />
                        <label className="form-check-label" htmlFor={checkboxItem.id}>
                            {checkboxItem.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CheckboxPrice

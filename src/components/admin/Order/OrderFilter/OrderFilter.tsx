import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

interface IOrderFilterProps {
    filters: {
        limit: string;
        email: string;
        status: string;
        payment_status: string;
    }
    setFilters: React.Dispatch<React.SetStateAction<{
        limit: string;
        email: string;
        status: string;
        payment_status: string;
    }>>
}
const OrderFilter = (props: IOrderFilterProps) => {
    const { filters, setFilters } = props

    return (
        <>
            <AdminSearchBar
                setSearchKeyWord={(value: string) => setFilters({ ...filters, email: value })}
                placeholderText='Tìm kiếm gmail tài khoản'
            />
            <FormControl sx={{ mt: 2 }}>
                <FormLabel sx={{ fontSize: '20px' }} color='secondary' id="orderStatusFilter">
                    Trạng thái đơn hàng
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="orderStatusFilter"
                    name="row-radio-buttons-group"
                    value={filters.status}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilters({ ...filters, status: event.target.value })}
                >
                    <FormControlLabel value="" control={<Radio color='secondary' size='medium' />} label="Tất cả" />
                    <FormControlLabel value="pending" control={<Radio color='secondary' size='medium' />} label="Chờ xác nhận" />
                    <FormControlLabel value="confirmed" control={<Radio color='secondary' size='medium' />} label="Đã xác nhận" />
                    <FormControlLabel value="delivering" control={<Radio color='secondary' size='medium' />} label="Đang vận chuyển" />
                    <FormControlLabel value="completed" control={<Radio color='secondary' size='medium' />} label="Đã hoàn thành" />
                    <FormControlLabel value="canceled" control={<Radio color='secondary' size='medium' />} label="Đã hủy" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
                <FormLabel sx={{ fontSize: '20px' }} color='secondary' id="orderPaymentStatusFilter">
                    Trạng thái thanh toán
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="orderPaymentStatusFilter"
                    name="row-radio-buttons-group"
                    value={filters.payment_status}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilters({ ...filters, payment_status: event.target.value })}
                >
                    <FormControlLabel value="" control={<Radio color='secondary' size='medium' />} label="Tất cả" />
                    <FormControlLabel value="unpaid" control={<Radio color='secondary' size='medium' />} label="Chưa thanh toán" />
                    <FormControlLabel value="paid" control={<Radio color='secondary' size='medium' />} label="Đã thanh toán" />
                    <FormControlLabel value="refunded" control={<Radio color='secondary' size='medium' />} label="Đã hoàn tiền" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default OrderFilter

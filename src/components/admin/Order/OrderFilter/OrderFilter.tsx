import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import { Badge, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import FilterItem from './FilterItem/FilterItem';
import useAPIOrder from '@/lib/hooks/api/useAPIOrder';

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
    const { getAllOrderStatistics } = useAPIOrder()
    const { data } = getAllOrderStatistics()

    return (
        <>
            <AdminSearchBar
                setSearchKeyWord={(value: string) => setFilters({ ...filters, email: value })}
                placeholderText='Tìm kiếm gmail tài khoản'
            />
            <FormControl sx={{ mt: 2 }}>
                <FormLabel sx={{ fontSize: '20px' }} color='success' id="orderStatusFilter">
                    Trạng thái đơn hàng
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="orderStatusFilter"
                    name="row-radio-buttons-group"
                    value={filters.status}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilters({ ...filters, status: event.target.value })}
                >
                    <FilterItem
                        color='success'
                        value=''
                        label='Tất cả'
                        total={
                            data.reduce((accumulator, currentValue) => {
                                return accumulator + currentValue.total;
                            }, 0)
                        }
                    />
                    <FilterItem
                        color='success'
                        value='pending'
                        label='Chờ xác nhận'
                        total={data.find(obj => obj.status === 'pending')?.total || 0}
                    />
                    <FilterItem
                        color='success'
                        value='confirmed'
                        label='Đã xác nhận'
                        total={data.find(obj => obj.status === 'confirmed')?.total || 0}
                    />
                    <FilterItem
                        color='success'
                        value='delivering'
                        label='Đang vận chuyển'
                        total={data.find(obj => obj.status === 'delivering')?.total || 0}
                    />
                    <FilterItem
                        color='success'
                        value='completed'
                        label='Đã hoàn thành'
                        total={data.find(obj => obj.status === 'completed')?.total || 0}
                    />
                    <FilterItem
                        color='success'
                        value='canceled'
                        label='Đã hủy'
                        total={data.find(obj => obj.status === 'canceled')?.total || 0}
                    />
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
                    <FilterItem value='' label='Tất cả' total={10} />
                    <FilterItem value='unpaid' label='Chưa thanh toán' total={10} />
                    <FilterItem value='paid' label='Đã thanh toán' total={10} />
                    <FilterItem value='refunded' label='Đã hoàn tiền' total={10} />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default OrderFilter

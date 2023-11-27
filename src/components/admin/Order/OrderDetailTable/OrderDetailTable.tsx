'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { truncateText } from '@/lib/utils/TextUtils'
import CustomButton from '@/components/forms/theme-elements/CustomButton'
import { IconCheck, IconX } from '@tabler/icons-react'
import CustomChip from '@/components/forms/theme-elements/CustomChip'
import PaymentStatus from '@/enum/PaymentStatus'

interface IOrderDetailTableProps {
    orderData: IOrder
}
const OrderDetailTable = (props: IOrderDetailTableProps) => {
    const { orderData } = props
    const {
        id,
        user,
        payment_method,
        customer_note,
        status,
        created_at,
        product_price,
        fee_price,
        final_price,
        voucher,
    } = orderData

    return (
        <>
            <Table
                aria-label="simple table"
                sx={{
                    whiteSpace: "nowrap",
                    mt: 2
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell align='center' colSpan={2}>
                            <Typography variant="h4" fontWeight={600}>
                                Thông tin đơn hàng mã số: 1111
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã đơn hàng
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {id}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên khách hàng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {user.email}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trạng thái
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <CustomChip
                                bgColor={
                                    status === PaymentStatus.PAID
                                        ? ('success')
                                        : status === PaymentStatus.UNPAID
                                            ? ('error')
                                            : undefined
                                }
                                label={
                                    status === PaymentStatus.PAID
                                        ? ('Đã thanh toán')
                                        : status === PaymentStatus.UNPAID
                                            ? ('Chưa thanh toán')
                                            : undefined
                                }
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày tạo đơn
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {created_at}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Phương thức thanh toán
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {payment_method}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Giá tổng sản phẩm
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {product_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Voucher sử dụng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {voucher}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Phí ship
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                + {fee_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tổng phí đơn hàng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {final_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ghi chú đơn
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {customer_note}
                            </Typography>
                        </TableCell> 
                    </TableRow>
                </TableBody>
            </Table>
            <CustomButton
                startIcon={<IconCheck />}
                color="success"
                size='small' disableElevation variant="contained" href=""
                sx={{ mr: 2, mt: 2 }}
                disabled={true}
            >
                Xác nhận đơn
            </CustomButton>
            <CustomButton
                startIcon={<IconX />}
                color="error"
                size='small' disableElevation variant="contained" href=""
                sx={{ mr: 2, mt: 2 }}
                disabled={true}
            >
                Hủy đơn hàng
            </CustomButton>
        </>
    )
}

export default OrderDetailTable

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
import { IconCheck, IconTruckDelivery, IconX } from '@tabler/icons-react'
import CustomChip from '@/components/forms/theme-elements/CustomChip'
import PaymentStatus from '@/enum/PaymentStatus'
import OrderStatus from '@/enum/OrderStatus'

interface IOrderDetailTableProps {
    orderData: IOrder
    handleDeliveringOrder: (id: number) => Promise<void>
    handleConfirmOrder: (id: number) => Promise<void>
    handleCancelOrder: (id: number) => Promise<void>
}
const OrderDetailTable = (props: IOrderDetailTableProps) => {
    const { orderData, handleDeliveringOrder, handleConfirmOrder, handleCancelOrder } = props
    const {
        id,
        user,
        payment_method,
        customer_note,
        payment_status,
        status,
        created_at,
        product_price,
        fee_price,
        discount_price,
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
                                Thông tin đơn hàng mã số: {id}
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
                                Trạng thái thanh toán
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <CustomChip
                                bgColor={
                                    payment_status === PaymentStatus.PAID
                                        ? ('success')
                                        : payment_status === PaymentStatus.UNPAID
                                            ? ('error')
                                            : payment_status === PaymentStatus.REFUNDED ?
                                                ('warning')
                                                : undefined
                                }
                                label={
                                    payment_status === PaymentStatus.PAID
                                        ? ('Đã thanh toán')
                                        : payment_status === PaymentStatus.UNPAID
                                            ? ('Chưa thanh toán')
                                            : payment_status === PaymentStatus.REFUNDED ?
                                                ('Đã hoàn tiền')
                                                : undefined
                                }
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trạng thái đơn hàng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <CustomChip
                                bgColor={
                                    status === OrderStatus.COMPLETED
                                        ? ('success')
                                        : status === OrderStatus.CONFIRMED
                                            ? ('info')
                                            : status === OrderStatus.DELIVERING ?
                                                ('warning')
                                                : status === OrderStatus.PENDING ?
                                                    ('error')
                                                    : status === OrderStatus.CANCELED ?
                                                        ('grey')
                                                        : undefined
                                }
                                label={
                                    status === OrderStatus.COMPLETED
                                        ? ('Đã nhận hàng')
                                        : status === OrderStatus.CONFIRMED
                                            ? ('Đã xác nhận')
                                            : status === OrderStatus.DELIVERING ?
                                                ('Đang vận chuyển')
                                                : status === OrderStatus.PENDING ?
                                                    ('Đang chờ xác nhận')
                                                    : status === OrderStatus.CANCELED ?
                                                        ('Đã hủy')
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
                                {voucher === null ? 'Không sử dụng' : voucher + ' (-' + discount_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) + ')'}
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
            {
                (status === OrderStatus.PENDING ||
                    status === OrderStatus.CONFIRMED ||
                    status === OrderStatus.DELIVERING)
                &&
                (
                    <>
                        <CustomButton
                            startIcon={<IconCheck />}
                            color="success"
                            size='small' disableElevation variant="contained" href=""
                            sx={{ mr: 2, mt: 2 }}
                            disabled={
                                status !== OrderStatus.PENDING
                            }
                            onClick={() => handleConfirmOrder(id)}
                        >
                            Xác nhận đơn
                        </CustomButton>
                        <CustomButton
                            startIcon={<IconTruckDelivery />}
                            color="success"
                            size='small' disableElevation variant="contained" href=""
                            sx={{ mr: 2, mt: 2 }}
                            disabled={
                                status !== OrderStatus.CONFIRMED
                            }
                            onClick={() => handleDeliveringOrder(id)}
                        >
                            Đã gửi vận chuyển
                        </CustomButton>
                        <CustomButton
                            startIcon={<IconX />}
                            color="error"
                            size='small' disableElevation variant="contained" href=""
                            sx={{ mr: 2, mt: 2 }}
                            onClick={() => handleCancelOrder(id)}
                        >
                            Hủy đơn hàng
                        </CustomButton>
                    </>
                )
            }

        </>
    )
}

export default OrderDetailTable

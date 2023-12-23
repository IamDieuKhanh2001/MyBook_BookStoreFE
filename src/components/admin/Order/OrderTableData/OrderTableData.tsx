'use client'

import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Stack, CircularProgress, Box } from '@mui/material'
import { IconEye } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import CustomChip from '@/components/forms/theme-elements/CustomChip'
import PaymentStatus from '@/enum/PaymentStatus'
import OrderStatus from '@/enum/OrderStatus'

interface IOrderTableDataProps {
    orderListLoaded: IOrder[]
    isReachedEnd: boolean | undefined
    loadMoreRef: (node?: Element | null | undefined) => void
}
const OrderTableData = (props: IOrderTableDataProps) => {
    const router = useRouter()
    const { orderListLoaded, isReachedEnd, loadMoreRef } = props

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
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã đơn
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tài khoản
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày tạo đơn
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trạng thái đơn
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Trạng thái thanh toán
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Xem chi tiết
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderListLoaded && orderListLoaded.length > 0 ? (
                        orderListLoaded.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {item.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {item.user.email}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {item.created_at}
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <CustomChip
                                        bgColor={
                                            item.status === OrderStatus.COMPLETED
                                                ? ('success')
                                                : item.status === OrderStatus.CONFIRMED
                                                    ? ('info')
                                                    : item.status === OrderStatus.DELIVERING ?
                                                        ('warning')
                                                        : item.status === OrderStatus.PENDING ?
                                                            ('error')
                                                            : item.status === OrderStatus.CANCELED ?
                                                                ('grey')
                                                                : undefined
                                        }
                                        label={
                                            item.status === OrderStatus.COMPLETED
                                                ? ('Đã nhận hàng')
                                                : item.status === OrderStatus.CONFIRMED
                                                    ? ('Đã xác nhận')
                                                    : item.status === OrderStatus.DELIVERING ?
                                                        ('Đang vận chuyển')
                                                        : item.status === OrderStatus.PENDING ?
                                                            ('Đang chờ xác nhận')
                                                            : item.status === OrderStatus.CANCELED ?
                                                                ('Đã hủy')
                                                                : undefined
                                        }
                                    />
                                </TableCell>
                                <TableCell align='center'>
                                    <CustomChip
                                        bgColor={
                                            item.payment_status === PaymentStatus.PAID
                                                ? ('success')
                                                : item.payment_status === PaymentStatus.UNPAID
                                                    ? ('error')
                                                    : item.payment_status === PaymentStatus.REFUNDED ?
                                                        ('warning')
                                                        : undefined
                                        }
                                        label={
                                            item.payment_status === PaymentStatus.PAID
                                                ? ('Đã thanh toán')
                                                : item.payment_status === PaymentStatus.UNPAID
                                                    ? ('Chưa thanh toán')
                                                    : item.payment_status === PaymentStatus.REFUNDED ?
                                                        ('Đã hoàn tiền')
                                                        : undefined
                                        }
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='success'
                                        size="small"
                                        onClick={() => {
                                            router.push(`/admin/manage/order/detail/${item.id}`)
                                        }}
                                    >
                                        <IconEye />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>
                                <Typography align="center" variant="h4" mt={2}>
                                    No data available
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                    {/* Load more order when scroll and see this element  */}
                    {
                        (isReachedEnd === false) && (
                            <TableRow
                                ref={loadMoreRef}
                            >
                                <TableCell align='center' colSpan={5}>
                                    <CircularProgress color="secondary" />
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default OrderTableData

'use client'

import React from 'react'
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { truncateText } from '@/lib/utils/TextUtils'
import CustomButton from '@/components/forms/theme-elements/CustomButton'
import { IconCheck, IconEye, IconX } from '@tabler/icons-react'
import CustomChip from '@/components/forms/theme-elements/CustomChip'
import DashboardCard from '@/components/shared/DashboardCard'
import { useRouter } from 'next/navigation'

interface IOrderProductItemProps {
    orderProductData: ItemOrdered;
}
const OrderProductItem = (props: IOrderProductItemProps) => {
    const { orderProductData } = props
    const router = useRouter()

    return (
        <Box sx={{ mb: 2 }}>
            <DashboardCard
                title={`Sản phẩm: ${orderProductData.product.name}`}
                subtitle={`ISBN code: ${orderProductData.product.isbn_code}`}
            >
                <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                    <Table
                        aria-label="simple table"
                        sx={{
                            whiteSpace: "nowrap",
                            mt: 2
                        }}
                    >
                        <TableBody>
                            <TableRow>
                                <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Số lượng
                                    </Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        x {orderProductData.quantity}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        Giá mỗi món
                                    </Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {orderProductData.price_per_unit.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <CustomButton
                        startIcon={<IconEye />}
                        color="success"
                        size='small' disableElevation variant="contained" href=""
                        sx={{ mr: 2, mt: 2 }}
                        onClick={
                            () => router.push(`/admin/manage/products/detail/${orderProductData.product.isbn_code}`)}
                    >
                        Chi tiết sản phẩm
                    </CustomButton>
                </Box>
            </DashboardCard>
        </Box>
    )
}

export default OrderProductItem
